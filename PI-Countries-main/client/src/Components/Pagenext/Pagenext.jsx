import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import "./Pagenext.css"
import { NavLink } from 'react-router-dom';
import  Detail  from '../Detail/Detail.jsx'
import  Countries  from '../Countries/Countries'
import  Country  from '../Country/Country'
//SET_ARRAY_ON_CHANGE 
import { SET_ARRAY_ON_CHANGE , loadCountries , SET_ARRAY_ON_DISPLAY, SET_PAGE} from '../../Actions/index'
import { useDispatch, useSelector } from "react-redux";

const Pagenext = (props) => {
    //COMPONENT STATES
    let pagetodisplay = useSelector(state => state.pageondisplay)
    let pagesquantity = useSelector(state => state.pagequantity)
    let textdisplay = "1"
    let dispatch = useDispatch()
     //END// EXECUTE AT THE LOADING MOMENT
    React.useEffect(() => {
        console.log("se cargó Page")
        }, [])
    //detect component function
    function clicks (event) {
      console.log('click en next... ')
      console.log(pagetodisplay)
      if (pagetodisplay == pagesquantity) {
      }else{
        dispatch(SET_PAGE(pagetodisplay + 1))
      }
       
      
      
     }
  //RENDER
      return (
        <div className="generalpagenext" onClick={(e) => clicks(e) }>
          <Link to="/home"><button className="pagebutton" >Next</button></Link>
          <div>
            <p></p>
          </div>
        </div>
      )
    };
    
    export default Pagenext;