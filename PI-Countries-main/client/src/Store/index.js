import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../Reducers/index";
import thunk from "redux-thunk";

//import { createStore } from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk));


//lo de abajo no esta andando

// const store = createStore(
//     rootReducer, 
//     compose(applyMiddleware(thunk), 
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__())
    
//     );
export default store;
