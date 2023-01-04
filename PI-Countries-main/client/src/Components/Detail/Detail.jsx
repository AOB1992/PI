import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import "./Detail.css"
import { useDispatch, useSelector } from "react-redux";
import { SET_ARRAY_ON_CHANGE , loadCountries , SET_ARRAY_ON_DISPLAY, SET_PAGE, SET_DETAIL_DETAILS} from '../../Actions/index'
export default function Detail (props) {
    let dispatch = useDispatch()
    var datadetail = useSelector(state => state.detail)
    //"SET_DETAIL_DETAILS"
    function onclicke (event) {
        dispatch(SET_DETAIL_DETAILS([]))
    }
    if (datadetail == undefined) {
        return (
        <div className="generaldetail">
        <div className="container"> 
        
        {/* <div className="detailimg">
            <img className='detailimg2' src={datadetail?.flagpic} alt="img"></img>
        </div> */}
        <p>Name</p>
        <div>
            <p>3 letter ID</p>
        
       
        </div>
        <div>
        <p>Continent:     </p>
        
        </div>
        <div>
        <p>Capital:    </p>
        
        </div>
        <div>
        <p>Subregion:    </p>
        
        </div>
        <div>
        <p>Area:    </p>
        
        </div>
        
        <div>
        <p>Population:     </p>
        
        </div>
        
        <div>
        <Link to="/home"><button className='buttonhomed' onClick={() => onclicke()}>Home</button></Link>
        </div>
      {/* <button className="Entrar" >Entrar a Foods</button> */}
      </div>
      </div>
    )
    }
    // <div className="generaldetails"></div>
    
    return (
        
      <div className="generalfordetails">

        <div className="containerdetail"> 
        
        <div className="detailimg">
            <img className='detailimg2' src={datadetail?.flagpic} alt="img"></img>
        </div>
        <p>{datadetail.name?.toUpperCase()}</p>
        <div>
            <p>{datadetail.id?.toUpperCase()}</p>
        
       
        </div>
        <div>
        <p>Continent:     {datadetail?.continent}</p>
        
        </div>
        <div>
        <p>Capital:    {datadetail?.capital}</p>
        
        </div>
        <div>
        <p>Subregion:    {datadetail?.subregion}</p>
        
        </div>
        <div>
        <p>Area:    {datadetail?.area}</p>
        
        </div>
        
        <div>
        <p>Population:     {datadetail?.population}</p>
        
        
        </div>
        <p></p>
      <p></p>
        <div>
        <p></p>
      <p></p>
        <Link to="/home"><button className='buttonhomed' onClick={() => onclicke()}>Home</button></Link>
        </div>
      </div>
      <p></p>
      

      <p></p><p></p><p></p>
      
      <div className='activitiesdisplays'>
      {/* {datadetai}<h1>No activities found!</h1> */}
        {datadetail.activities?.map (x => {
        
            return (
              <div className='activitycard'>
            <p key={x.name} name={x.name} >{x.name}</p>
            <h6  >Season: {x.season}</h6>
            <h6  name={x.duration} >Duration mins: {x.duration}</h6>
            <h6   >Dificulty: {x.dificulty}</h6>
            </div>
            )
          }) }
        </div>
      </div>
    );
  };
  