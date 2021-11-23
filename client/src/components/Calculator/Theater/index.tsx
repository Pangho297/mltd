import { ChangeEvent, useState } from "react";
import * as S from "./style";

interface inputsType {
  stamina: string;
  goalPt: string;
  currentPt: string;
  currentCur: string;
}

const Theater = () => {
  const [nomalLiveCount, setNomalLiveCount] = useState<number>(0);
  const [resultPt, setResultPt] = useState<string>("");
  const [inputs, setInputs] = useState<inputsType>({
    stamina: "",
    goalPt: "",
    currentPt: "",
    currentCur: "",
  });
  const { stamina, goalPt, currentPt, currentCur } = inputs;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleCalculating = () => {
    console.log(currentPt, "현재 이벤트 포인트");
    console.log(goalPt, "목표 이벤트 포인트");
    if (parseInt(currentPt) > parseInt(goalPt)) {
      alert("현재 이벤트 포인트가 목표 이벤트 포인트보다 높습니다");
      return;
    } else if (!goalPt) {
      alert("목표 이벤트 포인트를 설정해주세요");
      return;
    } else if (!currentPt) {
      alert("현재 이벤트 포인트를 설정해주세요");
      return;
    }

    let nomalLiveCount = 0;
    let whileEventPt = parseInt(currentPt);
    const whileGoalPt = parseInt(goalPt);
    while (whileEventPt < whileGoalPt) {
      whileEventPt += 85;
      nomalLiveCount++;
    }

    console.log(nomalLiveCount, "Count");
    setNomalLiveCount(nomalLiveCount);
    setResultPt(String(whileEventPt));
  };

  console.log(resultPt, "resultPt");
  console.log(nomalLiveCount, "liveCount");

  return (
    <S.Container>
      <S.Header>플레티넘 스타 시어터</S.Header>
      <S.Wrapper>
        <S.InnerContainer>
          <S.InputContainer>
            <S.ContentContainer>
              <div>최대 스테미너</div>
              <S.Input
                type="text"
                name="stamina"
                value={stamina}
                onChange={handleChange}
              />
            </S.ContentContainer>
            <S.ContentContainer>
              <div>목표 이벤트 포인트</div>
              <S.Input
                type="text"
                name="goalPt"
                value={goalPt}
                onChange={handleChange}
              />
            </S.ContentContainer>
          </S.InputContainer>
          <S.InputContainer>
            <S.ContentContainer>
              <div>현재 이벤트 포인트</div>
              <S.Input
                type="text"
                name="currentPt"
                value={currentPt}
                onChange={handleChange}
              />
            </S.ContentContainer>
            <S.ContentContainer>
              <div>현재 소지 재화</div>
              <S.Input
                type="text"
                name="currentCur"
                value={currentCur}
                onChange={handleChange}
              />
            </S.ContentContainer>
          </S.InputContainer>
        </S.InnerContainer>
        <S.CalcBtn type="button" onClick={handleCalculating}>
          <p>계산</p>
        </S.CalcBtn>
      </S.Wrapper>
    </S.Container>
  );
};

export default Theater;
