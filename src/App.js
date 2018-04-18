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
            <div className="App">
              <div className="container my-5">
                <div className="row">
                  <div className="col-md-6 push-md-3 col-xl-4 push-xl-4 card-block">
                    <div className="d-flex justify-content-between">
                      <div className="d-inline-block">
                        <h3> New york, NY </h3>
                        <p> Fri Sep 29 7:41 </p>
                        <p> Clear </p>
                      </div>
                      <div className="d-inline-block btn-group btn-group-sm" data-toggle="buttons">
                        <label id="F" className="btn btn-primary active">
                          <input type="radio" name="options"></input>
                          &deg; F
                        </label>
                        <label id="C" className="btn btn-primary">
                          <input type="radio" name="options"></input>
                          &deg; C
                        </label>
                      </div>
                      <div className="row mt-2">
                        <div className="col-4 col-md-3">
                          <img className="img-fluid" src="http://icons-ak.wxug.com/i/c/k/partlycloudy.gif" alt="weather icon" />
                        </div>
                        <div className ="col-4 colmd-3">
                          <h1 className="big-font"> 76<span className="units">&deg; F</span> </h1>
                        </div>
                      </div>

                    </div>
                    <form className="form-inline mt-4 justify-content-around">
                      <input className="form-control" type="text" placeholder="city state"></input>
                      <button type="submit" className="btn btn-primary round">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

      // <div className="main">
      //   <div className="row">
      //       <div className="container bg-primary col-lg-5 ">
      //         <Titles />
      //       </div>
      //         <div className="container bg-primary col-lg-7 ">
      //             <div className="formgroup">
      //                 <Form getWheater={this.getWheater}/>
      //                 <Wheater
      //                 temperature = {this.state.temperature}
      //                 city = {this.state.city}
      //                 country = {this.state.country}
      //                 humidity = {this.state.humidity}
      //                 visibility = {this.state.visibility}
      //                 description = {this.state.description}
      //                 errors ={this.state.errors}
      //                 />
      //             </div>
      //         </div>
      //     </div>
      // </div>
    );
  }
}

export default App;
