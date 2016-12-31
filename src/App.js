import React, { Component } from 'react';
import UserTable from './UserTable.js';
import axios from 'axios';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {users: [{"username":"loading","img":"","alltime":0,"recent":0}]};
  }

  componentDidMount() {
    let _this = this;
    this.serverRequest =
      axios
        .get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
        .then(function(result) {
          _this.setState({users: result.data});
        })

  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {

    return (
      <div className="App">
        <UserTable users={this.state.users}/>
      </div>
    );
  }
}

export default App;
