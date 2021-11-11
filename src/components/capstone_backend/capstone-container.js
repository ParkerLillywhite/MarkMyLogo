import React, { Component } from 'react';
import axios from 'axios';
import CapstoneBackend from './capstone-backend';


export default class CapstoneContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            class_id: "",
            class_name: "",
            class_description: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);

    }

    handleSuccessfulFormSubmission(){
        console.log("handle submission")
    }

    handleFormSubmissionError(){
        console.log(error)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        axios.post(
            'https://pjl-capstone-backend.herokuapp.com/id_manual/post',
            {
                "class_id": this.state.class_id,
                "class_name": this.state.class_name,
                "class_description": this.state.class_description
            }
        ).then(response => {
            console.log("Response",response)
            this.props.handleSuccessfulFormSubmission(response.data)
        }).catch(error => {
            console.log("error", error)
        })

        event.preventDefault();
    }

    render() {
        return (
            <div className='right-home-content-wrapper'>
                <div className='right-blog-container' id="what-is-a-trademark">
                    <div className='right-blog-title'>
                        <h1>Capstone container</h1>
                    </div>

                    <div className='right-blog-subtitle'>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input
                                    type="text"
                                    name="class_id"
                                    placeholder="number"
                                    value={this.state.class_id}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="class_name"
                                    placeholder="name"
                                    value={this.state.class_name}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                <textarea
                                    type="text"
                                    name="class_description"
                                    placeholder="description"
                                    value={this.state.class_description}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <button type="submit">Save</button>
                        </form>
                    </div>


                    <div className='right-blog-content'>
                        <CapstoneBackend />
                    </div>
                </div>
            </div>
        )
    }
}