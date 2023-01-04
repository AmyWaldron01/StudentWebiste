import React from "react";

export class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to Car Repo</h1>
                <h2 > It is {new Date().toLocaleTimeString()}.</h2 >
                <ul>
                    <br></br>
                    <li>Keep track of cars you own by adding them to a repository</li>
                    <br></br>
                    <li>Add your cars in the "Add Car" section</li>
                    <br></br>
                    <li>View your added cars in the "Repository" section</li>
                    <dl>
                        <dt>Edit</dt>
                        <dd>- Here you can edit an already existing car</dd>
                        <dt>Delete</dt>
                        <dd>- You may also delete an already existing car</dd>
                    </dl>
                </ul>
                <img src='https://w7.pngwing.com/pngs/787/886/png-transparent-sports-car-sports-car-cartoon-elements-cartoon-character-sport-car.png' width="400" height="360"></img>
            </div>
        );
    }
}

