import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import "./Pageprev.css"
import { NavLink } from 'react-router-dom';
import  Detail  from '../Detail/Detail.jsx'
import  Countries  from '../Countries/Countries'
import  Country  from '../Country/Country'
//SET_ARRAY_ON_CHANGE 
import { SET_ARRAY_ON_CHANGE , loadCountries , SET_ARRAY_ON_DISPLAY, SET_PAGE} from '../../Actions/index'
import { useDispatch, useSelector } from "react-redux";

const Pageprev = (props) => {
    //COMPONENT STATES
    let pagetodisplay = useSelector(state => state.pageondisplay)
    let textdisplay = "1"
    let dispatch = useDispatch()
     //END// EXECUTE AT THE LOADING MOMENT
    React.useEffect(() => {
        console.log("se cargó Pageprev")
        }, [])
    //detect component function
    function clicks (event) {
      console.log('click en prev... ')
      console.log(pagetodisplay)
      if (pagetodisplay == 1){
      }else{
        dispatch(SET_PAGE(pagetodisplay - 1))
      }
      
     }
  //RENDER
      return (
        <div className="generalpageprev" onClick={(e) => clicks(e) }>
          <Link to="/home"><button className="pagebutton" >Prev</button></Link>
          <div>
            <p></p>
          </div>
        </div>
      )
    };
    
    export default Pageprev;