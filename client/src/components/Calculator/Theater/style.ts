import styled from 'styled-components';

interface MultipleLive {
  isMultiple: string;
  position: string;
}

export const Container = styled.div`
  width: 720px;
  display: flex;
  flex-direction: column;
  font-family: 'NEXON Lv2 Gothic';
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
  color: #ffffff;
  background-color: #afa690;
  cursor: pointer;
`;

export const ResultWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1 0 0;
  margin-top: 30px;
`;

export const ResultSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ResultInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CountWrapper = styled.div`
  position: relative;
`;

export const nonMultipleBtn = styled.button<MultipleLive>`
  width: 35px;
  height: 35px;
  position: absolute;
  bottom: 0px;
  right: ${({ position }) => position};
  border: none;
  font-size: 20px;
  color: #ffffff;
  background-color: ${({ isMultiple }) => (isMultiple === '1x' ? '#94886b' : '#afa690')};
  cursor: pointer;
`;

export const DoubleBtn = styled.button<MultipleLive>`
  width: 35px;
  height: 35px;
  position: absolute;
  bottom: 0px;
  right: ${({ position }) => position};
  border: none;
  font-size: 20px;
  color: #ffffff;
  background-color: ${({ isMultiple }) => (isMultiple === '2x' ? '#94886b' : '#afa690')};
  cursor: pointer;
`;

export const QuadBtn = styled.button<MultipleLive>`
  width: 35px;
  height: 35px;
  position: absolute;
  bottom: 0px;
  right: ${({ position }) => position};
  border: none;
  font-size: 20px;
  color: #ffffff;
  background-color: ${({ isMultiple }) => (isMultiple === '4x' ? '#94886b' : '#afa690')};
  cursor: pointer;
`;
