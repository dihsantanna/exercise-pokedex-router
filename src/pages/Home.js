import React from 'react';
import Pokedex from '../components/Pokedex';

class Home extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <Pokedex pokemons={pokemons} />
    );
  }
}

export default Home;