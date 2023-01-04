import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import "./Country.css"
import { NavLink } from 'react-router-dom';
import  Detail  from '../Detail/Detail.jsx'
import { SET_ARRAY_ON_CHANGE , loadCountries , SET_ARRAY_ON_DISPLAY, SET_DETAIL} from '../../Actions/index'
import { useDispatch, useSelector } from "react-redux";
//import Detail from "./components/Detail/Detail";
//'../components/Detail/Detail.jsx'
export default function Country (props) {
    let dispatch = useDispatch()
function clicks (event) {
    //dispatch set detail action
    //link to detail
    console.log('click en... ')
    console.log(props.title)
    dispatch(SET_DETAIL(props.title))

}
 let name1 = props.title[0].toUpperCase()
 let name = props.title.slice(1)
 let fullname = name1 + name
 name = fullname
//get the rest of the string

    return (
        <div className='generalcountry' onClick={(e) => clicks(e) }>

<Link to="/detail"><div className='countrycontainer'>
        <div className='text'>
            <h3>{name}</h3>
        </div>
        <div className='text'>
            <h5>{props.continent}</h5>
        </div>
        <div>
        <img className='image' src={props.image} alt="img"></img>
        </div>
        </div></Link>
        </div>
    
    )
}