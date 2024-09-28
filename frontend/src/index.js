import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import ReactGA from "react-ga4";

ReactGA.initialize("G-EM3GJWHP6C");
ReactGA.send({ 
    hitType: "pageview", 
    page: window.location.pathname ,
 });

ReactDOM.render(<App />, document.getElementById('root'))
