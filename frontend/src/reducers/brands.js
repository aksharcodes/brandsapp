import { GET_ALL_BRANDS, BRANDS_ERROR,BRANDS_BY_NAME,SET_FILTER_VALUES } from '../actions/types';

const initialState = {
    advertiserNames: [],
    filterValues:[],
    errors: {},
    brandsByName : [],
    loading: true
}


export default function(state = initialState, action){

    const { type, payload } = action;

    switch (type) {
        case GET_ALL_BRANDS:
            return {
                ...state,
                advertiserNames: payload,
                loading: false
            }
        case BRANDS_BY_NAME:
        return {
            ...state,
            brandsByName: payload,
            loading: false
        }
        case BRANDS_ERROR:
            return {
                ...state,
                loading: false,
                errors:payload
            }
            case SET_FILTER_VALUES:
                return{
                    ...state,
                    loading:false,
                    filterValues : payload
                }
        default:
            return state
    }
    
}