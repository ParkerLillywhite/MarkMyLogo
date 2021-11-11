import React, { Component } from 'react';
import Product from '../../../static/assets/images/blog-images/product.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';



export default class HowToTrademark extends Component {



    
    render(){
        return(
            <div className='home-content-wrapper'>
                <div className='blog-container' id="how-to-trademark">
                    <div className='blog-title' >
                    <h1>How do I file a trademark?</h1>
                    </div>

                    <div className='blog-subtitle'>
                    <h3>Filing a trademark for your brand is easy. </h3>
                    </div>
                    

                    <div className='blog-content'>
                        <div className='blog-image'>
                        <LazyLoadImage src={`${Product}`} id="shop" />
                        
                        </div>
                        
                        <div className='blog-paragraph'>
                        <p>All you need is a thorough understanding what service or product your provide.
                            We'll work the trademark magic for you, but the more precise information about your product you provide,
                            the smoother the process of applying will go. 
                            Any kind of brand can be protected, just as long as your name isn't taken by a similar company. 
                            Meaning a company called Parker and Bro's that sells coffee won't interfere with a company of the same name that sells board games.

                            
                        </p>
                        <p className='blog-paragraph-two'>
                            Certain attributes are used to classify every type of trademark you can get. The most obvious 
                            is whether you provide goods, or a service. There is also something called an ID class.
                            The ID's range from 1 to 45 and is a way of the U.S. goverment to precisely index your mark. 
                            You can use our class ID search to figure out what your product or service belongs in.
                        </p>
                        </div>
                    </div>
                    
                    
                    <a href ='https://outwatchlegal.com/register' className='blog-button'>
                        Get Started
                    </a>

                    

                    
                    
                </div>
            </div>
        )
    }
}