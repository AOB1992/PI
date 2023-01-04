import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import "./Landing.css"

import { useDispatch, useSelector } from "react-redux";
import { getRecipe1, GET_RECIPES, SET_PAGE_ON_DISPLAY, loadCountries , SET_ARRAY_ON_DISPLAY} from '../../Actions/index'
import {howmanypages} from "../../Utils/index"
import { sortarray, arraynumeros } from "../../Utils/experiment"
const Landing = () => {
  //COMPONENT STATES
  let dispatch = useDispatch()
  //component state "arrayondisplaylanding" from "arrayondisplay from redux"
  var [arrayondisplaylanding, setarrayondisplaylanding] = React.useState()
  var [Test, setTest] = React.useState()
   //EXECUTE AT THE LOADING MOMENT
   //FILTER TEST

//
React.useEffect(() => {
  console.log('typeof de 1 es...')
  console.log(typeof 1)
  console.log("se cargó Landing")
  let testarray = []
  //let testarray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  for (let i = 0; i < 23; i++){
    testarray.push(i)
  }
  console.log("how many pages es...")
  console.log(howmanypages(testarray))
  dispatch(loadCountries()) //loaded first countries in db
  //dispatch(SET_GLOBAL_COUNTRIES(globalcountries))
  //load db countries to redux starte
  //dispatch("SET_ARRAY_ON_DISPLAY")
  
  }, [])
  //END// EXECUTE AT THE LOADING MOMENT
  console.log('array on display redux es...')
  console.log(useSelector(state => state.arrayondisplay))
  console.log('estring display redux es...')
  console.log(useSelector(state => state.estring))
  
//RENDER
    return (
      <div className="generallanding">
        <div className='divaob'>
        <h1 className='aobcountries'>  AOB COUNTRIES  </h1>
        </div>
        <Link to="/home"><button className="Entrar" >Enter Countries</button></Link>
        <div>
          <p></p>
        </div>
      </div>
    );
  };
  
  export default Landing;