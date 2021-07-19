import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
import './css/nextButton.css';

class NextButton extends React.Component {
  render() {
    const {
      btnType,
      btnFunc,
      disabled,
    }= this.props;
    return (
        <Button
          btnType={btnType}
          btnClass={'btn-next'}
          btnFunc={btnFunc}
          btnText={'Next Pokemon'}
          disabled={disabled}
        />
    )
  }
}

NextButton.propTypes = {
  btnType: PropTypes.string.isRequired,
  btnFunc: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default NextButton;