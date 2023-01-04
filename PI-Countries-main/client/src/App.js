import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//agregados por mi para react -redux
import { Provider } from "react-redux";
import store from "./Store/index.js";
//import * as serviceWorker from './serviceWorker';
//
//import Landing from "./components/Landing";
//import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
//
import './App.css';
import Landing from "./Components/landing/Landing";
import Navigation from "./Components/Navigation/Navigation.jsx";
import Detail from "./Components/Detail/Detail.jsx";
import Creation from "./Components/Creation/Creation";
import {Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Navigation} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/creation" component={Creation} />
      {/* <h1>Henry Countries</h1> */}
    </div>
  );
}

export default App;
