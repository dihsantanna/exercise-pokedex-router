import React from 'react';
import Header from '../components/Header';
import Pokedex from '../components/Pokedex';
import Footer from '../components/Footer';

class Home extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="App">
          <Header />
          <Pokedex pokemons={pokemons} />
          <Footer />
        </div>
    );
  }
}

export default Home;