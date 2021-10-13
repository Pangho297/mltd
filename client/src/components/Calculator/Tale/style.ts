import styled from 'styled-components';

interface CalculatorContainerProps {
  backColor: string;
}

export const Container = styled.div<CalculatorContainerProps>`
  width: 720px;
  display: flex;
  background-color: ${({ backColor }) => backColor};
`;
