import React from "react";
import { CarsItem} from './carsItem';

export class Cars extends React.Component{
    render(){
        return this.props.cars.map(
            (car)=>{
                // returns a new array of elements from cars item
                return <CarsItem car={car} key={car._id} Reload={this.props.Reload}></CarsItem>
            }
        );
    }
}