import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    // const api_call = await fetch(`https://reqres.in/api/login`);
    // const data = await api_call.json();
    // console.log(data);
    axios
      .post("https://reqres.in/api/login", this.state)
      .then(response => {
        window.location.href = "http://prntscr.com/owssmf";
      })
      .catch(error => {
        alert("Please Enter Correct Username and Password");
      });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.changeHandler}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              value={password}
              onChange={this.changeHandler}
              placeholder="Password"
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
