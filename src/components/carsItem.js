import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class CarsItem extends React.Component {
    constructor() {
        super();
        //binds the delete method to the component
        this.DeleteBook = this.DeleteBook.bind(this);
    }
    DeleteBook(e) {
        e.preventDefault();

        //deletes the car from the database
        axios.delete('http://localhost:4000/api/car/' + this.props.car._id)
            .then((res) => { this.props.Reload(); })
            .catch();
    }

    render() {
        //returns + prints out the car information 
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.car.brand}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.car.model}></img>
                            <footer >
                                {this.props.car.year}

                            </footer>
                            <footer >
                                {this.props.car.rating}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/editCars/' + this.props.car._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>
                </Card>
            </div>
        );
    }
}