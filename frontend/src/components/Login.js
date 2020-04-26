import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import LoginImage from '../assets/image9.jpg';
import axios from "axios";
import '../styles/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    console.log(username);
    console.log(password);
    axios.post('/auth/login', {
      username,
      password
    }).then((res) => {
      console.log(res);
      if (res.data.user.type === 'farmer') {
        window.location.href = '/additems'
      } else {
        window.location.href = '/viewpurchase'
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="login-page">
        <div className="container">
          <Card raised={true} style={{ padding: '50px', height: '100%', width: 'auto' }}>
            <div className="row" style={{ height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div className="col-6">
                <div className="row">
                  <div className="col-12 mb-3 login-title">
                    Welcome!
                  </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <div className="input-group mb-3 login-field">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <AccountCircle style={{ color: "#CED4DA" }} />
                        </span>
                      </div>
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group mb-3 login-field">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon2">
                          <Lock style={{ color: "#CED4DA" }} />
                        </span>
                      </div>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        aria-label="Username"
                        aria-describedby="basic-addon2"
                        onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                  </div>
                </form>
                <div className="login-links">
                  <Link to="/register">Register for an account</Link>
                </div>
              </div>
              <div className="col-6">
                <img src={LoginImage} width='100%' />
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default Login;