import React from 'react';
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import Footer from './components/Footer';
import pokemons from './data';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route
            path="/"
            render={(props) => (
              <Pokedex
                {...props}
                pokemons={pokemons}
              />)}
          />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
