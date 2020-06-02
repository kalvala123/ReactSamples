import React from 'react';
import '../CSS/lifecycles.css';
import Lifecycles from './LifeCycles';

class LifecyclesTest extends React.Component {
    constructor(){
        super()
        this.state = {
            showChild : true,
            text: ''
        }
    }

    render(){
        return(
            <div className='lifecycles'>
                <header className='App-header'>

                    <button
                    onClick={() => this.setState( state => ({
                        showChild  : !state.showChild
                    }))}>Toggle Lifecycles</button>

                    <button onClick= {() => this.setState(state => ({
                        text : state.text + 'Hello'
                    }))}> Update Text</button>

                       {this.state.showChild ? <Lifecycles text={this.state.text} /> : null} 
                </header>
            </div>
        )
    }
}

export default LifecyclesTest;