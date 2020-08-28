import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { reducer } from './reducer';
// import thunk from 'redux-thunk';

// const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();