import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getAllBrands, getBrandsByName,adverFilterNames } from '../actions/brands';
import propTypes from 'prop-types';

const Brands = ({ getAllBrands, getBrandsByName,adverFilterNames, brands: { advertiserNames, loading, errors, brandsByName,filterValues } }) => {

    useEffect(() => {
        getAllBrands();
        // eslint-disable-next-line
    }, [])

    const advertisersName = advertiserNames.map(campaign => campaign.advertiserName)
    let advertiserUniqueNames = advertisersName.filter((x, i) => advertisersName.indexOf(x) >= i)
    
    const [toggleDropDown, setToggleDropDown] = useState(false);
    const [inputVal, setInputVal] = useState('');
    const [brandLabel, setBrandLabel] = useState('');
    const [timeLineLabel, setTimeLineLabel] = useState('');

    const iValHandler = e => {
        setToggleDropDown(!toggleDropDown);
    }

    const inputChangeHandler = e => {
        adverFilterNames(advertiserUniqueNames.filter(x => x.toLowerCase().includes(e.target.value.toLowerCase())))
        setToggleDropDown(!toggleDropDown);
        setInputVal(e.target.value);
        if(e.target.value === ''){
            setBrandLabel('')
        }
    }
    const aClickHandler = e => {
        setInputVal(e.target.text)
        setToggleDropDown(!toggleDropDown);
        setBrandLabel(e.target.text)
        getBrandsByName(e.target.text)
    }

    const timeHandler = e => {
        setTimeLineLabel(e.nativeEvent.target[e.target.value].text)
    }


    return (
        <>
            {!loading && Object.keys(errors).length ?
                (<h1>{errors}</h1>) :
                (<>
                    <nav className='nav'>
                        <div>
                            <label>Advertiser</label>
                            <input type="text" name="advert" value={inputVal} onChange={inputChangeHandler} />
                            <a href='#!'><i className="fa fa-arrow-down ival" onClick={iValHandler}></i> </a>
                        </div>
                        <div>
                            <label>Timeline</label>
                            <select onChange={timeHandler}>
                                <option value="0">Options</option>
                                <option value="1">Today</option>
                                <option value="2">Last 7 days</option>
                                <option value="3">Last quarter</option>
                                <option value="4">Last month</option>
                                <option value="5">Last year</option>
                                <option value="6">Custom date</option>
                            </select>
                        </div>
                    </nav>
                      {toggleDropDown && filterValues.length > 0 ? (<div className='divAdver'>{filterValues.map((name, index) => (<>
                            <div key={index}><a href='#!' onClick={aClickHandler}>{name}</a></div>
                        </>))}</div>) : (toggleDropDown && <><div className='divAdver'>{advertiserUniqueNames.map((name, index) => (<>
                            <div key={index}><a href='#!' onClick={aClickHandler}>{name}</a></div>
                        </>))}</div></>)}
                    <div className='brandLabel'>
                        {brandLabel && (<><label>Hello {brandLabel} !</label></>)}
                    </div>
                    <div className='timelineLabel'>
                        {timeLineLabel && timeLineLabel !== 'Options' && (<><label>Showing {timeLineLabel} data</label></>)}
                    </div>
                    {brandsByName !== null && brandsByName.length > 0 &&
                        <div className="brandDiv">
                            <table className="brandTable">
                                <tr>
                                    <th><i className="fa fa-arrow-circle-down"></i>Brand Name</th>
                                    <th><i className="fa fa-arrow-circle-down"></i>First campaign Name</th>
                                    <th><i className="fa fa-arrow-circle-down"></i>Count of campaigns inside brand</th>
                                </tr>
                                {brandsByName.map((brand, index) => (
                                    <>
                                        <tr key={index}>
                                            <td>{brand.name}</td>
                                            <td>{brand.campaigns !== null && brand.campaigns.length > 0 ? brand.campaigns[0].name : 'No campaigns Found'}</td>
                                            <td>{brand.campaigns.length}</td>
                                        </tr>
                                    </>))}
                            </table>
                        </div>}
                </>)}
        </>
    )
}

Brands.propTypes = {
    getAllBrands: propTypes.func.isRequired,
    getBrandsByName: propTypes.func.isRequired,
    brands: propTypes.object.isRequired,
    adverFilterNames : propTypes.func.isRequired
}

const mapStateToProps = state => ({
    brands: state.brands
})

export default connect(mapStateToProps, { getAllBrands, getBrandsByName,adverFilterNames })(Brands)

