import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//edit component
export function EditCars() {
    let { id } = useParams();
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');


    //get the data from the database
    useEffect(() => {
        axios.get('http://localhost:4000/api/car/' + id)
            .then((response) => {
                setBrand(response.data.brand);
                setModel(response.data.model);
                setYear(response.data.year);
                setRating(response.data.rating);
            })
            .catch()
    }, []);

    //submit the data to the database
    const handleSubmit = (e) => {
        e.preventDefault();

        //pop up with new data entered
        alert("---------------EDIT CONFIRMED--------------\n" + "Lecture Name: " + brand + "\nExam Module: " +
            model + "\nExam Type: " +
            year + "\nExam Result: " + rating);

        const editCar = {
            brand: brand,
            model: model,
            year: year,
            rating: rating

        }

        //send the data to the server
        axios.put('http://localhost:4000/api/car/' + id, editCar)
            .then()
            .catch();
    }

    //display the data
    return (
        <div>
            <h3>Edit component</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Lecture Name: </label>
                    <input type="text"
                        className="form-control"
                        value={brand}
                        onChange={(e) => { setBrand(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Module: </label>
                    <input type="text"
                        className="form-control"
                        value={model}
                        onChange={(e) => { setModel(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Exam Type </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Grade </label>
                    <input type="text"
                        className="form-control"
                        value={rating}
                        onChange={(e) => { setRating(e.target.value) }}
                    />
                </div>
                <input type="submit" value="Edit Grades"></input>
            </form>
        </div>
    );
}

