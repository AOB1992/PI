import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import "./Page.css"
import { NavLink } from 'react-router-dom';
import  Detail  from '../Detail/Detail.jsx'
import  Countries  from '../Countries/Countries'
import  Country  from '../Country/Country'
//SET_ARRAY_ON_CHANGE 
import { SET_ARRAY_ON_CHANGE , loadCountries , SET_ARRAY_ON_DISPLAY, SET_PAGE} from '../../Actions/index'
import { useDispatch, useSelector } from "react-redux";

const Page = (props) => {
    //COMPONENT STATES
    let textdisplay = "1"
    let dispatch = useDispatch()
    let pagetodisplay = useSelector(state => state.pageondisplay)
     //END// EXECUTE AT THE LOADING MOMENT
    React.useEffect(() => {
        console.log("se cargó Page")
        }, [])
    //detect component function
    if (props.typeclass === "number") { textdisplay = props.number}

   function clicks (event) {
    console.log('click en page... ')
    console.log(props.number)
    dispatch(SET_PAGE(props.number))
   }
   //check if it is selected
   if (props.number == pagetodisplay){
    return (
      <div className="generalpage" onClick={(e) => clicks(e) }>
        <Link to="/home"><button className="pagebuttonselected" >{textdisplay}</button></Link>
        <div>
          <p></p>
        </div>
      </div>
    )
   }
  //RENDER
      return (
        <div className="generalpage" onClick={(e) => clicks(e) }>
          <Link to="/home"><button className="pagebutton" >{textdisplay}</button></Link>
          <div>
            <p></p>
          </div>
        </div>
      )
    };
    
    export default Page;