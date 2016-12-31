import React, { Component } from 'react';
import UserRow from './UserRow.js';
import './UserTable.css';

class UserTable extends Component {

	render() {

		var rows = [];
		this.props.users.forEach(function(useri, i) {
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