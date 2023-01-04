import React, { Component , useState } from 'react';

import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import "./Addcountries.css"
import { useDispatch, useSelector } from "react-redux";
import { SET_ARRAY_ON_CHANGE , SET_ADDING_COUNTRIES , loadCountries , SET_ARRAY_ON_DISPLAY, SET_PAGE, SET_DETAIL_DETAILS} from '../../Actions/index'

export default function Addcountries (props) {
    let dispatch = useDispatch()
    let addingcountries =  useSelector(state => state.addingcountries)
    console.log('entrando a Addcountries y props.countries es...')
    console.log(props.countries)
  
    let displayarray = []
     displayarray = props.countries
    let countriesondisplay = useSelector(state => state.addingcountries)
   function clickelist (event) {
   
   }
   function clickerase (event) {
    console.log('click dentro del countryboton!' )
    console.log(event.target)
    console.log(event.target.name)
    console.log(event.target.id)
    let newarray = []
    newarray = addingcountries.filter(function (country) {
        return country !== event.target.name;
    })
    //change redux data
    dispatch(SET_ADDING_COUNTRIES(newarray))
    console.log('new array con el  country borrado!' )
    console.log(newarray)
   }
        return (
            <div className="generaladdcountries">
            <div className="containeraddcountries"> 
            
        
        {displayarray.map (x => {
            return (
            <button className='buttoncountry' id={x} onClick={(x) => clickerase(x)} name={x} >{x}</button>
            )
          })}
        
    
      
          </div>
          </div>
        );
  };
  