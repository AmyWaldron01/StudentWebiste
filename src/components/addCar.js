import React from "react";
import axios from "axios";

export class AddCar extends React.Component {

    //handles the submit event
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeCarBrand = this.onChangeCarBrand.bind(this);
        this.onChangeCarModel = this.onChangeCarModel.bind(this);
        this.onChangeCarYear = this.onChangeCarYear.bind(this);
        this.onChangeCarRating = this.onChangeCarRating.bind(this);

        this.state = {
            brand: '',
            model: '',
            year: '',
            rating: ''
        }
    }

    //handles the submit event
    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.brand},
        ${this.state.model},
        ${this.state.year},
        ${this.state.rating} `
        );

        const car = {
            brand: this.state.brand,
            model: this.state.model,
            year: this.state.year,
            rating: this.state.rating
        }

        //sends the data to the server
        axios.post('http://localhost:4000/api/cars', car)
            .then()
            .catch();

        this.setState({
            brand: '',
            model: '',
            year: '',
            rating: ''
        })
    }

    //handles the change event
    onChangeCarBrand(e) {
        this.setState({
            brand: e.target.value
        })
    }
    onChangeCarModel(e) {
        this.setState({
            model: e.target.value
        })
    }
    onChangeCarYear(e) {
        this.setState({
            year: e.target.value
        })
    }
    onChangeCarRating(e) {
        this.setState({
            rating: e.target.value
        })
    }

    render() {
        //Adding new cars here // what the user enters is stored in the state
        return (
            <div>

                <h3>Add Your New Grades!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        {/* Car Brand*/}
                        <label>Add Lecture Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.brand}
                            onChange={this.onChangeCarBrand}
                        />
                    </div>

                    <div className="form-group">
                        {/*car Model */}
                        <label>Picture of Module : </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.model}
                            onChange={this.onChangeCarModel}
                        />
                    </div>

                    <div className="form-group">
                        {/* Car Model*/}
                        <label>Add Exam : </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.year}
                            onChange={this.onChangeCarYear}
                        />
                    </div>

                    <div className="form-group">
                        {/* CAr Rating */}
                        <label>Add Grade: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.rating}
                            onChange={this.onChangeCarRating}
                        />
                    </div>

                    <input type="submit" value="Add Grade" />
                </form>
            </div>
        );
    }
}