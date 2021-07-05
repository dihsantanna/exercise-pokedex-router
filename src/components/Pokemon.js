import React from 'react';
import { Link } from 'react-router-dom'
import './css/pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {
      id,
      name,
      type,
      weight,
      unity,
      src,
      alt,
    } = this.props;

    return (
      <div className="poke-contain">

        <div className="poke-info">
          <span>{name}</span>
          <span>{type}</span>
          <span>Average Weight: {weight} {unity}</span>
          <span><Link to={`/pokemons/${id}`}>more infos...</Link></span>
        </div>

        <img className="image-poke" src={src} alt={alt}/>
          
      </div>
    )
  }
}

export default Pokemon;
