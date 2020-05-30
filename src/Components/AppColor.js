
import React, { Component } from 'react';
import { render } from 'react-dom';
  
  const colors = ['Gray', 'Silver', 'Brown' , 'Yellow', 'Orange']
  
  class AppColor extends Component {
    constructor(){
      super();
      this.state = {
        key: 'React',
        list: colors
      }
    }
  
    removeContent = (content) =>{
      this.setState ({list : this.state.list.filter((c) =>
        c != content )})
    }
  
    changeKey = (e) => {
      this.setState ({
        key : e.target.value
      })
    }
  
    refresh = () => {
      this.setState({
        list: colors
      })
    }
  
    render(){
      return(
        <div>
            <input type="radio" name="key" value="index" 
            checked= {this.state.key ==  'index'} // 0 and 1
            onClick = {this.changeKey}
            />
            <label>Index</label>
            <input type="radio" name="key" value="content" 
            checked= {this.state.key ==  'content'} // gray , yellow
            onClick = {this.changeKey}
            />
            <label>Content</label>
            <br/>
            {
              this.state.list.map((content,index) => 
                <Box key={this.state.key == 'content' ? content : index} 
                    className = "listItem" // class = ""
                    onClick = {() => { this.removeContent(content)}} >
                      {content}
                    </Box>
              )
            }
            <button onClick ={this.refresh} > refresh</button>
  
        </div>
      )
    }
}

// List and Keys 

class Box extends Component{
    constructor(props){
      super(props)
      this.backgroundColor = props.children // it is used to render content of the component
    }
  
    render(){
      return <div onMouseDown = {() => console.log(this.props.key)}
              style= {{backgroundColor : this.backgroundColor}}
              {...this.props} />
  
    }
  }

export default AppColor;