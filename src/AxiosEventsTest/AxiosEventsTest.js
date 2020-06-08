import React , {Component} from "react";
import { render } from 'react-dom';
import axios from 'axios';
import './AxiosEvents.css'

class AxiosEventsTest extends Component{
    constructor(){
        super()
        this.state ={
            name:'React',
            getData: '',
            filteredData: '',
            selectedOption:''
        }
    }

    componentDidMount = () => {
        axios.get("https://rickandmortyapi.com/api/character/")
        .then(
            res => {
                this.setState({getData : res.data.results})
                this.setState({filteredData : res.data.results})
            }
        
        )
        .catch(
            (error) => {
               // return Promise.reject(error)
               return error.response
            }
        )
    
    }

    onChangeValue=(event)=>{
        const option = event.target.value;
        if(option === "Male" || option === "Female") {
        this.setState({selectedOption : event.target.value})
        this.setState({filteredData : this.state.getData.filter(item => item.gender === event.target.value)})
        } else if(option === "Human" || option === "Alien") {
            this.setState({selectedOption : event.target.value})
            this.setState({filteredData : this.state.getData.filter(item => item.species === event.target.value)})
        } else {
            this.setState({selectedOption : event.target.value})
            this.setState({filteredData : this.state.getData})
        }
    }

    

    render(){
        return(
            <div className="main" style={{backgroundColor: 'white'}}>
            <div className="top">
                <label>Top panel</label>
                 <hr/>
            </div>
            <div className="left" >
            <label>Select option</label><br/>
                <input type="radio" value="Reset" 
                checked={this.state.selectedOption === "Reset"} 
                onChange={this.onChangeValue}/>Reset<br/>
                <input type="radio" value="Male" 
                checked={this.state.selectedOption === "Male"} 
                onChange={this.onChangeValue}/>Male<br/>
                <input type="radio" value="Female"
                 checked={this.state.selectedOption === "Female"} 
                 onChange={this.onChangeValue}/>Female<br/>
                <input type="radio" value="Human" 
                checked={this.state.selectedOption === "Human"} 
                onChange={this.onChangeValue}/>Human<br/>
                <input type="radio" value="Alien"
                 checked={this.state.selectedOption === "Alien"} 
                 onChange={this.onChangeValue}/>Alien
            </div>            
            <div className="right">Right Panel</div>
            <div className="center">
            <div className="row">
                 {Object.keys(this.state.filteredData).map(
                     (key) => (
                        <div className="column">
                        <img src={this.state.filteredData[key].image} alt="image"/><br/>
                        {"id : " + this.state.filteredData[key].id}<br/>
                        {"name : " + this.state.filteredData[key].name}<br/>
                        {"species : " + this.state.filteredData[key].species}<br/>
                        {"gender : " + this.state.filteredData[key].gender}<br/>
                        </div>
                     )
                 )}   
            </div>
            </div>
            </div>
        );
    }
}
export default AxiosEventsTest;