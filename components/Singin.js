import React, { Component } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export class Singin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  handleSubmit=(e)=>{
    e.preventDefault();

 }
  chickUser=(e)=>{
 if ( e.target.value === this.props.name.emali 
  &&  
  this.props.name.password ===e.target.value ){
  console.log('you logedin')
 }
  }
 
    render() {
        return (
            <Form>
                <h1>Login</h1>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{this.chickUser(e)}} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
  
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e)=>{this.chickUser(e)}}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Form>
        )
    }
}

export default Singin
