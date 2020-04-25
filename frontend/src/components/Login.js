import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    // POST request using fetch with async/await
    const requestOptions = {
        method: 'POST',
        // headers: { 'Content-Type': 'application/json' },
        body: {
          username: "dylan",
          password: "skelo"
        }
    };
    const response = await fetch('/auth/login', requestOptions);
    const data = await response.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        Login stuff goes here
      </div>
    )
  }
}

export default Login;