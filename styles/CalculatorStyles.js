import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  max-width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Result = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  text-align: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;