import styled from "styled-components";

export const Container = styled.div`
  width: 720px;
  display: flex;
  flex-direction: column;
  font-family: "NEXON Lv2 Gothic";
`;

export const Header = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  background-color: #afa690;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  gap: 25px;
`;

export const InputContainer = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin: 20px 0px;
`;

export const Input = styled.input`
  width: 320px;
  height: 35px;
  margin-top: 10px;
  padding: 0px 5px;
  border: none;
  border-bottom: 5px solid #afa690;
  font-size: 20px;
  font-weight: 700;
  color: #94886b;
  background-color: #d0cbbe;
  caret-color: #afa690;
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:focus {
    border-bottom: 5px solid #afa690;
  }
`;

export const CalcBtn = styled.button`
  width: 360px;
  height: 50px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  background-color: #afa690;
  cursor: pointer;
`;
