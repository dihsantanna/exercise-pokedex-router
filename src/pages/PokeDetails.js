import React from 'react';
import './css/pokeDetails.css';

class PokeDetails extends React.Component {
  render() {
    const { pokemons, match: { params: pokeId } } = this.props;
    const {
      name,
      type,
      image,
      averageWeight: {
        value,
        measurementUnit,
      },
      foundAt,
      summary,
    } = pokemons.find((pokemon) => pokemon.id === Number(pokeId.pokeId));

    return (
      <section className="poke-details">
        <div className="poke-contain">

          <div className="poke-info">
            <span>{name}</span>
            <span>{type}</span>
            <span>Average Weight: {value} {measurementUnit}</span>
          </div>

          <img className="image-poke" src={image} alt={name} />

        </div>

        <div className="summary">

          <h2>Summary</h2>
          <p>{summary}</p>

        </div>

        <div className="locations">
          <h2>Game Locations of {name}</h2>

          {foundAt.map((location) => {
            return (
              <figure className="location" key={location.location}>
                <img src={location.map} alt={location.location}></img>
                <p>{location.location}</p>
              </figure>
            )
          })}
        </div>

      </section>
    );
  }
}

export default PokeDetails;
