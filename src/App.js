import React from 'react';
import Home from './pages/Home'
import pokemons from './data';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          render={(props) => <Home {...props} pokemons={pokemons} />}
        />
      </BrowserRouter>
    );
  }
}

export default App;
