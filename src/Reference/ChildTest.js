import React , { Component } from 'react';
import { render } from 'react-dom';
import Child from './Child';
import './style.css'

class ChildTest extends Component{
    constructor(){
        super()
        this.state = {
            clicked : false
        }
        this.containerRef = null;
        this.setContainerRef = element => {
            this.containerRef = element
        }
    }

    handleClick(){
        if(this.containerRef){
            this.containerRef.classList.toggle('red')
            this.setState({ clicked : ! this.state.clicked})
        }
    }

    render(){
        
        const {clicked} = this.state

        return(
            <div ref={this.setContainerRef} onClick={() => this.handleClick()}>
                <h1>Parent Component</h1>
                <Child parentContainerClicked={clicked}/>
            </div>
        )
    }
}

export default ChildTest;