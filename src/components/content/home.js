import React, { Component } from "react";

import BackgroundImg from '../../../static/assets/images/background.jpg';
import CapstoneContainer from "../capstone_backend/capstone-container";

import Contact from './contact';
import HowToTrademark from "./how-to-trademark";
import TrademarkAdvantages from "./trademark-advantages";
import WhatIsATrademark from "./what-is-a-trademark";

export default class Home extends Component{


    
    render(){
        return(
            <div className='home'>
                <div className="home-background">
                    <img  src={`url${BackgroundImg}`}/>

                </div>

                <HowToTrademark id="#how-to-trademark"/>
                <WhatIsATrademark />
                <TrademarkAdvantages />
                <CapstoneContainer />
                <Contact />
                
                
            </div>
            
        )
    }
}

//what is a trademark?
//how to file a trademark
//advantages of having a trademark
//trademark basics
