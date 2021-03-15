import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export class Contact extends Component {
  render() {
    return (
      <div>
     <form>
        <h1 className="h1 text-center mb-5">Contact us</h1>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Your name
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
        <br />
    
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Your message
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
        <div className="text-center mt-4">
        <Button variant="primary" type="submit">
              Submit
            </Button>     
                </div>
              </form>
      </div>
    );
  }
}

export default Contact;
