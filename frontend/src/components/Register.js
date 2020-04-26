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
    axios.post('/auth/register', {
      username,
      password,
      firstName,
      lastName, 
      confirmPassword,
      type
    }).then((res) => {
      console.log(res);
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


{/* <form v-on:submit.prevent="onSubmit">
<div class="form-group">
  <label for="emailAddress">Email address</label>
  <input v-model="email" type="email" class="form-control" id="emailAddress">
</div>
<div class="form-group">
  <label for="firstName">First Name</label>
  <input v-model="firstName" type="text" class="form-control" id="firstName">
</div>
<div class="form-group">
  <label for="lastName">Last Name</label>
  <input v-model="lastName" type="text" class="form-control" id="lastName">
</div>
<div class="form-group">
  <label for="displayName">Display Name</label>
  <input v-model="displayName" type="text" class="form-control" id="displayName">
</div>
<div class="form-group">
  <label for="school">School</label>
  <select class="form-control" name="school" v-model="school">
    <option selected></option>
    <option v-for="school in schools" :key="school.name" v-bind:value="school['school_id']">{{ school.name }}</option>
  </select>
</div>
<div class="form-group">
  <label for="password">Password</label>
  <input v-model="password" type="password" class="form-control" id="password">
</div>
<div class="form-group">
  <label for="confirmPassword">Confirm Password</label>
  <input v-model="confirmPassword" type="password" class="form-control" id="confirmPassword">
</div>
<div style="color: red;" class="py-2" v-if="errors !== null">
  <h6>Errors:</h6>
  <div v-for="error in errors" v-bind:key="error.msg">
    Error: {{ error.msg }}
  </div>
</div>
<div class="form-group">
  <button type="submit" class="btn btn-block btn-primary">Create User</button>
</div>
</form> */}