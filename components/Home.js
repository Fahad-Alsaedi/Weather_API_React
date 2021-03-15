import React, { Component } from "react";
import Dashbard from "./Dashbard";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
export class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  render() {
    console.log(this.props.userData)
    return (
      <div>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            value={this.props.city} //to keep inpty the input
            onChange={(e) => {
              this.props.chang(e);
            }}
            className="mr-sm-2"
          />
          <Button
            variant="outline-success"
            onClick={() => {
              this.props.addCity(this.props.city);
            }}
          >
            Search
          </Button>
        </Form>
        <button
          onClick={() => {
            this.props.deleteCard();
          }}
        >
          Delete All
        </button>
        
        {/* // {newCity} */}
       
      </div>
    
    );
  }
}

export default Home;
