import React from 'react';
import Header from './components/Header'
import Pokedex from './pages/Pokedex';
import Footer from './components/Footer';
import PokeDetails from './pages/PokeDetails'
import pokemons from './data';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/favorites">Favorite Pokemons</Link>
          </nav>
          <Switch>
            <Route
              path="/pokemons/:pokeId"
              render={(props) => <PokeDetails {...props} pokemons={pokemons} />}
            />
            <Route
              path="/"
              render={(props) => <Pokedex {...props} pokemons={pokemons} />}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
