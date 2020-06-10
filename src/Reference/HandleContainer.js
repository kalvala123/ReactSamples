import React , {Component} from 'react';
import { render } from 'react-dom';

class HandleContainer extends Component{

    constructor(){
        super()
    }

    getTopData(){
        alert("get top data information ")
    }

    getMixData(){
        alert("Getting Mixed data of component")
    }
    
    render(){
        return <h1>Handler Container</h1>
    }
}

export default HandleContainer;