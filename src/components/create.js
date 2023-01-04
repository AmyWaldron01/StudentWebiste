import React from "react";
import axios from "axios";

export class Create extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeCarBrand = this.onChangeCarBrand.bind(this);
        this.onChangeCarModel = this.onChangeCarModel.bind(this);
        this.onChangeCarYear = this.onChangeCarYear.bind(this);

        this.state = {
            brand: '',
            model: '',
            year: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.brand},
        ${this.state.model},
        ${this.state.year}`);

        const car = {
            brand: this.state.brand,
            model: this.state.model,
            year: this.state.year
        }

        axios.post('http://localhost:4000/api/cars', car)
            .then()
            .catch();

        this.setState({
            brand: '',
            model: '',
            year: ''
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

                    <input type="submit" value="Add Car" />
                </form>
            </div>
        );
    }
}