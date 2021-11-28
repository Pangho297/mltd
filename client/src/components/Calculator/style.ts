import styled from 'styled-components';

interface MultipleLive {
  isMultiple: string;
  position: string;
  baseColor?: string;
  darkColor?: string;
  lightColor?: string;
}

interface baseColorType {
  baseColor?: string;
  darkColor?: string;
  lightColor?: string;
}

export const Container = styled.div`
  width: 720px;
  display: flex;
  flex-direction: column;
  font-family: 'NEXON Lv2 Gothic';
`;

export const Header = styled.header<baseColorType>`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  background-color: ${({ baseColor }) => baseColor};
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  gap: 25px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
`;

export const ContentContainer = styled.div`
  width: 100%;
  margin: 10px 0px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;

export const Input = styled.input<baseColorType>`
  width: 320px;
  height: 35px;
  margin-top: 10px;
  padding: 0px 5px;
  border: none;
  border-bottom: 5px solid ${({ baseColor }) => baseColor};
  font-size: 20px;
  font-weight: 700;
  color: ${({ darkColor }) => darkColor};
  background-color: ${({ lightColor }) => lightColor};
  caret-color: ${({ baseColor }) => baseColor};
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const TourSelectContaienr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TourSelect = styled.select`
  width: 320px;
  height: 35px;
  padding: 0px 5px;
  border: none;
  border-bottom: 5px solid #ed90ba;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #e24e91;
  background-color: #fae2ed;
`;

export const CalcBtn = styled.button<baseColorType>`
  width: 320px;
  height: 50px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  background-color: ${({ baseColor }) => baseColor};
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
  background-color: ${({ isMultiple, baseColor, darkColor }) => (isMultiple === '1x' ? darkColor : baseColor)};
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
  background-color: ${({ isMultiple, baseColor, darkColor }) => (isMultiple === '2x' ? darkColor : baseColor)};
  cursor: pointer;
`;

export const TripleBtn = styled.button<MultipleLive>`
  width: 35px;
  height: 35px;
  position: absolute;
  bottom: 0px;
  right: ${({ position }) => position};
  border: none;
  font-size: 20px;
  color: #ffffff;
  background-color: ${({ isMultiple, baseColor, darkColor }) => (isMultiple === '3x' ? darkColor : baseColor)};
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
  background-color: ${({ isMultiple, baseColor, darkColor }) => (isMultiple === '4x' ? darkColor : baseColor)};
  cursor: pointer;
`;
