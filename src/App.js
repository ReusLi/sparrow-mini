import logo from './logo.svg';
import './App.css';

// import React, { useState } from 'react';

import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
const ref = React.createRef();
function logProps(WrappedComponent) {
    class LogProps extends React.Component {
      render() {
        const {forwardedRef, ...rest} = this.props;
        return <WrappedComponent ref={forwardedRef} {...rest} />;
      }
    }
  
    return React.forwardRef((props,ref)=>{
        return <LogProps forwardedRef={ref} {...props}/>
    });
}
class Child extends Component{
    constructor(){
        super();
    }
    render(){
        return <div style={{color: 'red'}}>{this.props.te}</div>
    }
}
const LogChild = logProps(Child); 
class Parent extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        // console.log(ref); //获取Child组件 
    }
    render(){
        return <LogChild ref={ref} txt="parent props txt" te="a"/>
    }
}

export default Parent;
