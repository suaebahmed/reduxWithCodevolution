import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; //or

// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider } from 'react-redux';
// import App from './App'
// import rootReducer from './store/reducer/rootRuducer'

// import thunk from 'redux-thunk'
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import fbConfig from './config/fbConfig'
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

// const store = createStore(rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//     reactReduxFirebase(fbConfig), 
//     reduxFirestore(fbConfig) 
//   )
// );

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));




// __________________ rivision only todo appand axios app.___________________


import App from './App'

import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


// __________________ rivision only react-router ._________________________
// import App from './rivision10/App'
// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './rivision10/reducer/reducer'
// // const x = combineReducers({
// //   count: rootReducer
// // })
// const store = createStore(rootReducer);
// ReactDOM.render(<Provider store={store} ><App/></Provider>,document.getElementById('root'));
// serviceWorker.unregister();
