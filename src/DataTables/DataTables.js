import React , {Component} from 'react';
import { render } from 'react-dom';
import * as Axios from 'axios';
import './style.css';

var resultData = []

class DataTables extends Component{

    constructor(){
        super()
        this.state = {
            apiData : []
        }
    }

    async componentDidMount(){
        try {
            setInterval(async () => {
                await Axios.get('http://hn.algolia.com/api/v1/search_by_date')
                    .then((response) => {
                        this.setState({
                            apiData: response.data.hits
                        })
                        console.log(this.state.apiData)
                    })
            }, 5000);
        }
         catch(e){
             console.log(e)
         }
    }


    render(){
        return(
            <div style={{ width: "100%", height: "100%" }} >
            <div style={{ width: "100%", height: "50%" }}>
                <label style={{border: "3px solid blue", width:"100%", height: "100%", fontSize:20}}>
                    </label>
                <table className="table" id="tableId">
                    <thead className="tableHeader">
                        <tr>
                            <th style={{ height: '50px' }}>Author</th>
                             <th style={{ height: '50px' }}>Story Id</th>
                             <th style={{ height: '50px' }}>Story Title</th>
                             <th style={{height:'50px'}}>Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.apiData.map(obj => {
                            return (
                                <tr>
                                    <td>
                                        {obj.author}
                                    </td>
                                    <td id="story_id">
                                        {obj.story_id}
                                    </td>
                                    <td id="button">
                                        {obj.story_title}
                                    </td>
                                    <td>
                                        {obj.comment_text}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
          
        </div>
        )
    }
}

export default DataTables;