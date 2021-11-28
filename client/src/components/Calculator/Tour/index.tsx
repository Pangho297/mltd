import { ChangeEvent, useState } from 'react';

import * as S from '../style';
import { inputsType } from 'types/calculatorInputType';

const Tour = () => {
  // 일반 라이브 횟수
  const [nomalLiveCount, setNomalLiveCount] = useState<number>(0);
  // 일반 라이브 2x 횟수
  const [multipleNomalLiveCount, setMultipleNomalLiveCount] = useState<number>(0);
  // 이벤트 라이브 횟수
  const [eventLiveCount, setEventLiveCount] = useState<number>(0);
  // 이벤트 라이브 2x 횟수
  const [doubleEventLiveCount, setDoubleEventLiveCount] = useState<number>(0);
  // 이벤트 라이브 3x 횟수
  const [tripleEventLiveCount, setTripleEventLiveCount] = useState<number>(0);
  // 사용한 쥬엘
  const [usedJewel, setUsedJewel] = useState<number>(0);
  // 최종 이벤트 포인트
  const [resultPt, setResultPt] = useState<number>(0);
  // 이벤트 배수
  const [tourEventMultiple, setTourEventMultiple] = useState<string>('x5.0');
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

  const handleDropdown = (e: ChangeEvent<HTMLSelectElement>) => {
    setTourEventMultiple(e.target.value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

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

    const formatTourMultiple = (multiple: string) => {
      switch (multiple) {
        case 'x4.0':
          return 4;
        case 'x4.5':
          return 4.5;
        case 'x5.0':
          return 5;
      }
    };

    let nomalLiveCount = 0;
    let eventLiveCount = 0;
    let usedJewel = 0;
    let tourProgress = 0;
    let eventPt = parseInt(currentPt);
    let eventCurrency = parseInt(currentCur);
    let stamina = parseInt(maxStamina);
    const TourMultiple = formatTourMultiple(tourEventMultiple) || 5;
    const FinalGoalPt = parseInt(goalPt);

    while (eventPt < FinalGoalPt) {
      if (stamina >= 30 && eventCurrency === 0) {
        eventPt += 140;
        tourProgress += 6;
        stamina -= 30;
        nomalLiveCount++;
      }
      if (stamina < 30) {
        usedJewel += 50;
        stamina += parseInt(maxStamina);
      }
      if (tourProgress > 20) {
        tourProgress -= 20;
        eventCurrency += 1;
      }
      if (eventCurrency > 0) {
        eventPt = eventPt + 144 * TourMultiple;
        eventCurrency -= 1;
        eventLiveCount++;
      }
    }

    setNomalLiveCount(nomalLiveCount);
    setMultipleNomalLiveCount(Math.floor(nomalLiveCount / 2));
    setEventLiveCount(eventLiveCount);
    setDoubleEventLiveCount(Math.floor(eventLiveCount / 2));
    setTripleEventLiveCount(Math.floor(eventLiveCount / 3));
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
    } else if (multiple === '3x') {
      setIsEventLiveMulitple('3x');
    }
  };

  return (
    <S.Container>
      <S.Header baseColor="#ed90ba">플레티넘 스타 투어</S.Header>
      <S.Wrapper>
        <S.InnerContainer>
          <S.InputContainer>
            <S.ContentContainer>
              <S.Title>최대 스테미너</S.Title>
              <S.Input
                baseColor="#ed90ba"
                darkColor="#e24e91"
                lightColor="#fae2ed"
                type="text"
                name="maxStamina"
                value={maxStamina}
                onChange={handleChange}
              />
            </S.ContentContainer>
            <S.ContentContainer>
              <S.Title>목표 이벤트 포인트</S.Title>
              <S.Input
                baseColor="#ed90ba"
                darkColor="#e24e91"
                lightColor="#fae2ed"
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
                baseColor="#ed90ba"
                darkColor="#e24e91"
                lightColor="#fae2ed"
                type="text"
                name="currentPt"
                value={currentPt}
                onChange={handleChange}
              />
            </S.ContentContainer>
            <S.ContentContainer>
              <S.Title>현재 소지 재화</S.Title>
              <S.Input
                baseColor="#ed90ba"
                darkColor="#e24e91"
                lightColor="#fae2ed"
                type="text"
                name="currentCur"
                value={currentCur}
                onChange={handleChange}
              />
            </S.ContentContainer>
          </S.InputContainer>
          <S.InputContainer>
            <S.TourSelectContaienr>
              <S.Title>이벤트 곡 배수</S.Title>
              <S.TourSelect defaultValue="x5.0" onChange={handleDropdown}>
                <option value="x4.0">x4.0</option>
                <option value="x4.5">x4.5</option>
                <option value="x5.0">x5.0</option>
              </S.TourSelect>
            </S.TourSelectContaienr>
          </S.InputContainer>
        </S.InnerContainer>
        <S.CalcBtn baseColor="#ed90ba" type="button" onClick={handleCalculating}>
          <p>계산</p>
        </S.CalcBtn>
      </S.Wrapper>
      <S.ResultWrapper>
        <S.ResultSection>
          <S.ResultInputWrapper>
            <S.CountWrapper>
              <S.Title>일반 라이브 횟수</S.Title>
              <S.Input
                readOnly
                baseColor="#ed90ba"
                darkColor="#e24e91"
                lightColor="#fae2ed"
                value={`${isNomalLiveMultiple === '1x' ? nomalLiveCount : multipleNomalLiveCount}회`}
              />
              <S.nonMultipleBtn
                baseColor="#ed90ba"
                darkColor="#e24e91"
                isMultiple={isNomalLiveMultiple}
                position="35px"
                onClick={() => handleNomalLiveMultiple('1x')}
              >
                1x
              </S.nonMultipleBtn>
              <S.DoubleBtn
                baseColor="#ed90ba"
                darkColor="#e24e91"
                isMultiple={isNomalLiveMultiple}
                position="0px"
                onClick={() => handleNomalLiveMultiple('2x')}
              >
                2x
              </S.DoubleBtn>
            </S.CountWrapper>
          </S.ResultInputWrapper>
          <S.ResultInputWrapper>
            <S.CountWrapper>
              <S.Title>이벤트 라이브 횟수</S.Title>
              <S.Input
                readOnly
                baseColor="#ed90ba"
                darkColor="#e24e91"
                lightColor="#fae2ed"
                value={`${
                  isEventLiveMultiple === '1x'
                    ? eventLiveCount
                    : isEventLiveMultiple === '2x'
                    ? doubleEventLiveCount
                    : tripleEventLiveCount
                }회`}
              />
              <S.nonMultipleBtn
                baseColor="#ed90ba"
                darkColor="#e24e91"
                isMultiple={isEventLiveMultiple}
                position="70px"
                onClick={() => handleEventLiveMultiple('1x')}
              >
                1x
              </S.nonMultipleBtn>
              <S.DoubleBtn
                baseColor="#ed90ba"
                darkColor="#e24e91"
                isMultiple={isEventLiveMultiple}
                position="35px"
                onClick={() => handleEventLiveMultiple('2x')}
              >
                2x
              </S.DoubleBtn>
              <S.TripleBtn
                baseColor="#ed90ba"
                darkColor="#e24e91"
                isMultiple={isEventLiveMultiple}
                position="0px"
                onClick={() => handleEventLiveMultiple('3x')}
              >
                3x
              </S.TripleBtn>
            </S.CountWrapper>
          </S.ResultInputWrapper>
          <S.ResultInputWrapper>
            <S.Title>최종 이벤트 포인트</S.Title>
            <S.Input readOnly baseColor="#ed90ba" darkColor="#e24e91" lightColor="#fae2ed" value={`${resultPt}Pt`} />
          </S.ResultInputWrapper>
        </S.ResultSection>
        <S.ResultSection>
          <S.ResultInputWrapper>
            <S.Title>사용한 스테미너</S.Title>
            <S.Input
              readOnly
              baseColor="#ed90ba"
              darkColor="#e24e91"
              lightColor="#fae2ed"
              value={nomalLiveCount * 30}
            />
          </S.ResultInputWrapper>
          <S.ResultInputWrapper>
            <S.Title>사용한 이벤트 재화</S.Title>
            <S.Input
              readOnly
              baseColor="#ed90ba"
              darkColor="#e24e91"
              lightColor="#fae2ed"
              value={`${eventLiveCount}개`}
            />
          </S.ResultInputWrapper>
          <S.ResultInputWrapper>
            <S.Title>사용한 쥬엘</S.Title>
            <S.Input readOnly baseColor="#ed90ba" darkColor="#e24e91" lightColor="#fae2ed" value={`${usedJewel}개`} />
          </S.ResultInputWrapper>
        </S.ResultSection>
      </S.ResultWrapper>
    </S.Container>
  );
};

export default Tour;
