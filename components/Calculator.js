import React from 'react';
import Button from './Button';
import Display from './Display';
import History from './History';
import { CalculatorContainer } from '../styles/CalculatorStyles';
import { useCalculatorStore } from '../store/state';

const Calculator = () => {
  const { expression, history, handleButtonClick } = useCalculatorStore();

  const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    '.', '0', '=', '/',
    'C',
  ];

  return (
    <div>
      <CalculatorContainer>
        {buttons.map((label) => (
          <Button key={label} label={label} />
        ))}
      </CalculatorContainer>
      <Display expression={expression} />
      <History history={history} />
    </div>
  );
};

export default Calculator;