import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const {
      disabled,
      btnValue,
      btnFunc,
      btnClass,
      btnType,
      btnText,
    } = this.props;
    return (
      <button
        type={btnType}
        className={btnClass} 
        onClick={btnFunc}
        value={btnValue}
        disabled={disabled}
      >
        {btnText}
      </button>
    )
  }
}

Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  btnClass: PropTypes.string,
  btnFunc: PropTypes.func,
  btnValue: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  btnClass: '',
  btnFunc: '',
  btnValue: '',
  disabled: false,
}

export default Button;