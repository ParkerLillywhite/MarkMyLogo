import React, { Component } from "react";
import axios from "axios";
import CapstoneList from "./capstone-list";

export default class CapstoneBackend extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: []
        }
        this.getItems = this.getItems.bind(this);
        
        //this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        
        
    }

    // handleSuccessfulFormSubmission(){
    //     console.log("handle submission")
    // }

    
    getItems(){
        axios.get("https://pjl-capstone-backend.herokuapp.com/id_manual/result"
            
        ).then(response =>{

            this.setState({
                items: [...response.data]
            })
        }).catch(error => {
            console.log('error', error)
        })
    }


    componentDidMount(){
        this.getItems();
    }

    render(){
        

        return(
            <div>
                <CapstoneList data={this.state.items}/>
            </div>
        )
    }
}


