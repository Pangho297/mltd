import * as S from './style';

const Theater = () => {
  return (
    <S.Container>
      <S.Header>플레티넘 스타 시어터</S.Header>
      <S.Wrapper>
        <S.InnerContainer>
          <S.InputContainer>
            <S.ContentContainer>
              <div>최대 스테미너</div>
              <S.Input type='number' />
            </S.ContentContainer>
            <S.ContentContainer>
              <div>목표 이벤트 포인트</div>
              <S.Input type='number' />
            </S.ContentContainer>
          </S.InputContainer>
          <S.InputContainer>
            <S.ContentContainer>
              <div>현제 이벤트 포인트</div>
              <S.Input type='number' />
            </S.ContentContainer>
            <S.ContentContainer>
              <div>현제 소지 재화</div>
              <S.Input type='number' />
            </S.ContentContainer>
          </S.InputContainer>
        </S.InnerContainer>
        <S.CalcBtn>
          <p>계산</p>
        </S.CalcBtn>
      </S.Wrapper>
    </S.Container>
  );
};

export default Theater;
