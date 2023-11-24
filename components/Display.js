import React from 'react';
import { Result } from '../styles/CalculatorStyles';

const Display = ({ expression }) => {
  return (
    <Result>
      {expression}
    </Result>
  );
};

export default Display;