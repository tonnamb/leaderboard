import React, { Component } from 'react';
import axios from 'axios';
import UserRow from './UserRow.js';
import './UserTable.css';

class UserTable extends Component {

	constructor(props) {
  	  super(props);
  	  this.state = {users: [{"username":"loading","img":"","alltime":0,"recent":0}], recent: "clicked", alltime: "not-clicked"};

  	  this.clickRecent = this.clickRecent.bind(this);
  	  this.clickAlltime = this.clickAlltime.bind(this);
  	  this.loadData = this.loadData.bind(this);
  	}
	
  	componentDidMount() {
  	  this.loadData("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
  	}
	
  	componentWillUnmount() {
  	  this.serverRequest.abort();
  	}

  	loadData(url) {
  	  let _this = this;
  	  this.serverRequest =
  	    axios
  	      .get(url)
  	      .then(function(result) {
  	        _this.setState({users: result.data});
  	      })
  	}

  	clickRecent(e) {
  	  e.preventDefault();
  	  this.loadData("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
  	  this.setState({recent: "clicked", alltime: "not-clicked"});
  	}

  	clickAlltime(e) {
  	  e.preventDefault();
  	  this.loadData("https://fcctop100.herokuapp.com/api/fccusers/top/alltime");
  	  this.setState({recent: "not-clicked", alltime: "clicked"});
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
    		      <th className={this.state.recent}><a href="#" onClick={this.clickRecent}>Points in past 30 days</a></th>
    		      <th className={this.state.alltime}><a href="#" onClick={this.clickAlltime}>All time points</a></th>
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