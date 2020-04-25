import React, { Component } from "react";
import { Card } from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import LoginImage from '../assets/image9.jpg';
import axios from "axios";
import '../styles/Login.css';

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
      <div className="login-page">
        <div className="container">
          <Card raised={true} style={{ padding: '50px', height: '100%', width: 'auto' }}>
            <div className="row" style={{ height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div className="col-6">
                <form>
                  <div className="form-group">
                    <div className="input-group mb-3 login-field">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <AccountCircle style={{ color: "#CED4DA" }} />
                        </span>
                      </div>
                      <input type="text" className="form-control" placeholder="Username or Email" v-model="username" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group mb-3 login-field">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon2">
                          <Lock style={{ color: "#CED4DA" }} />
                        </span>
                      </div>
                      <input type="password" className="form-control" placeholder="Password" v-model="password" aria-label="Username" aria-describedby="basic-addon2" />
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-block btn-primary">Login</button>
                  </div>
                </form>
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