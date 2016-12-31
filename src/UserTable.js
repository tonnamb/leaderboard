import React, { Component } from 'react';
import axios from 'axios';
import UserRow from './UserRow.js';
import './UserTable.css';

class UserTable extends Component {

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

		var rows = [];
		this.state.users.forEach(function(useri, i) {
			rows.push(<UserRow user={useri} rank={i+1} key={i+1}/>);
		});

		return (
    		<table>
    		  <thead>
    		    <tr>
    		      <th colSpan={4}>freeCodeCamp Leaderboard</th>
    		    </tr>
    		    <tr>
    		      <th>#</th>
    		      <th>Camper Name</th>
    		      <th>Points in past 30 days</th>
    		      <th>All time points</th>
    		    </tr>
    		  </thead>
    		  <tbody>
    		    {rows}
    		  </tbody>
    		</table>
    	);
	}

}

export default UserTable;