//ARCHIVO DEL REDUCER, QUE ES UNA FUNCION
import { useDispatch, useSelector } from "react-redux";
import React, { Component } from 'react';
import {howmanypages} from "../Utils/index"

const initialState = {
    arrayondisplay: [],
    globalcountries: [],
    detail: [],
    pageondisplay: 1,
    pagequantity: 0,
    addingcountries: [],
    servermessage: undefined,
    fcarrayoriginal: [],
    fcarrayfiltered: [],
    fcvalue: '',
    faarrayoriginal: [],
    faarrayfiltered: [],
    favalue: '',
    orderarrayoriginal: [],
    orderarrrayfiltered: [],
    ordervalue: '',
    filtercontinent: {value: '', status: 'off', arrayoriginal: [], arrayfiltered: [], arraysenddisplay: []},
    filteractivity: {value: '', status: 'off', arrayoriginal: [], arrayfiltered: [], arraysenddisplay: []},
    filterorder: {value: '', status: 'off', arrayoriginal: [], arrayfiltered: [], arraysenddisplay: []},
    activitiesarray: []
    
  };

  function rootReducer(state = initialState, action) {
    //ORDER VALUES
    // orderarrayoriginal: [],
    // orderarrrayfiltered: [],
    // ordervalue: '',  SET_ORDERVALUE SET_ORDERARRAYORIGINAL SET_ORDERARRAYFILTERED
    if (action.type === "SET_ORDERARRAYORIGINAL") {
      //MUST PASS AN ARRAY IN PAYLOAD
      console.log('REDUCERS: entrando a SET_ORDERARRAYORIGINAL')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        orderarrayoriginal: action.payload,
      }
    }
    if (action.type === "SET_ORDERARRAYFILTERED") {
      //MUST PASS AN ARRAY IN PAYLOAD
      console.log('REDUCERS: entrando a SET_ORDERARRAYFILTERED')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        orderarrrayfiltered: action.payload,
      }
    }
    if (action.type === "SET_ORDERVALUE") {
      //MUST PASS AN ARRAY IN PAYLOAD
      console.log('REDUCERS: entrando a SET_ORDERVALUE')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        ordervalue: action.payload,
      }
    }
    //END ORDER VALUES
    //FILTER FOR ACTIVITY FILTER
    //faarrayoriginal: [],
    //faarrayfiltered: [],
    //favalue: '', "SET_FAARRAYORIGINAL" "SET_FAVALUE" "SET_FAARRAYFILTERED"
    if (action.type === "SET_FAVALUE") {
      //MUST PASS AN ARRAY IN PAYLOAD
      console.log('REDUCERS: entrando a SET_FAVALUE')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        favalue: action.payload,
      }
    }
    if (action.type === "SET_FAARRAYFILTERED") {
      //MUST PASS AN ARRAY IN PAYLOAD
      console.log('REDUCERS: entrando a SET_FAARRAYFILTERED')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        faarrayfiltered: action.payload,
      }
    }
    if (action.type === "SET_FAARRAYORIGINAL") {
      //MUST PASS AN ARRAY IN PAYLOAD
      console.log('REDUCERS: entrando a SET_FAARRAYORIGINAL')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        faarrayoriginal: action.payload,
      }
    }
    //END 
    //FILTERS WITH EACH VARIABLE
    if (action.type === "SET_ACTIVITIESARRAY") {
      //MUST PASS AN ARRAY IN PAYLOAD
      console.log('REDUCERS: entrando a SET_ACTIVITIESARRAY')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        activitiesarray: action.payload,
      }
    }
    if (action.type === "SET_FCARRAYORIGINAL") {
      console.log('REDUCERS: entrando a SET_FCARRAYORIGINAL')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        fcarrayoriginal: action.payload,
      }
    }
    if (action.type === "SET_FCARRAYFILTERED") {
      console.log('REDUCERS: entrando a SET_FCARRAYFILTERED')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        fcarrayfiltered: action.payload,
      }
    }
    if (action.type === "SET_FCVALUE") {
      console.log('REDUCERS: entrando a SET_FCVALUE')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        fcvalue: action.payload,
      }
    }
      //END FILTERS WITH EACH VARIABLE
    //FILTERS  SET_FILTER_CONTINENT_ARRAY
    if (action.type === "SET_FILTER_CONTINENT") {
      console.log('REDUCERS: entrando a SET_FILTER_CONTINENT')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        filtercontinent: action.payload,
      }
    }
    if (action.type === "SET_FILTER_CONTINENT_ARRAY") { //does not work
      console.log('REDUCERS: entrando a SET_FILTER_CONTINENT_ARRAY')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        filtercontinent: {...state.filtercontinent, arrayoriginal: action.payload}
      }
    }
  
    if (action.type === "SET_FILTER_ACTIVITY") {
      console.log('REDUCERS: entrando a "SET_FILTER_ACTIVITY"')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        filtercontinent: action.payload,
      }
    }
    if (action.type === "SET_FILTER_ORDER") {
      console.log('REDUCERS: entrando a SET_FILTER_ORDER')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        filterorder: action.payload,
      }
    }
    //END FILTERS
    if (action.type === "SET_GLOBAL_COUNTRIES") {
      console.log('REDUCERS: entrando a SET_GLOBAL_COUNTRIES ')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        globalcountries: action.payload,
      }
    }
    if (action.type === "SET_SERVER_MESSAGE") {
      console.log('REDUCERS: entrando a SET_SERVER_MESSAGE')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        servermessage: action.payload,
      }
    }
    if (action.type === "SET_ADDING_COUNTRIES") {
      console.log('REDUCERS: entrando a SET_ADDING_COUNTRIES')
      console.log('REDUCERS payload es...')
      console.log(action.payload)
      return {
        ...state,
        addingcountries: action.payload,
      }
    }
    if (action.type === "SET_PAGE") {
      console.log('REDUCERS: entrando a SET_PAGE')
      console.log('REDUCERS payload  es...')
      console.log(action.payload)
      return {
        ...state,
        pageondisplay: action.payload
      }
    }
    // if (action.type === "SET_GLOBAL_COUNTRIES") {
    //   console.log('REDUCERS: entrando a SET_GLOBAL_COUNTRIES')
    //   console.log('REDUCERS payload.data  es...')
    //   console.log(action)
    //   return {
    //     ...state,
    //     globalcountries: action.payload.data,

    //   }
    // }
    if (action.type === "SET_DETAIL_DETAILS") {
      console.log('REDUCERS: entrando a SET_DETAIL_DETAILS')
      console.log('REDUCERS payload.data  es...')
      console.log(action.payload.data)
      return {
        ...state,
        detail: action.payload.data,
      }
    }
    
    if (action.type === "SET_ARRAY_ON_DISPLAY") {
      console.log('REDUCERS: entrando a SET_ARRAY_ON_DISPLAY')
      console.log('REDUCERS payload.data  es...')
      console.log(action.payload.data)
      console.log('REDUCERS payload  es...')
      console.log(action.payload)
      let responsepage = howmanypages(action.payload.data)
      console.log('REDUCERS responsepage  es...')
      console.log(responsepage)
      return {
        ...state,
        arrayondisplay: action.payload.data,
        pagequantity: responsepage

      }
    }
    if (action.type === "SET_PAGE_ON_DISPLAY") {
        //hacer el array
        let array
        let multiple = action.payload
        let start = 0
        let finish = 0
        start = action.payload * 9
        //finish = start - 1
        finish = start
        start = finish - 9
        return {
          ...state,
          pageondisplay: action.payload,
         // arrayondisplay: array

        }
    }
    return {
      ...state,
    };
  }
  
  export default rootReducer;