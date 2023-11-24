import React from 'react';
import { Result } from '../styles/CalculatorStyles';

const History = ({ history }) => {
  return (
    <div>
      <Result>History:</Result>
      <ul>
        {history.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;