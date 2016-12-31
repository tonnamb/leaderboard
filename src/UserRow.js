import React, { Component } from 'react';

class UserRow extends Component {
	
	render() {
		const user = this.props.user;
		const rank = this.props.rank;

		return (
			<tr>
				<td>{rank}</td>
      			<td>
      				<img src={user.img} alt=""/>
      				{user.username}
      			</td>
      			<td>{user.recent}</td>
      			<td>{user.alltime}</td>
      		</tr>
		);
	}
	
}

export default UserRow;