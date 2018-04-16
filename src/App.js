import React, { Component } from 'react';

import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Wheater from "./components/Wheater";
const API_KEY ="e459a22d733ed57f5c417e123b3b3c56";

class App extends Component {
state = {
  temperature:undefined,
  country:undefined,
  city : undefined,
  description : undefined,
  humidity : undefined,
  visibility: undefined,
  errors: undefined
}

  getWheater =  async (e) => {
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();

    if(city && country){
  console.log(data);
      this.setState({
        temperature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        visibility: data.visibility,
        description : data.weather[0].description,
        errors : ""
      });
    }
    else{
      this.setState({
        temperature:undefined,
        country:undefined,
        city : undefined,
        description : undefined,
        humidity : undefined,
        visibility: undefined,
        errors: "invalid entry"
      });
    }
  }
  render() {
    return (
      <div className="main">
      <div className="row">
        <div className="container bg-primary col-lg-5 ">
          <Titles />
          </div>
          <div className="container bg-primary col-lg-7 ">

          <Form getWheater={this.getWheater}/>
          <Wheater
          temperature = {this.state.temperature}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          visibility = {this.state.visibility}
          description = {this.state.description}
          errors ={this.state.errors}
          />
      </div>
        </div>
      </div>
    );
  }
}

export default App;
