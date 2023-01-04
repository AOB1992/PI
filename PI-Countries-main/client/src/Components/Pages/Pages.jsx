import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import "./Pages.css"
import { NavLink } from 'react-router-dom';
import  Detail  from '../Detail/Detail.jsx'
import  Countries  from '../Countries/Countries'
import  Country  from '../Country/Country'
//SET_ARRAY_ON_CHANGE 
import { SET_ARRAY_ON_CHANGE , loadCountries , SET_ARRAY_ON_DISPLAY} from '../../Actions/index'
import { useDispatch, useSelector } from "react-redux";
//pages
import  Page  from '../Page/Page'
import  Pagenext  from '../Pagenext/Pagenext'
import  Pageprev  from '../Pageprev/Pageprev'

export default function Pages (props) {
    //variables
    let pagesquantity = 1
 //props
pagesquantity = useSelector(state => state.pagequantity)
 //countries: array of objects (countries)
// <Page></Page><Page></Page>
console.log('entrando a pages')
console.log('Pages quantity es...')
console.log(pagesquantity)

//set array
let maparray = []
for (let i = 1; i <= pagesquantity; i++){
    maparray.push(i)
}
console.log('map array es...')
console.log(maparray)
    return (
        <div className='generalpages'>
        
        <div className="pagescontainer">
        <Pageprev></Pageprev>
        {maparray.map (x => {
            return (
            <Page key={x} typeclass="number" number={x} />
            )
          })}
        <Pagenext></Pagenext>
        </div>
        </div>
    )
}