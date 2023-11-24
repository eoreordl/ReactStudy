import React from 'react';
import { Button as StyledButton } from '../styles/CalculatorStyles';
import { useCalculatorStore } from '../store/state';

const Button = ({ label }) => {
  const { handleButtonClick } = useCalculatorStore();

  return (
    <StyledButton onClick={() => handleButtonClick(label)}>
      {label}
    </StyledButton>
  );
};

export default Button;