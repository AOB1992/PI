import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import "./Navigation.css"
import { NavLink } from 'react-router-dom';
import  Detail  from '../Detail/Detail.jsx'
import  Countries  from '../Countries/Countries'
import  Page  from '../Page/Page'
import  Pagenext  from '../Pagenext/Pagenext'
import  Pageprev  from '../Pageprev/Pageprev'
import  Pages from '../Pages/Pages'
import  Country  from '../Country/Country'
//SET_ARRAY_ON_CHANGE 
import { SET_ARRAY_ON_CHANGE , loadCountries , SET_ARRAY_ON_DISPLAY, SET_PAGE, SET_GLOBAL_COUNTRIES, SET_FILTER_CONTINENT, loadCountriesinglobalcountries, SET_FCARRAYORIGINAL, SET_FCVALUE, SET_FCARRAYFILTERED, SET_FAARRAYFILTERED, SET_FAVALUE, SET_ACTIVITIESARRAY, SET_ORDERVALUE} from '../../Actions/index'
import { useDispatch, useSelector } from "react-redux";

//importado para react//
import { getRecipe1, GET_RECIPES, SET_PAGE_ON_DISPLAY } from '../../Actions/index'

//fin importado para react
//import Detail from "./components/Detail/Detail";
//'../components/Detail/Detail.jsx'
export default function Navigation () {
    let dispatch = useDispatch()
    let globalcountries = useSelector(state => state.globalcountries)
    let estadoglobal  = useSelector(state => state)
    let activitiesarray = useSelector(state => state.activitiesarray)
    //filters redux states
     let fcarrayoriginal = useSelector(state => state.fcarrayoriginal)
    let fcarrayfiltered = useSelector(state => state.fcarrayfiltered)
   let  fcvalue = useSelector(state => state.fcvalue)
    //
    let faarrayoriginal = useSelector(state => state.faarrayoriginal)
    let faarrayfiltered = useSelector(state => state.faarrayfiltered)
   let  favalue = useSelector(state => state.favalue)
   // 
   let ordervalue  = useSelector(state => state.ordervalue)

    //end filters redux states
React.useEffect(() => {
    console.log("empieza useeffect")
    console.log("/////////////globalcountries ES..... //////////////////////")
    console.log(globalcountries)
    console.log("ESTADO GLOBAL ES...")
    console.log(estadoglobal)
    close()
    filterstart()
     console.log("termino useeffect")
    }, [])
//*
//DATA TO DISPLAY
let arrayondisplay = useSelector(state => state.arrayondisplay)
let pagetodsiplay = useSelector(state => state.pageondisplay)
//START function text change
async function textchange (event) { //////////TEXT CHANGE FUNCTION ////////////

if (event.target.value){
    console.log('changing...' + event.target.value)
    dispatch(SET_ARRAY_ON_CHANGE(event.target.value))
    dispatch(SET_PAGE(1))
}else if (event.target.value === "" ) {
    console.log('changing without value...')
    dispatch(loadCountries())
}
//dispatch(SET_FILTER_CONTINENT_ARRAY())
console.log('despachando fcarrayoriginal desde fin de textchange()')
console.log(arrayondisplay)
//dispatch(SET_FCARRAYORIGINAL(arrayondisplay)) //THIS SENDS THE OLDONE I THINK...
//dispatch trasladado a SET_ARRAY_ON_CHANGE
console.log('INVOKING continentchangesansevent() FROM TEXCHANGE()///***/*/')
continentchangesansevent()
}//END FUNCTION TEXT CHANGE

//start continent change
var activityarray
async function filterstart (event) {
    //arrayondisplay to continent filter
    console.log('despachando fcarrayoriginal desde fin de filterstart()')
    await dispatch(SET_FCARRAYORIGINAL(arrayondisplay))
    await dispatch(SET_FCARRAYFILTERED(arrayondisplay))
   // await dispatch(SET_FAARRAYORIGINAL(arrayondisplay))
    await dispatch(SET_FAARRAYFILTERED(arrayondisplay))
    //activities to activity filter
     //attention global reach variable
    let activityobject = {}
   await fetch('http://localhost:3001/countries/activities')
    .then(response => response.json())
      .then(json => {
        console.log("bringactivities es")
        console.log(json)
        activityarray  = json
      })

}
function continentchangesansevent () {
    let continenttofilter = ""
//dispatch(SET_FCARRAYORIGINAL(arrayondisplay)) //this goes in change of search
  console.log('entrando continetchange sin evento*/*/*/*/*/*/*//*/*/')
  console.log('fc value es...')
  console.log(fcvalue)
  console.log('arraytofilter es...')
  console.log(fcarrayoriginal)
    continenttofilter = fcvalue
    let arraytofilter = fcarrayoriginal//es el arrayoriginal del componente
    let result
    if (arraytofilter){
         result = arraytofilter.filter( (x) => x.continent === continenttofilter)
    }else {
         result = []
    }
    //if arrayto filter = allcontinents, do not filter
    if (fcvalue === 'All Continents'){result = arraytofilter}
    console.log('array filtrado es')
    console.log(result )
    let objectdispatch = {data: result}
    dispatch(SET_ARRAY_ON_DISPLAY(objectdispatch))//renderizo
    dispatch(SET_FCARRAYFILTERED(result)) //modifico valores del filtro , para que tome el siguiente
}
function continentchange (event) {
    let continenttofilter = ""
//dispatch(SET_FCARRAYORIGINAL(arrayondisplay)) //this goes in  search
console.log('entrando continetchange CON evento*/*/*/*/*/*/*//*/*/')
console.log('fc value es...')
console.log(fcvalue)
console.log('arraytofilter es...')
console.log(fcarrayoriginal)
   dispatch(SET_FCVALUE(event.target.value))
    continenttofilter = event.target.value
    let arraytofilter = fcarrayoriginal//es el arrayoriginal del componente
    let result
    if (arraytofilter){
         result = arraytofilter.filter( (x) => x.continent === continenttofilter)
    }else {
         result = []
    }
    //if arrayto filter = allcontinents, do not filter
    if (event.target.value=== 'All Continents'){result = arraytofilter}
    console.log('array filtrado es')
    console.log(result )
    console.log('array filtrado es')
    console.log(result )
    if (event.target.value === 'All Continents'){
        let objectdispatch = {data: fcarrayoriginal}
    dispatch(SET_ARRAY_ON_DISPLAY(objectdispatch))//renderizo
    dispatch(SET_FCARRAYFILTERED(fcarrayoriginal)) //modifico valores del filtro , para que tome el siguiente
    }else{
        let objectdispatch = {data: result}
    dispatch(SET_ARRAY_ON_DISPLAY(objectdispatch))//renderizo
     dispatch(SET_FCARRAYFILTERED(result)) //modifico valores del filtro , para que tome el siguiente
    }
    //despachar que se activen los otros filtros //from here test added
    //despachar activity activitychange(event) favalue
   // let eventactivity =  {target: {value: favalue}}
   // activitychange(eventactivity)
    //despachar order  ordertargetvalue(event) // 
   
    //SET PAGE 1
    dispatch(SET_PAGE(1))
}//end continent change
//global state
function clickglobalstate() {
console.log(estadoglobal)
}
//end global state
//loadglobalcountriesx()
function loadglobalcountriesx() {
    let resposta 
    fetch('http://localhost:3001/countries')
    .then(response => response.json())
      .then(json => {
        console.log("countries de loadglobalcountriesx actions es")
        console.log(json.data)
        dispatch(SET_GLOBAL_COUNTRIES(json.data))
       
        
      })

}
//end loadglobalcountriesx()

async function bringactivities() {//START BRING ACTIVITIES 
    let activityarray 
    let activityobject = {}
   await fetch('http://localhost:3001/countries/activities')
    .then(response => response.json())
      .then(json => {
        console.log("bringactivities es")
        console.log(json)
        activityarray  = json
      })
      //transform array into object
let dt = {}
dt['lolo olo'] = "hola"
console.log(dt)
// for (let i = 0; i < activityarray.length; i++ ){
//     console.log(element.name)
//     console.log(element.list)
// }
activityarray.forEach(element => {
    console.log(element.name)
    console.log(element.list)
activityobject[element.name] = element.list
})
console.log(activityobject)
}  //END START BRING ACTIVITIES 
//START ACTIVITY CHANGE
function activitychange(event) {
   
    let activityobject = {}
    dispatch(SET_FAVALUE(event.target.value)) //settting the value selected
    //let activitiesarray = useSelector(state => state.activitiesarray)
//     let faarrayoriginal = useSelector(state => state.faarrayoriginal)
//     let faarrayfiltered = useSelector(state => state.faarrayfiltered)
//    let  favalue = useSelector(state => state.favalue
let nameactivity = event.target.value
let arraytofilter = fcarrayfiltered
 //if its desactivation
 if (event.target.value == 'None' || event.target.value == '-- Select Activity --'){
    console.log('entering desactivation of filter activity...')
    let objectdispatch = {data: fcarrayfiltered}
    dispatch(SET_ARRAY_ON_DISPLAY(objectdispatch))//renderizo
    dispatch(SET_FAARRAYFILTERED(fcarrayfiltered))
    return
 }
 //end desactivation
//hay que filtrar fcarrayfiltered
//1_ getting the object
activitiesarray.forEach(element => {
    console.log(element.name)
    console.log(element.list)
activityobject[element.name] = element.list
})
//end getting object
//filtering
let result
console.log('*****////FILTRANDO ACTIVITY')
console.log('array to filter es..')
console.log(arraytofilter)
    if (arraytofilter){
         result = arraytofilter.filter( (x) =>{
            let arraycomparison = activityobject[nameactivity]
           
            console.log('esta actividad del objeto')
            console.log(activityobject[nameactivity])
            console.log('este id del array de continentfilter')
            console.log(x.id)
            console.log('resultado del includes es...')
           // console.log(arraycomparison.includes(x.id)) test changed
           if  (arraycomparison.includes(x.id)) {
            return true
        }else{
            return false
        }
            //return  arraycomparison.includes(x.id) //test changed
         } )// x.continent === continenttofilter

         console.log('array filtrado es...')
         console.log(result)
    }else {
         result = []
    }
//end filtering
//sending data to arrayondisplay and to filter values
let objectdispatch = {data: result}
    dispatch(SET_ARRAY_ON_DISPLAY(objectdispatch))//renderizo
    dispatch(SET_FAARRAYFILTERED(result)) //modifico valores del filtro , para que tome el siguiente

}
//END ACTIVITY CHANGE
//START LOADING ACITVITIESLIST
async function close () {
   // dispatch(SET_SERVER_MESSAGE(''))
    let activityarray
     await fetch('http://localhost:3001/countries/activities')
    .then(response => response.json())
      .then(json => {
        console.log("bdispatich activitiesarray es")
        console.log(json)
        activityarray  = json
      })
    dispatch(SET_ACTIVITIESARRAY(activityarray))
   }//END  LOADING ACITVITIESLIST
   //START TARGET VALUE
   async function ordertargetvalue(event) {
    await dispatch(SET_ORDERVALUE(event.target.value))
    console.log('CALLING FROM ORDERTARGETVALUE FUNCTION ORDER...')
    order(event)
   } //END TARGET VALUE
   function order (event) {
    console.log('ENTERING FUNCTION ORDER...')
    //let ordervalue  = useSelector(state => state.ordervalue)
   //let faarrayfiltered = useSelector(state => state.faarrayfiltered)
   let arraytoorder = faarrayfiltered
   let expr = event.target.value
   console.log('ORDERVALUE ES...')
   console.log(ordervalue)
   console.log('ARRAY TO ORDER ES...')
   console.log(faarrayfiltered)
   let result
   let objectdispatch
   switch (expr) { //check order value Population Ascen Population Desc Alphabetic Ascen Alphabetic Des
    case 'Alphabetic Ascen':
        console.log('selected order is..Alphabetic Ascen.')
        //do the filter logic
         result = arraytoorder.sort(function compare (a, b) {
            if (a['name'] > b['name'] ) {return 1}
              if (b['name'] > a['name'] ){return -1}
              if (b['name'] == a['name'] ){return 0} 
            })
                     //dispatch array on dispaly
                      //dispatch faarrayfiltered
                                 objectdispatch = {data: result}
                        dispatch(SET_ARRAY_ON_DISPLAY(objectdispatch))//renderizo
                         dispatch(SET_FAARRAYFILTERED(result)) //modifico valores del filtro , para que tome el siguiente
             break
     case 'Alphabetic Desc':
                console.log('selected order is..Alphabetic Desc.')
                //do the filter logic
                 result = arraytoorder.sort(function compare (a, b) {
                    if (a['name'] > b['name'] ) {return -1}
                      if (b['name'] > a['name'] ){return 1}
                      if (b['name'] == a['name'] ){return 0} 
                    })
                             //dispatch array on dispaly
                              //dispatch faarrayfiltered
                                         objectdispatch = {data: result}
                                dispatch(SET_ARRAY_ON_DISPLAY(objectdispatch))//renderizo
                                 dispatch(SET_FAARRAYFILTERED(result)) //modifico valores del filtro , para que tome el siguiente
                     break
        case 'Population Ascen':
                         console.log('selected order is..Population Ascen.')
                             //do the filter logic
                             result = arraytoorder.sort(function compare (a, b) {
                             if (a['population'] > b['population'] ) {return -1}
                         if (b['population'] > a['population'] ){return 1}
                             if (b['population'] == a['population'] ){return 0} 
                              })
                            //dispatch array on dispaly
                                 //dispatch faarrayfiltered
                                 objectdispatch = {data: result}
                                dispatch(SET_ARRAY_ON_DISPLAY(objectdispatch))//renderizo
                            dispatch(SET_FAARRAYFILTERED(result)) //modifico valores del filtro , para que tome el siguiente
             break
     case 'Population Desc':
                     console.log('selected order is..Population Desc.')
                     //do the filter logic
                         result = arraytoorder.sort(function compare (a, b) {
                    if (a['population'] > b['population'] ) {return 1}
                      if (b['population'] > a['population'] ){return -1}
                      if (b['population'] == a['population'] ){return 0} 
                    })
                             //dispatch array on dispaly
                              //dispatch faarrayfiltered
                                         objectdispatch = {data: result}
                                dispatch(SET_ARRAY_ON_DISPLAY(objectdispatch))//renderizo
                                 dispatch(SET_FAARRAYFILTERED(result)) //modifico valores del filtro , para que tome el siguiente
                     break
    default:
  }
  //SET PAGE 1
  dispatch(SET_PAGE(1))
   } //END ACTIVITY CHANGE
    return (
        <div className='generalnavigation'>
        <div className= "bar">
            <h4>AOB Countries</h4>
            <div className= "foods" >
            </div>
            <div>
            <input className='inputpage' type="text" placeholder="Search country by name..." onChange={(e) => textchange(e) }></input>
            {/* <button className='button'>Buscar</button> */}
            </div>


            <div>
            <Link to="/creation"><button className='button2'>Create Activity</button></Link>
            {/* <Link to="/detail"><button className='button'>D</button></Link> */}
            
            
            </div>
            
            <div>
            <button onClick={(x) => bringactivities()}>Bring Activities</button>
            <button onClick={(x) => loadglobalcountriesx()}>Load Global Countries</button>
                <button onClick={(x) => clickglobalstate()}>Show Global State</button>
            <select className='continentlayer' name="countriddeslist" id="counssstrieslistid" onChange={(x) => continentchange(x)}>
        <option defaultValue>-- Select Continent --</option>
        'North America', 'South America', 'Europe', 'Africa', 'Asia', 'Oceania', 'Antarctica'
        <option className='continentlayer'>All Continents</option>
            <option className='continentlayer'>North America</option>
            <option className='continentlayer'>South America</option>
            <option>Europe</option>
            <option>Africa</option>
            <option>Asia</option>
            <option>Oceania</option>
            <option>Antarctica</option>
      </select>
      <select className='continentlayer' name="SelectActivity" id="SelectActivity" onChange={(x) => activitychange(x)} >
        <option className='continentlayer' defaultValue>-- Select Activity --</option>
        <option  className='continentlayer' >None</option>
        {activitiesarray?.map (x => {
            return (
            <option  className='continentlayer' value={x.id}  key={x.name} name={x.name}>{x.name}</option>
            )
          })}
      </select>
      <select className='continentlayer' name="Selectsortorder" id="Selectsortorder" onChange={(x) => ordertargetvalue(x)}>
        <option className='continentlayer'  defaultValue>-- Select Sort Order --</option>
        
        <option  className='continentlayer' >Population Ascen</option>
        <option  className='continentlayer' >Population Desc</option>
        <option  className='continentlayer' >Alphabetic Ascen</option>
        <option  className='continentlayer' >Alphabetic Desc</option>
      </select>
            </div>
<div></div>

            
        </div>
        <div>
        <Pages></Pages>
        
        </div>
            
        <div className='countries'>
            
        <Countries countries={arrayondisplay} page={pagetodsiplay}></Countries> 
        </div>
        </div>
    
    )
}