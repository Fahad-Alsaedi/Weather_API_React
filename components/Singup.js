import React, { Component } from "react";
import Button from "react-bootstrap/Button";
export class Singup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
    };
  }
  editUser= ()=>{
    this.setState(
      {firstname: 'ali'}
    )
    
  }
 handleSubmit=(e)=>{
    e.preventDefault();
    this.props.getData({...this.state})
 }
  handleChange = (e) => {
    this.setState({
        [ e.target.name]:e.target.value
      });
  };
  render() {
      console.log(this.state.firstName)
    return (
      <form>
        <h1>SingUp</h1>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            name="firstname"
            className="form-control"
            placeholder="First name"
            value={this.state.firstName} onChange={this.handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" name="lastname"className="form-control" placeholder="Last name" 
          value={this.state.lastname} onChange={this.handleChange}
          required/>
          
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            value={this.state.email} onChange={this.handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={this.state.password} onChange={this.handleChange}
            
          />
        </div>

        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
        <p className="forgot-password text-right">
          Already registered <a href="#">log in?</a>
        </p>
      </form>
    );
  }
}

export default Singup;
