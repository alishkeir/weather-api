import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import Header from './components/Header.js';
import Main from './components/Main.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      API_KEY: "496def687e4a0339c5cfccac2f0a89ff",
      value: "",
      buttonClicked: false,
      weathers: [],
      error: false
    };
    this.handler = this.handler.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {

    this.setState({
      value: event.target.value
    })
  }

  handler(e){
e.preventDefault();
  /*   this.setState({
      buttonClicked: true,
    }); */


    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&cnt=8&units=metric&appid=${this.state.API_KEY}`)
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json()
        }
        else {
          throw Error(response.statusText);
        }
      })
      .then(data => {
        this.setState({
          error: false,
          buttonClicked: true,
          weathers: data

        })

      })

      .catch(error => {
        this.setState({
          buttonClicked: true,
          error: true,
        })

      })

  }



  render() {
    return (
      <div class="main-div">
        <Header value={this.state.value} handleChange={this.handleChange} handler={this.handler}></Header>
        <Main buttonClicked={this.state.buttonClicked} weathers={this.state.weathers.list} error={this.state.error}></Main> 
      </div>

    );
  }
}

export default App;
