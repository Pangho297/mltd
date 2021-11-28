import { ChangeEvent, useState } from 'react';
import * as S from '../style';

import { inputsType } from 'types/calculatorInputType';

const Theater = () => {
  // 일반 라이브 횟수
  const [nomalLiveCount, setNomalLiveCount] = useState<number>(0);
  // 일반 라이브 2x 횟수
  const [multipleNomalLiveCount, setMultipleNomalLiveCount] = useState<number>(0);
  // 이벤트 라이브 횟수
  const [eventLiveCount, setEventLiveCount] = useState<number>(0);
  // 이벤트 라이브 2x 횟수
  const [doubleEventLiveCount, setDoubleEventLiveCount] = useState<number>(0);
  // 이벤트 라이브 4x 횟수
  const [quadEventLiveCount, setQuadEventLiveCount] = useState<number>(0);
  // 사용한 쥬엘
  const [usedJewel, setUsedJewel] = useState<number>(0);
  // 최종 이벤트 포인트
  const [resultPt, setResultPt] = useState<number>(0);
  // 일반 라이브 배수
  const [isNomalLiveMultiple, setIsNomarlLiveMultiple] = useState<string>('1x');
  // 이벤트 라이브 배수
  const [isEventLiveMultiple, setIsEventLiveMulitple] = useState<string>('1x');
  // 유저 입력값 (최대 스테미너, 목표 이벤트 포인트, 현재 이벤트 포인트, 현재 소지 재화)
  const [inputs, setInputs] = useState<inputsType>({
    maxStamina: '',
    goalPt: '',
    currentPt: '',
    currentCur: '',
  });
  const { maxStamina, goalPt, currentPt, currentCur } = inputs;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 일반 Live eventPoint 85점
  // 재화 있는지 체크
  // 이벤트 Live 재화 소모 180개, 획득 eventPoint 537점
  // 일반 Live, 이벤트 Live 횟수 카운트

  // (일반 Live 횟수 * 30) - 최대 스테미너 = 최대 스테미너가 모두 소모된 횟수
  // 최대 스테미너가 모두 소모된 횟수 * 50 = 쥬엘 사용량

  // 스테미너, 재화 소모량 * 2 ~ 4 = 이벤트 배수
  // 이벤트 배수 횟수 카운트

  const handleCalculating = () => {
    if (parseInt(currentPt) > parseInt(goalPt)) {
      alert('현재 이벤트 포인트가 목표 이벤트 포인트보다 높습니다');
      return;
    } else if (!maxStamina) {
      alert('최대 스테미너를 설정해주세요');
      return;
    } else if (!currentPt) {
      alert('현재 이벤트 포인트를 설정해주세요');
      return;
    } else if (!goalPt) {
      alert('목표 이벤트 포인트를 설정해주세요');
      return;
    } else if (!currentCur) {
      alert('현재 소지 재화를 설정해주세요');
      return;
    }

    let nomalLiveCount = 0;
    let eventLiveCount = 0;
    let usedJewel = 0;
    let eventPt = parseInt(currentPt);
    let eventCurrency = parseInt(currentCur);
    let stamina = parseInt(maxStamina);
    const FinalGoalPt = parseInt(goalPt);

    while (eventPt < FinalGoalPt) {
      if (stamina >= 30 && eventCurrency < 180) {
        eventPt += 85;
        eventCurrency += 85;
        stamina -= 30;
        nomalLiveCount++;
      }
      if (stamina < 30) {
        usedJewel += 50;
        stamina += parseInt(maxStamina);
      }

      if (eventCurrency >= 180) {
        eventPt += 537;
        eventCurrency -= 180;
        eventLiveCount++;
      }
    }
    setNomalLiveCount(nomalLiveCount);
    setMultipleNomalLiveCount(Math.floor(nomalLiveCount / 2));
    setEventLiveCount(eventLiveCount);
    setDoubleEventLiveCount(Math.floor(eventLiveCount / 2));
    setQuadEventLiveCount(Math.floor(eventLiveCount / 4));
    setUsedJewel(usedJewel);
    setResultPt(eventPt);
  };

  const handleNomalLiveMultiple = (multiple: string) => {
    if (nomalLiveCount === 0) {
      alert('아직 계산된 라이브 횟수가 없습니다.');
      return;
    } else if (multiple === '1x') {
      setIsNomarlLiveMultiple('1x');
    } else if (multiple === '2x') {
      setIsNomarlLiveMultiple('2x');
    }
  };

  const handleEventLiveMultiple = (multiple: string) => {
    if (eventLiveCount === 0) {
      alert('아직 계산된 라이브 횟수가 없습니다.');
      return;
    } else if (multiple === '1x') {
      setIsEventLiveMulitple('1x');
    } else if (multiple === '2x') {
      setIsEventLiveMulitple('2x');
    } else if (multiple === '4x') {
      setIsEventLiveMulitple('4x');
    }
  };

  return (
    <S.Container>
      <S.Header baseColor="#afa690">플레티넘 스타 시어터</S.Header>
      <S.Wrapper>
        <S.InnerContainer>
          <S.InputContainer>
            <S.ContentContainer>
              <S.Title>최대 스테미너</S.Title>
              <S.Input
                baseColor="#afa690"
                darkColor="#94886b"
                lightColor="#d0cbbe"
                type="text"
                name="maxStamina"
                value={maxStamina}
                onChange={handleChange}
              />
            </S.ContentContainer>
            <S.ContentContainer>
              <S.Title>목표 이벤트 포인트</S.Title>
              <S.Input
                baseColor="#afa690"
                darkColor="#94886b"
                lightColor="#d0cbbe"
                type="text"
                name="goalPt"
                value={goalPt}
                onChange={handleChange}
              />
            </S.ContentContainer>
          </S.InputContainer>
          <S.InputContainer>
            <S.ContentContainer>
              <S.Title>현재 이벤트 포인트</S.Title>
              <S.Input
                baseColor="#afa690"
                darkColor="#94886b"
                lightColor="#d0cbbe"
                type="text"
                name="currentPt"
                value={currentPt}
                onChange={handleChange}
              />
            </S.ContentContainer>
            <S.ContentContainer>
              <S.Title>현재 소지 재화</S.Title>
              <S.Input
                baseColor="#afa690"
                darkColor="#94886b"
                lightColor="#d0cbbe"
                type="text"
                name="currentCur"
                value={currentCur}
                onChange={handleChange}
              />
            </S.ContentContainer>
          </S.InputContainer>
        </S.InnerContainer>
        <S.CalcBtn baseColor="#afa690" type="button" onClick={handleCalculating}>
          <p>계산</p>
        </S.CalcBtn>
      </S.Wrapper>
      <S.ResultWrapper>
        <S.ResultSection>
          <S.ResultInputWrapper>
            <S.Title>일반 라이브 횟수</S.Title>
            <S.CountWrapper>
              <S.Input
                baseColor="#afa690"
                darkColor="#94886b"
                lightColor="#d0cbbe"
                readOnly
                type="text"
                value={`${isNomalLiveMultiple === '1x' ? nomalLiveCount : multipleNomalLiveCount}회`}
              />
              <S.nonMultipleBtn
                baseColor="#afa690"
                darkColor="#94886b"
                isMultiple={isNomalLiveMultiple}
                onClick={() => handleNomalLiveMultiple('1x')}
                position="35px"
              >
                1x
              </S.nonMultipleBtn>
              <S.DoubleBtn
                baseColor="#afa690"
                darkColor="#94886b"
                isMultiple={isNomalLiveMultiple}
                onClick={() => handleNomalLiveMultiple('2x')}
                position="0px"
              >
                2x
              </S.DoubleBtn>
            </S.CountWrapper>
          </S.ResultInputWrapper>
          <S.ResultInputWrapper>
            <S.Title>이벤트 라이브 횟수</S.Title>
            <S.CountWrapper>
              <S.Input
                baseColor="#afa690"
                darkColor="#94886b"
                lightColor="#d0cbbe"
                readOnly
                type="text"
                value={`${
                  isEventLiveMultiple === '1x'
                    ? eventLiveCount
                    : isEventLiveMultiple === '2x'
                    ? doubleEventLiveCount
                    : quadEventLiveCount
                }회`}
              />
              <S.nonMultipleBtn
                baseColor="#afa690"
                darkColor="#94886b"
                isMultiple={isEventLiveMultiple}
                onClick={() => handleEventLiveMultiple('1x')}
                position="70px"
              >
                1x
              </S.nonMultipleBtn>
              <S.DoubleBtn
                baseColor="#afa690"
                darkColor="#94886b"
                isMultiple={isEventLiveMultiple}
                onClick={() => handleEventLiveMultiple('2x')}
                position="35px"
              >
                2x
              </S.DoubleBtn>
              <S.QuadBtn
                baseColor="#afa690"
                darkColor="#94886b"
                isMultiple={isEventLiveMultiple}
                onClick={() => handleEventLiveMultiple('4x')}
                position="0px"
              >
                4x
              </S.QuadBtn>
            </S.CountWrapper>
          </S.ResultInputWrapper>
          <S.ResultInputWrapper>
            <S.Title>최종 이벤트 포인트</S.Title>
            <S.Input
              baseColor="#afa690"
              darkColor="#94886b"
              lightColor="#d0cbbe"
              readOnly
              type="text"
              value={`${resultPt}Pt`}
            />
          </S.ResultInputWrapper>
        </S.ResultSection>
        <S.ResultSection>
          <S.ResultInputWrapper>
            <S.Title>사용한 스테미너</S.Title>
            <S.Input
              baseColor="#afa690"
              darkColor="#94886b"
              lightColor="#d0cbbe"
              readOnly
              type="text"
              value={nomalLiveCount * 30}
            />
          </S.ResultInputWrapper>
          <S.ResultInputWrapper>
            <S.Title>사용한 이벤트 재화</S.Title>
            <S.Input
              baseColor="#afa690"
              darkColor="#94886b"
              lightColor="#d0cbbe"
              readOnly
              type="text"
              value={`${eventLiveCount * 180}개`}
            />
          </S.ResultInputWrapper>
          <S.ResultInputWrapper>
            <S.Title>사용한 쥬얼 개수</S.Title>
            <S.Input
              baseColor="#afa690"
              darkColor="#94886b"
              lightColor="#d0cbbe"
              readOnly
              type="text"
              value={`${usedJewel}개`}
            />
          </S.ResultInputWrapper>
        </S.ResultSection>
      </S.ResultWrapper>
    </S.Container>
  );
};

export default Theater;
