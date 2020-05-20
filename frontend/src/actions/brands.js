import axios from 'axios';
import {GET_ALL_BRANDS,BRANDS_ERROR,BRANDS_BY_NAME,SET_FILTER_VALUES} from './types';


export const getAllBrands = () => async dispatch => {

try{

  const res = await axios.get('/brands/advertisersNames');
  dispatch({
      type:GET_ALL_BRANDS,
      payload:res.data
  })
}
catch(err){
    dispatch({
        type:BRANDS_ERROR,
        payload:{"errors" : err.message}
    })
}
}

export const getBrandsByName = (name) => async dispatch => {
    try{
        const res = await axios.get(`/brands/getBrands/${name}`)
        dispatch({
            type:BRANDS_BY_NAME,
            payload:res.data
        })
    }
    catch(err){
        dispatch({
            type:BRANDS_ERROR,
            payload:{"errors":err.message}
        })
    }
}


export const adverFilterNames = (names) => dispatch => {
     dispatch({
         type: SET_FILTER_VALUES,
         payload:names
     })
}