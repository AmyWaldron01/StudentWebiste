import React from "react";
import { CarsItem} from './carsItem';

export class Cars extends React.Component{
    render(){
        return this.props.cars.map(
            (car)=>{
                return <CarsItem car={car} key={car._id} Reload={this.props.Reload}></CarsItem>
            }
        );
    }
}