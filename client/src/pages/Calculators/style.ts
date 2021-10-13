import styled from 'styled-components';

interface EventBtnProps {
  btnColor: string;
}

export const Container = styled.div`
  width: 720px;
  height: 885px;
  font-weight: 700;
  font-size: 24px;
`;

export const EventBtn = styled.button<EventBtnProps>`
  width: 144px;
  height: 50px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  background-color: ${({ btnColor }) => btnColor};
  cursor: pointer;
`;
