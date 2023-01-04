import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import "./Countries.css"
import { NavLink } from 'react-router-dom';
import  Country  from '../Country/Country'
import  Addcountries  from '../Addcountries/Addcountries'
//import Detail from "./components/Detail/Detail";
//'../components/Detail/Detail.jsx'

export default function Countries (props) {
    //variables
    let start = 0
    let end = 0
    let countriessliced = []
 //props
 //countries: array of objects (countries)
//
console.log('entrando a countries')
console.log('props.countries de countries es....')
console.log(props.countries)
//cut array by page: determine start page number and end page number for array slice to deploy

console.log('PAGE ES ... ' + props.page)
//check if array is undefined
if (!props.countries){
    return (
        <div className='generalnocountries'>
        
        <h1>No countries found!</h1>
        </div>
    )
}
//determine slice values
if (props.page == 1) {
    countriessliced = props.countries.slice(0, 9)
}else{
    start = props.page - 1
start = start * 10
start = start - 1
end = start + 10
    countriessliced = props.countries.slice(start, end)
}


console.log('START ES ... ' + start)
console.log('END ES ... ' + end)

console.log('countrisliced es...')
console.log(countriessliced)

//you can deploy  props.countries or countriessliced
    return (
        <div className='generalcountries'>
        {/* <h4 className='title'>Recetas</h4> */}
        
        {countriessliced?.map (x => {
            return (
            <Country key={x.name} title={x.name} continent={x.continent} image={x.flagpic}/>
            )
          })}
        </div>
    
    )
}