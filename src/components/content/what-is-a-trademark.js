import React, { Component } from 'react';
import Clay from '../../../static/assets/images/blog-images/clay.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default class WhatIsATrademark extends Component {
    render(){
        return(
            <div className='right-home-content-wrapper'>
                <div className='right-blog-container' id="what-is-a-trademark">
                    <div className='right-blog-title'>
                    <h1>What Exactly is a Trademark?</h1>
                    </div>

                    <div className='right-blog-subtitle'>
                    <h3></h3>
                    </div>
                    

                    <div className='right-blog-content'>

                    <div className='right-blog-paragraph'>
                        <p>All you need is a thorough understanding what service or product your provide.
                            we'll work the trademark magic for you, but the more precise information about your product you provide,
                            the smoother the process of applying will go. 
                            Any kind of brand can be protected, just as long as your name isn't taken by a similar company. 
                            meaning a company called Parker and Bro's that sells coffee won't interfere with a company of the same name that sells board games.

                            
                        </p>
                        <p className='right-blog-paragraph-two'>
                            We will have you fill out information for a federal application, because varying laws from state to state may leave you unprotected.
                            if you are ready to file, you can follow the link below to get the process started.
                        </p>
                        </div>
                        
                        <div className='right-blog-image'>
                        <LazyLoadImage src={`${Clay}`} id="shop" />
                        </div>
                        
                        
                    </div>
                    
                    

                    <button className='right-blog-button'>Get Started</button>

                    

                    
                    
                </div>
            </div>
        )
    }
}