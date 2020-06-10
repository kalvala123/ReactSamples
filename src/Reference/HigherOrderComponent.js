import React, { Component } from 'react';
import { render } from 'react-dom';


var DataSource = { data: 'Bengaluru' }


var HigherOrderComponent = Parameter => class extends Component {
  render() {
    return <Parameter {...this.state} />;
  }
  componentDidMount() {
    this.setState({ data: DataSource.data });
  }
}


class Parent extends Component {
  render() {
    return (<div><h1>List of Cities</h1>PROPS: {this.props.data}</div>);
  }
}

const HOCTEST = HigherOrderComponent(Parent);
export default HOCTEST;