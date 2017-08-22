import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class ClassList extends Component {
    constructor() {
        super();
        
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        return axios.get('http://localhost:3005/students').then(response => {
            this.setState({
                students: response.data
            })
        })
    }

    render() {
        const students = this.state.students.map((student, i) => {
            return (
                <div key={i}>
                    <Link to={`/student/${student.id}`}><h3>{student.first_name} {student.last_name}</h3></Link>
                </div>
            )
        })
        return (
            <div>
                <h3>Class List:</h3>
                { students }
            </div>
        )
    }   
}