import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


export default class Contact extends Component {
    render(){
        return(
            <div className="contact" id="contact">

                <div className="contact-outwatch">
                    <div className='contact-outwatch-title'>
                        <h1>How do I buy?</h1>
                    </div>
                    
                    <div className='contact-outwatch-subtitle'>
                        <h2>Our team at Outwatch Legal has got you covered</h2>
                    </div>

                    <div className='contact-outwatch-subtitle-two'>
                        <h2>For pricing and more:</h2>
                    </div>
                    

                    <button type="button" 
                        className="btn-learn-more"
                        onClick={() => window.open("https://outwatchlegal.com", "_blank")}
                        >Outwatch Legal</button>  
                </div>
                <div className="contact-kimball">
                    <div className='contact-kimball-title'>
                        <h1>The attorneys that will help you file:</h1>
                    </div>
                    
                    
                    

                    <button type="button" 
                        className="btn-kimball"
                        onClick={() => window.open("http://kimballanderson.com/", "_blank")}
                        >Kimball Anderson</button>  
                </div>
                

                
                
            </div>
        )
    }
}