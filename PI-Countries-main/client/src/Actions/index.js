
var apiKey2 = 'e728ab3a'
var apiKey = 'c18e7944'
var apiKey4 = '75f8c9d4'

//START ACTIONS FOR ORDER FILTER
//SET_ORDERVALUE SET_ORDERARRAYORIGINAL SET_ORDERARRAYFILTERED
export function SET_ORDERVALUE (payload) {
  console.log('ACTIONS entrando a SET_ORDERVALUE')
  console.log('payload es...')
  console.log(payload)
  return { type: "SET_ORDERVALUE", payload };
}
export function SET_ORDERARRAYORIGINAL (payload) {
  console.log('ACTIONS entrando a SET_ORDERARRAYORIGINAL')
  console.log('payload es...')
  console.log(payload)
  return { type: "SET_ORDERARRAYORIGINAL", payload };
}
export function SET_ORDERARRAYFILTERED (payload) {
  console.log('ACTIONS entrando a SET_ORDERARRAYFILTERED')
  console.log('payload es...')
  console.log(payload)
  return { type: "SET_ORDERARRAYFILTERED", payload };
}

//START ACTIONS FOR ACITVITIES FILTER "SET_FAARRAYORIGINAL" "SET_FAVALUE" "SET_FAARRAYFILTERED"
export function SET_FAARRAYFILTERED (payload) {
  
  console.log('ACTIONS entrando a SET_FAARRAYFILTERED')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_FAARRAYFILTERED", payload };
}
export function SET_FAVALUE (payload) {
  
  console.log('ACTIONS entrando a SET_FAVALUE')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_FAVALUE", payload };
}
export function SET_FAARRAYORIGINAL (payload) {
  
  console.log('ACTIONS entrando a SET_FAARRAYORIGINAL')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_FAARRAYORIGINAL", payload };
}
//END ACTIONS FOR ACITVITIES FILTER
export function SET_ACTIVITIESARRAY (payload) {
  
  console.log('ACTIONS entrando a SET_ACTIVITIESARRAY')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_ACTIVITIESARRAY", payload };
}
//START FILTERS
//FCARRAY
//"SET_FCVALUE" "SET_FCARRAYFILTERED" "SET_FCARRAYORIGINAL"
export function SET_FCVALUE (payload) {
  
  console.log('ACTIONS entrando a SET_FCVALUE')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_FCVALUE", payload };
}
//
export function SET_FCARRAYFILTERED (payload) {
  
  console.log('ACTIONS entrando a SET_FCARRAYFILTERED')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_FCARRAYFILTERED", payload };
}
//
export function SET_FCARRAYORIGINAL (payload) {
  
  console.log('ACTIONS entrando a SET_FCARRAYORIGINAL')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_FCARRAYORIGINAL", payload };
}
//END FCARRAY
// "SET_FILTER_ORDER"
export function SET_FILTER_ORDER (payload) {
  
  console.log('ACTIONS entrando a SET_FILTER_ORDER')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_FILTER_ORDER", payload };
}
//     "SET_FILTER_ACTIVITY"
export function SET_FILTER_ACTIVITY (payload) {
  console.log('ACTIONS entrando a SET_FILTER_ACTIVITY')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_FILTER_ACTIVITY", payload };
}
//     "SET_FILTER_CONTINENT"
export function SET_FILTER_CONTINENT(payload) {
  console.log('ACTIONS entrando a SET_FILTER_CONTINENT')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_FILTER_CONTINENT", payload };
}
export function SET_FILTER_CONTINENT_ARRAY (payload) {
  console.log('ACTIONS entrando a SET_FILTER_CONTINENT_ARRAY ')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_FILTER_CONTINENT_ARRAY", payload };
}
//END FILTERS

export function SET_SERVER_MESSAGE (payload) {
  console.log('ACTIONS entrando a SET_SERVER_MESSAGE')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_SERVER_MESSAGE", payload };
}

export function SET_GLOBAL_COUNTRIES (payload) {
  console.log('ACTIONS entrando a SET_GLOBAL_COUNTRIES')
  console.log('payload es...')
  console.log(payload)
 
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_GLOBAL_COUNTRIES", payload };
}
export function SET_PAGE (payload) {
  //this function goes to the reducer
  console.log('entrando a SET_PAGE')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_PAGE", payload };
}

export function loadCountries (payload) {
  console.log('entro a Actions: loadCountries')
 return function (dispatch){
  return fetch('http://localhost:3001/countries')
    .then(response => response.json())
      .then(json => {
        
        
        console.log("countries de loadCOuntries actions es")
        console.log(json)
        dispatch(SET_GLOBAL_COUNTRIES(json.data))
        dispatch(SET_ARRAY_ON_DISPLAY(json))
        dispatch(SET_FCARRAYORIGINAL(json.data))
      });
 }
}
export function loadCountriesinglobalcountries (payload) {
  console.log('entro a loadCOuntrisglobalcountries****************************************************************************')
//   console.log('entro a Actions: loadCountries')
//  return function (dispatch){
//   return fetch('http://localhost:3001/countries')
//     .then(response => response.json())
//       .then(json => {
        
        
//         console.log("countries de loadCOuntries actions es")
//         console.log(json)
//         dispatch(SET_GLOBAL_COUNTRIES(json.data))
        
//       });
//  }
}

export function SET_DETAIL_DETAILS (payload) {
  //this function goes to the reducer
  console.log('entrando a SET_DETAIL_DETAILS Y')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_DETAIL_DETAILS", payload };
}


export function SET_DETAIL (payload) {
  console.log('entrando a SET_DETAIL')
  console.log('payload es...')
  console.log(payload)
  
    return function (dispatch){
      return fetch(`http://localhost:3001/countries/${payload}`)
        .then(response => response.json())
          .then(json => {
            console.log("Detail del country es...")
            console.log(json.data)
            dispatch(SET_DETAIL_DETAILS(json))
          });
     }
}

export function SET_ARRAY_ON_CHANGE (payload) {
  console.log('entrando a SET_ARRAY_ON_CHANGE')
  console.log('payload es...')
  console.log(payload)
  
    return function (dispatch){
      return fetch(`http://localhost:3001/countries?name=${payload}`)
        .then(response => response.json())
          .then(json => {
            console.log("countries parecidos de ACTIONS  son...")
            console.log(json.data)
            dispatch(SET_ARRAY_ON_DISPLAY(json))
            dispatch(SET_FCARRAYORIGINAL(json.data))
          });
     }
}
//"SET_ADDING_COUNTRIES"
export function SET_ADDING_COUNTRIES (payload) {
  console.log('entrando a SET_ADDING_COUNTRIES')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_ADDING_COUNTRIES", payload };
}
export function SET_ARRAY_ON_DISPLAY (payload) {
  console.log('ACTIONS: entrando a SET_ARRAY_ON_DISPLAY')
  console.log('payload es...')
  console.log(payload)
  // return { type: "GET_RECIPE_1", payload: payload}
  return { type: "SET_ARRAY_ON_DISPLAY", payload };
}

export function SET_PAGE_ON_DISPLAY (payload) {
    // return { type: "GET_RECIPE_1", payload: payload}
    return { type: "SET_PAGE_ON_DISPLAY", payload };
 }
 