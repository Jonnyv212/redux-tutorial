import React from 'react';
import {connect} from "react-redux";
import { User } from '../components/User';
import { Main } from '../components/Main';
import {addNumber, subtractNumber} from "../actions/mathActions"
import {getName, setAge} from "../actions/userActions"
import axios from "axios";

class App extends React.Component {
  render(){
  return (
    <div className="container">
        <Main getMyData={() => this.props.getName(getData())} />
        <User userdata={this.props.user.name} />
    </div>
  );
  }
}
const getData = () => {
    let resFull = [];
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      let res = response.data.length;
      // For every piece of data in the array push it to a resFull.
      for (let i = 0; i < res; i++) {
        resFull.push(response.data[i]);
      }
    });
    return resFull;
  };
  
const mapStateToProps = (state) =>{
    return {
        user: state.user,
        math: state.math
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        getName: (name) => {
            dispatch(getName(name))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
