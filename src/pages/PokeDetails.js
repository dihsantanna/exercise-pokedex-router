import React from 'react';
import Footer from '../components/Footer';

class PokeDetails extends React.Component {
  render() {
    const { pokemons, match: { params: pokeId } } = this.props;
    const {
      name,
      type,
      averageWeight: {
        value,
        measurementUnit,
      },
      foundAt,
      summary,
    } = pokemons.find((pokemon) => pokemon.id === pokeId);

    return (
      <div className="App">
        <section>
          <span>{name}</span>
          <span>{type}</span>
          <span>{`Average Weight: ${value} ${measurementUnit}`}</span>
          <p>{summary}</p>
          {foundAt.map((location) => {
            return (
              <figure className="location" key={location.location}>
                <span>{location.location}</span>
                <img src={location.map} alt={location.location}></img>
              </figure>
            )
          })}
        </section>
        <Footer />
      </div>
    );
  }
}

export default PokeDetails;
