import PropTypes from 'prop-types';
import React from 'react';
import { useState, useReducer } from 'react';
import './Choices.css';

const Choices = ({ text = 'All', property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || 'default',
  });

  return (
    <div
      className={`choices ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch('mouse_leave');
      }}
      onMouseEnter={() => {
        dispatch('mouse_enter');
      }}
      onClick={() => {
        dispatch('click');
      }}
    >
      <div className="all">{text}</div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === 'default') {
    // eslint-disable-next-line default-case
    switch (action) {
      case 'mouse_enter':
        return {
          property1: 'hover',
        };
    }
  }

  if (state.property1 === 'hover') {
    // eslint-disable-next-line default-case
    switch (action) {
      case 'mouse_leave':
        return {
          property1: 'default',
        };

      case 'click':
        return {
          property1: 'selected',
        };
    }
  }

  if (state.property1 === 'selected') {
    // eslint-disable-next-line default-case
    switch (action) {
      case 'click':
        return {
          property1: 'default',
        };
    }
  }

  return state;
}

Choices.propTypes = {
  text: PropTypes.string,
  property1: PropTypes.oneOf(['hover', 'selected', 'default']),
};

export default Choices;
