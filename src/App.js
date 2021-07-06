import React from 'react';
import Header from './components/Header'
import Home from './pages/Home';
import Footer from './components/Footer';
import PokeDetails from './pages/PokeDetails'
import pokemons from './data';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route
              path="/pokemons/:pokeId"
              render={(props) => <PokeDetails {...props} pokemons={pokemons} />}
            />
            <Route
              path="/"
              render={(props) => <Home {...props} pokemons={pokemons} />}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
