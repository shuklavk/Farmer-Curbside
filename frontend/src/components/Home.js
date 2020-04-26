import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
		axios
			.get("/auth/user")
			.then(response => {
				console.log(response.data);
				if (!!response.data.user) {
					console.log("THERE IS A USER");
					this.setState({
						loggedIn: true,
						user: response.data.user
					});
				} else {
					this.setState({
						loggedIn: false,
						user: null
					});
				}
			})
			.catch(err => {
				console.log(err)
			})
  }
  
  render() {
    
  }
}