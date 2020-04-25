import React, { Component } from "react";
import { Card } from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import LoginImage from '../assets/image9.jpg';
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.post('/auth/login', {
      username: "dylan",
      password: "skelo"
    }).then((res => {
      console.log(res)
    }))
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E6E6E6' }}>
        <div class="container">
          <Card raised={true} style={{ padding: '50px', height: '100%', width: 'auto' }}>
            <div class="row">
              <div class="col-6">
                <div class="row">
                  <div class="col-12">
                    <div class="input-group mb-3 login-field">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">
                          <AccountCircle />
                        </span>
                      </div>
                      <input type="text" class="form-control" placeholder="Username or Email" v-model="username" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <div class="input-group mb-3 login-field">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon2">
                          <Lock />
                        </span>
                      </div>
                      <input type="password" class="form-control" placeholder="Password" v-model="password" aria-label="Username" aria-describedby="basic-addon2" />
                    </div>
                    <div>
                      <button type="button" class="btn btn-block btn-primary">Login</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6">
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