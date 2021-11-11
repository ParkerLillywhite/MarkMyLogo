import React, { Component } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route

} from 'react-router-dom';

import Home from './content/home';
import Icons from './helpers/icons';
import Navigation from './Navigation';
import useSticky from './hooks/useSticky';
import NavBar from './navbar-container';
import HowToTrademark from './content/how-to-trademark';
import TrademarkAdvantages from './content/trademark-advantages';
import WhatIsATrademark from './content/what-is-a-trademark';

export default class App extends Component {

  constructor(){
    super();

    Icons();
    
  }

  

  render() {
    
    return (
      
      
       <NavBar />
        
        
     
    );
  }
}


//bookmarks

//redirects to kimball anderson and outwatch will be implemented into blog with a button

//use top trademark searches for blog information