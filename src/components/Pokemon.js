import React from 'react';
import { Link } from 'react-router-dom'
import './css/pokemon.css';

class Pokemon extends React.Component {
  render() {
    const pokeData = this.props;

    return (
      <div className="poke-contain">

        <div className="poke-info">
          <span>{pokeData.name}</span>
          <span>{pokeData.type}</span>
          <span>Average Weight: {pokeData.weight} {pokeData.unity}</span>
          <span><Link to="/pokemons/">more infos...</Link></span>
        </div>

        <img className="image-poke" src={pokeData.src} alt={pokeData.alt}/>
          
      </div>
    )
  }
}

export default Pokemon;
