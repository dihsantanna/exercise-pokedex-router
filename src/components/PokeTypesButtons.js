import React from 'react';
import Button from './Button';
import './css/pokeTypesButtons.css';

class PokeTypesButtons extends React.Component {

  typeButton(pokemons, props) {
    return pokemons.reduce((arrTypes, pokemon) => {
      if (!arrTypes.includes(pokemon.type)) {
        arrTypes.push(pokemon.type);
      }
      return arrTypes;
    }, [] )
      .map((type) => {
        return  <Button
          btnType='button'
          btnClass={`btn-${type.toLowerCase()} btn-type`}
          btnFunc={props.btnFunc}
          btnText={type}
          btnValue={type}
          key={type}
        />
      })
  }

  render() {
    const props = this.props;
    return (
      <div className="poke-type">
        {this.typeButton(props.pokemons, props)}
        <Button btnType='button' btnClass="btn-all btn-type" btnFunc={props.btnFunc} btnText='All' btnValue={''} key='All' />
      </div>
    )
  }
}

export default PokeTypesButtons;
