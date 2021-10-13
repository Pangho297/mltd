import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  font-family: 'NEXON Lv2 Gohtic';
  background-color: #d9d9db;
  p {
    width: 90px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
  }
`;

export const ExpectContainer = styled.div`
  width: 90px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  div:nth-child(2) {
    color: #ea5b76;
  }
`;
