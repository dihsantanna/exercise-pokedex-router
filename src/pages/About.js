import React from 'react';
import './css/about.css';

class About extends React.Component {
  render() {
    return (
      <section className="about">

        <h2>About Pokedex</h2>

        <p>
          This application simulates a Pokedex.
          Pokedex is a high-tech portable encyclopedia that Pokémon trainers carry to record all the different species of Pokémon that are encountered during their journey as a trainer.
          <br />
          Use our filter to find the Pokémon by type, and find various information about the Pokémon in "more info...".
        </p>

        <img src="http://1.bp.blogspot.com/-1tSyWmNGB-Y/VPNtwgCnTWI/AAAAAAAAAZQ/ERe9_UB0JjY/s1600/Gen_I_Pokedex.png" />

      </section>
    );
  }
}

export default About;
