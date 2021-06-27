import React, { Component } from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
 const arrayTask = ["Acordar", "Exercícios físico", "Meditar", "ler"]
 class App extends Component {
  render() {
    return (
      <ul>{arrayTask.map(arrayTask => Task(arrayTask)) }</ul>
    );
  }
}

export default App;
