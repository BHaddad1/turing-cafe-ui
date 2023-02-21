import React, { Component } from 'react';
import './App.css';
import {fetchReservations } from '../apiCalls';
import Reservations from "../Reservations/Reservations";
import Form from '../Form/Form';
import { postReservation } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ""
    }
  }

  addReservation = (newRes) => {
    postReservation(newRes)
      .then(data => {
        fetchReservations()
        .then(data => this.setState({reservations: data}))
        .catch(err => this.setState({error: err}))
      })
      .catch(err => this.setState({error: err}))
  }

  componentDidMount() {
    fetchReservations()
      .then(data => this.setState({reservations: data}))
      .catch(err => this.setState({error: err}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form 
          addReservation={this.addReservation}
          />
        </div>
        <div className='resy-container'>
          <Reservations 
            reservations={this.state.reservations}
          />
        </div>
      </div>
    )
  }
}

export default App;
