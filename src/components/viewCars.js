import React from "react";
import { Cars } from "./cars";
import axios from "axios";

//this class is used to view all the cars
export class ViewCars extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    //gets the data from the server
    componentDidMount() {
        axios.get('http://localhost:4000/api/cars')
            .then((response) => {
                this.setState({ cars: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    //car array
    state = {
        cars: []
    }

    //renders the cars
    render() {
        return (
            <div>
                <h3>Viewing All Cars</h3>
                <Cars cars={this.state.cars} Reload={this.componentDidMount}></Cars>
            </div>
        );
    }
}