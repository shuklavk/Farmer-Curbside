import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "@material-ui/core";
import RegisterImage from '../assets/image8.png';
import axios from "axios";
import '../styles/Register.css';

class Register extends Component {
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
    const { username, password, firstName, lastName, confirmPassword, type } = this.state;
    const code = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 4).toUpperCase();
    axios.post('/auth/register', {
      username,
      password,
      firstName,
      lastName, 
      confirmPassword,
      type,
      code
    }).then((res) => {
      console.log(res);
      if (res.statusCode === 200) {
        window.location.href = '/login'
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div className="register-page">
        <div className="container">
          <Card raised={true} style={{ padding: '50px', height: '100%', width: 'auto' }}>
            <div className="row" style={{ height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div className="col-6">
                <div className="row">
                  <div className="col-12 mb-3 register-title" style={{ textAlign: 'center', fontSize: '2.5rem' }}>
                    Register Here!
                  </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div class="form-group">
                    <label for="username">User Name</label>
                    <input name="username" type="text" class="form-control" id="username" onChange={this.handleChange}/>
                  </div>
                  <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input name="firstName" type="text" class="form-control" id="firstName" onChange={this.handleChange}/>
                  </div>
                  <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input name="lastName" type="text" class="form-control" id="lastName" onChange={this.handleChange}/>
                  </div>
                  <div class="form-group">
                    <label for="type">Type</label>
                    <select name="type" class="form-control" onChange={this.handleChange}>
                      <option selected></option>
                      <option value="farmer">Farmer</option>
                      <option value="customer">Customer</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input name="password" type="password" class="form-control" id="password" onChange={this.handleChange}/>
                  </div>
                  <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input name="confirmPassword" type="password" class="form-control" id="confirmPassword" onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-block btn-primary">Register</button>
                  </div>
                </form>
                <div className="register-links">
                  <Link to="/login">Login</Link>
                </div>
              </div>
              <div className="col-6">
                <img src={RegisterImage} width='100%' />
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}

export default Register;