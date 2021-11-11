import React, { Component }from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from "react-router-dom";
import { HashLink as Link} from "react-router-hash-link";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './content/home';
import CapstoneContainer from './capstone_backend/capstone-container';






export default class Navigation extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
            
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }
    
    showMenu(event){
        event.preventDefault();

        this.setState({showMenu: true}, () => {
            document.addEventListener('click', this.closeMenu);
        })
    }

    closeMenu(event){
        (this.dropdownMenu.contains(event.target) 
        || !this.dropdownMenu.contains(event.target)) ? (
            
            this.setState({showMenu: false }, () =>{
                document.removeEventListener("click", this.closeMenu);
            }) 
        ): null;

    }


    

    render() {
        

        
        return (
            <div className='navigation-container'>
                <div className='navigation-title'>
                    <Link smooth to="#top">
                        <h1>MARK MY LOGO</h1>
                    </Link>
                </div>

                

                <div className='navigation-dropdown'>
                    <div onClick={this.showMenu} className="navigation-icon">
                        
                        <FontAwesomeIcon icon="bars" />

                        
                    </div>
                    {
                        this.state.showMenu
                        ? (
                            <div className="menu"
                                ref={(element) => {
                                    this.dropdownMenu = element;
                                }}
                            >
                                <div className="links">
                                <Link smooth to="/#how-to-trademark">How To Trademark</Link>
                                <Link smooth to="/#what-is-a-trademark">What Is a Trademark?</Link>
                                <Link smooth to="/#trademark-advantages">Trademark Advantages</Link>
                                <Link smooth to="/#contact">Contact Us</Link>
                                </div>
                                
                            </div>
                        ) : (null)
                    }
                </div>
                   
                    
                
                
            </div>
        )
    }
}