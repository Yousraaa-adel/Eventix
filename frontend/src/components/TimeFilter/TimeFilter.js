import PropTypes from 'prop-types';
import React from 'react';
import { useReducer } from 'react';
import Choices from '../Choices/Choices.js';
import './TimeFilter.css';

export const TimeFilter = ({ property1 }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || 'default',
  });

  return (
    <div className="time-filter">
      <Choices
        className="choices-instance"
        property1={state.property1 === 'variant-2' ? 'default' : 'selected'}
        text="This Week"
      />

      <Choices
        className="choices-instance"
        onClick={() => {
          dispatch('click');
        }}
        property1={state.property1 === 'variant-2' ? 'selected' : 'default'}
        text="This Month"
      />
    </div>
  );
};

function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action) {
    case 'click':
      return {
        ...state,
        property1: 'variant-2',
      };
  }

  return state;
}

TimeFilter.propTypes = {
  property1: PropTypes.oneOf(['variant-2', 'default']),
};
