import React, { Component , useState } from 'react';

import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import "./Creation.css"
import { useDispatch, useSelector } from "react-redux";
import { SET_ARRAY_ON_CHANGE , loadCountries , SET_ARRAY_ON_DISPLAY, SET_PAGE, SET_DETAIL_DETAILS, SET_ADDING_COUNTRIES, SET_SERVER_MESSAGE, SET_ACTIVITIESARRAY} from '../../Actions/index'
import Addcountries from '../Addcountries/Addcountries';

export function validate(input) {
  let errors = {};
  //ID
  if (!input.idname) {
    errors.idname = 'ID is required';
  } else if (input.idname.length < 3) {
    errors.idname = 'ID must have at least 3 characters';
  }else if (input.idname.length > 5){
    errors.idname = 'ID must have 5 characters maximum'
  }
  //NAME
  let letters = /^[A-Za-z]+$/
  if (!input.name) {
    errors.name = 'Name is required';
  } else if (input.name.length < 3) {
    errors.name = 'Name must have at least 3 characters';
  }
  if(input.name.match(letters)) {
  }else{
    errors.name = 'Name only allows letters'
  }
     
 
  //DURATION
  
  if (input.duration.length == 0) {
    errors.duration= 'Duration is required';
  } 
  if (isNaN(input.duration)){
    errors.duration= 'Duration must be a number'
  }
  if (input.duration < 1) {
    errors.duration= 'Minimum duration is 1'
  }
  // if (typeof input.duration === "number"){
  // }else {
  //   errors.duration= 'Duration must be a number'
  // }
//COUNTRIES
  if (input.countrieslist.length == 0) {
    errors.countrieslist = 'Select at least one country';
  }
  


  return errors;
}

export default function Creation (props) {
    let dispatch = useDispatch()
    let reduxstate =  useSelector(state => state)
    let countriesredux =  useSelector(state => state.globalcountries)
    let countriesredux2
    fetch('http://localhost:3001/countries')
    .then(response => response.json())
      .then(json => {
        countriesredux2 = json.data
      })
   // 
   console.log('global countries... es....')
   console.log(countriesredux)
   //set component/form states
   //this 5 could be replaced
   let [idname, setIdname] = useState()
   let [name, setName ] = useState("")
   let [dificulty, setDificulty] = useState()
   let [duration, setDuration] = useState()
   let [season, setSeason] = useState()
//"SET_SERVER_MESSAGE"
let [servermessagec, setServermessagec] = useState()
let servermessage = useSelector(state => state.servermessage)
//global form state "INPUT"
const [input, setInput] = React.useState({
  idname: '',
  name: '',
  dificulty: 1,
  duration: "",
  season: "Spring",
  countrieslist: []

})
const [errors, setErrors] = React.useState({})
//
   var [arraycountries, setArraycountries] = useState([])//this is apart
   let [countryq, setCountryq] = useState(0)
   let arraycountriesredux = useSelector(state => state.addingcountries)
//
//start use effect
React.useEffect(() => {

  setErrors({name: ' '})
  }, [])
//end useffect
   function clickelist (event) {
    if (event.target.value == "-- Select Countries --"){return    }
    let oldarray = arraycountriesredux
    oldarray.push(event.target.value)
    setCountryq(countryq + 1)
    let setcountries = new Set()
    oldarray.map ((x) => {setcountries.add(x)} )
    let newarray = []
    for (const item of setcountries) {
        newarray.push(item)
      }
      setstates(event)
    dispatch(SET_ADDING_COUNTRIES(newarray))
   }
   function clicke (event) {

   }
   
   function setstates (event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
      countrieslist: arraycountriesredux
    })
    setErrors(validate({
      ...input,
      [event.target.name]: event.target.value,
      countrieslist: arraycountriesredux
    }))
    console.log("***********event.target.name ES ...*********")
    console.log(event.target)
    console.log(event.target.value.idadd)
    console.log("***********event.target.value ES ...*********")
    console.log(event.target.value)
    console.log("***********STATES INPUT ES...*********")
    console.log(input)
    console.log("***********ERRORS  ES...*********")
    console.log(errors)

   }
   function postform (event, countriesbyprops) {
    //POST DATA
    //setstates() //for the countries
    setInput({
      ...input,
      countrieslist: arraycountriesredux
    })
    //
    console.log('entering postform function')
    //check if there are errors
    if (errors.idname === undefined && errors.name === undefined && errors.countrieslist === undefined && errors.duration === undefined){
      console.log('no hay errores')
      console.log(errors.idname)
      console.log(errors)
    }else{
      console.log('hay hay errores')
      return ""
    }
    //
    //get ID of countries array
    //arraycountriesredux
    let arrayrequest = []
    let dataget = countriesbyprops
    console.log('countriesbyprops es...')
    console.log(countriesbyprops)
    arrayrequest  = dataget.map( (x) => {
      arrayrequest.push(x)
    } )
    console.log("*********ARRAY DE  IDS ES...")
      console.log(arrayrequest)
//SEND THE POST
    fetch ('http://localhost:3001/activities', {
      method: "POST",
      body: JSON.stringify({
        id: input.idname,
        dificulty: input.dificulty,
        duration: input.duration,
        season: input.season,
        namename: input.name,
        countriestoadd: countriesbyprops
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
  }
    })
    .then(response => response.json())
    .then(json => {
      console.log("*********RESPUESTA DEL BACK...")
      console.log(json.data)
      dispatch(SET_SERVER_MESSAGE(json))
      setServermessagec(json)
    })
    console.log("*********ARRAY DE  IDS ES...")
    console.log(arrayrequest)
   }//END POST FUNCTION
   async function close () {
    dispatch(SET_SERVER_MESSAGE(''))
    let activityarray
     await fetch('http://localhost:3001/countries/activities')
    .then(response => response.json())
      .then(json => {
        console.log("bdispatich activitiesarray es")
        console.log(json)
        activityarray  = json
      })
    dispatch(SET_ACTIVITIESARRAY(activityarray))
   }
   function testlink () {
    console.log(reduxstate)
   }
   //
        return (
            <div className="generalcreation">
            <div className="containercreation"> 
            <button className='buttonhomed' onClick={ () => testlink()}>Linkear Activity</button>
            <form>
            <p>    Activity Creation Form </p>
            <input name="idname" placeholder="ID" onChange={(e) => setstates(e)} />
            <p className='errors'>{errors.idname}</p>
            <p></p>
        <input name="name"  placeholder="Name" onChange={(e) => setstates(e)} />
        <p className='errors'>{errors.name}</p>
        <p></p>
        <p>Select Activity's dificulty level</p>
        <select name="dificulty" id="countrieslistid" onChange={(e) => setstates(e)} >
        <option defaultValue>1</option>
        {/* <option>Spring</option> */}
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
        
        <p></p>
        <p>Write Activity's duration expressed in minutes</p>
        <input name="duration"  placeholder="Duration" onChange={(e) => setstates(e)} />
        <p className='errors'>{errors.duration}</p>
        <p></p>
        <p>Select a season for the Activity</p>
        <select name="season" id="countrieslistid" onChange={(e) => setstates(e)}>
        <option defaultValue>Spring</option>
        {/* <option>Spring</option> */}
        <option>Summer</option>
        <option>Autumn</option>
        <option>Winter</option>
      </select>
      
        </form>
        <p>Select countries for the Activity</p>
        <select name="countrieslist" id="countrieslistid" onChange={(e) => clickelist(e)} >
        <option defaultValue>-- Select Countries --</option>
        {countriesredux?.map (x => {
            return (
            <option value={x.id}  key={x.name} name={x.name}>{x.name}</option>
            )
          })}
        
      </select>
      <p className='errors'>{errors.countrieslist}</p>
      <p></p>
      <div className="reproduction">
      <Addcountries countries={arraycountriesredux}></Addcountries>
      </div>
        {/* <input type="submit" /> */}
        <p></p>
      <p></p>
      <button type="submit" className='buttonhomed' onClick={(e) => postform(e, arraycountriesredux)}>Submit</button>
      <p className='errors'>{servermessage?.message}</p>
      <p></p>
      <Link to="/home"><button className='buttonhomed' onClick={() => close()}>Home</button></Link>
          </div>
          
          </div>
        );
  };
  