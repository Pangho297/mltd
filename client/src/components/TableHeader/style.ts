import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'NEXON Lv2 Gothic';
`;

export const Title = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: #f2f2f2;
  background-color: #18206b;
`;

export const Time = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  color: #f2f2f2;
  background-color: #18206b;

  div {
    margin-right: 20px;
  }
`;

export const Image = styled.img`
  width: 720px;
`;

export const TableContainer = styled.div`
  display: flex;
  justify-content: space-around;
  div {
    width: 90px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background-color: #d9d9db;
  }
`;
