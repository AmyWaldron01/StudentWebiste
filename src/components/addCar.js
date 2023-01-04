import React from "react";
import axios from "axios";

export class AddCar extends React.Component {

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
        return (
            <div>
                <h3>Add Your New Cars!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Car Brand: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.brand}
                            onChange={this.onChangeCarBrand}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Car Model : </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.model}
                            onChange={this.onChangeCarModel}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Car Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.year}
                            onChange={this.onChangeCarYear}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Car Rating: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.rating}
                            onChange={this.onChangeCarRating}
                        />
                    </div>

                    <input type="submit" value="Add Car" />
                </form>
            </div>
        );
    }
}