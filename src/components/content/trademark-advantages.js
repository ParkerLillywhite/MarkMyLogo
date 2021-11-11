import React, { Component } from 'react';
import Candles from '../../../static/assets/images/blog-images/candles.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default class TrademarkAdvantages extends Component {
    render(){
        return(
            <div className='home-content-wrapper'>
                <div className='blog-container' id="trademark-advantages">
                    <div className='blog-title'>
                    <h1>Advantages of Having a Trademark</h1>
                    </div>

                    <div className='blog-subtitle'>
                    <h3>Trademarks are essential</h3>
                    </div>
                    

                    <div className='blog-content'>
                        <div className='blog-image'>
                        <LazyLoadImage src={`${Candles}`} id="shop" />
                        </div>
                        
                        <div className='blog-paragraph'>
                        <p>Without a Trademark, it’s like buying a three-foot extension cord to power an electric lawn mower. 
                            After using the mower, you feel like the mower was difficult to move around and 
                            the plug may have pulled out of the electrical outlet each time you turned a 
                            corner. This can be frustrating. The insufficient tools that were used to operate
                             the product are defining the experience. The product may be wonderful, 
                             but without the correct tools, you will never know the true potential of the 
                             product. 

                            
                        </p>
                        <p className='blog-paragraph-two'>
                            Trademarks are an essential tool in today’s online market. We can help 
                             you obtain the proper trademark certificate for your brand. OWL provides 
                             all-inclusive pricing. Check out the link HERE and submit your information for 
                             an application HERE.
                        </p>
                        </div>
                    </div>
                    
                    
                    <a href ='https://outwatchlegal.com/resources' className='blog-button'>
                        More Information
                    </a>

                    

                    
                    
                </div>
            </div>
        )
    }
}