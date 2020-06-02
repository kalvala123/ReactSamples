import React from 'react';

class Lifecycles extends React.Component {
    constructor(){
        super()
        console.log("In Constructor")
    }

    componentDidMount(){
        console.log('component Did Mount')
    }

    componentDidUpdate(){
        console.log('compoent Did update')
    }

    componentWillUnmount(){
        console.log('component Will unmount')
    }

    shouldComponentUpdate(nextProps){
        console.log('shouldComponentUpdate',nextProps);
        return nextProps.text !== this.props.text
    }

    render(){
        console.log('render')
        return(
            <div className ='lifecycles'>
                <h3>Life cycle Components</h3>
                {this.props.text}
            </div>
        )
    }
}

export default Lifecycles;