import React , {Component} from "react";
import { render } from 'react-dom';
import axios from 'axios';

class AxiosTest extends Component{
    constructor(){
        super()
        this.state ={
            name:'React',
            getData: '',
            postData : ''
        }
    }

    // headers = {
    //     uid: "user",
    //     pwd: "pwd",
    //     authentication :"adfadadsfadf"
    // }

    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(
            res => {
                this.setState({getData : res.data.filter(item => item.id === 2)})
            }
        
        )
        .catch(
            (error) => {
               // return Promise.reject(error)
               return error.response
            }
        )

        let payload = {
            userId : 100,
            id : 100,
            title: "Post data inserted",
            body: "post call"
        }

        axios.post("https://jsonplaceholder.typicode.com/posts", payload)
             .then(
                 res => {
                        this.setState({postData : res.data})
                 }
             )
        
        axios.delete("https://jsonplaceholder.typicode.com/posts")
             .then(
                 res => {
                        this.setState({postData : res.data}).filter(item => item.id === 1)
                 }
             )
    }

    render(){
        return(
            <div>
                 {Object.keys(this.state.getData).map(
                     (key) => (
                        <div className="container">
                        <label> get Call data</label>
                        <hr/>
                        <span className="Left">{"userID : " + this.state.getData[key].userId}</span><br/>
                        <span className="Right">{"title : " + this.state.getData[key].title}</span><br/>
                        <span className="Right">{"body : " + this.state.getData[key].body}</span><br/>
                        </div>
                     )
                 )}   

                 {
                    Object.keys(this.state.postData).map((key) => (
                        <div className = "container">
                            <hr/>
                            <label>post call </label> <br/>
                            <span className="Left">{key}</span><br/>
                            <span className="Right"> { " : " + this.state.postData[key]}</span>
                        </div>
                    ))
                 }
            </div>
        );
    }
}
export default AxiosTest;