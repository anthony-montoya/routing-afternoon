import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
    constructor() {
        super();

        this.state = {
            studentInfo: []
        }
    }

    componentDidMount() {
        return axios.get('http://localhost:3005/students/' + this.props.match.params.id).then(response => {
            this.setState({
                studentInfo: response.data
            })
        })
    }

    render() {

        return (
            <div>
                <h1>Student</h1>
                <div>
                    <h3>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h3>
                    <p>Grade: {this.state.studentInfo.grade}</p>
                    <p>Email: {this.state.studentInfo.email}</p>
                </div>
            </div>
        )
    }

}