import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Home from "./components/Home";
import Dashbard from "./components/Dashbard";
import Contact from "./components/Contact";
import Singup from "./components/Singup";
import Singin from "./components/Singin";
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tasks: [], // for the response data
      city: "", //take the search and add to the API
      ArrCity: [], //array for add City
      userData:{}
    };
  }
  getData = (userData)=>{
    this.setState({userData })
  }
      logOut =()=>{
        this.setState({userData:[] })
      }
  //adding the new City to the array
  addCity = (city) => {
    console.log(city)
  
    this.getWeather()
  };
  //take the search and add to the API
  changeCity = (e) => {
    this.setState({
      city: e.target.value,
    });
  };
  //axios
  getWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&APPID=6a13346d1efde82557485519c16fe96d`
      )
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data.main.humidity);
        this.setState({ ArrCity: [...this.state.ArrCity,response.data] });
        // this.setState({ tasks: response.data });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  deleteCard=()=>{
    this.setState({ArrCity:[] })
  }
  deleteSelectCard=(id)=>{
    console.log('ID',id)
    let newArray = [...this.state.ArrCity]
    const filterArry= newArray.filter(item => item.id !==id)
    this.setState({ArrCity:filterArry })
    console.log('array',filterArry)
  }

  render() { 
    console.log(this.state.userData.firstname)
    const newCity = this.state.ArrCity.map((city, i) => {
      return <Dashbard tasks={city} key={i} index={city.id} deleteSelectCard={this.deleteSelectCard} />;
    });
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar>
              <Navbar.Collapse>
                <Nav className="mr-auto">
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="Singup">
                    SingUp
                  </Nav.Link>
                  <Nav.Link as={Link} to="Singin">
                    Singin
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Contact">
                    Contact
                  </Nav.Link>
                </Nav>
                <p onClick={this.logOut}>Logout</p>
              </Navbar.Collapse>
            </Navbar>
            
            <p>{this.state.userData.firstname} {this.state.userData.lastname}</p>
    
          </header>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                city={this.state.city}
                addCity={this.addCity}
                deleteCard={this.deleteCard}
                chang={this.changeCity}
              />
            )}
          />
          <Route
            path="/Dashbard"
            render={(props) => <Dashbard {...props}
             tasks={this.state.tasks}   
              deleteSelectCard={this.deleteSelectCard}/>}
          />
          <Route exact
            path="/"
            render={()=>newCity  } 
            chang={this.changeCity}
          />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Singup"  
           render={(props) => <Singup {...props} getData={this.getData} />}/>
          <Route exact path="/Singin" 
          render={(props) => <Singin {...props} name={this.state.userData} />}/>
          
        </div>
      </Router>
    );
  }
}
export default App;
