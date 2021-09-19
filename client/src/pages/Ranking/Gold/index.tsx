import { useQuery } from '@apollo/client';

import * as S from './style';
import { GET_EVENT, GET_EVENT_BORDER } from 'query';
import { EventType, BorderType } from 'types/eventType';
import { RankProps } from 'types/rankProps';

const Gold = ({ rank }: RankProps) => {
  const event = useQuery<EventType>(GET_EVENT).data?.event;
  const { data } = useQuery<BorderType>(GET_EVENT_BORDER, {
    variables: { id: event?.id, rank: rank },
  });
  const resData = data?.data.data;
  const currentScore = resData?.slice(-1).map((el) => el.score)[0];
  const before30m = resData?.slice(42, 43).map((el) => el.score)[0];
  const before1h = resData?.slice(41, 42).map((el) => el.score)[0];
  const before24h = resData?.slice(0, 1).map((el) => el.score)[0];

  const expectScore = (score: number | undefined) => {
    if (currentScore && score) {
      return Math.abs(score - currentScore) + currentScore;
    }
  };

  const changeScore = (score: number | undefined) => {
    if (currentScore && score) {
      return Math.abs(score - currentScore);
    }
  };

  return (
    <S.Container>
      {resData?.length !== 0 && <p>{data?.data?.rank}</p>}
      {resData?.map((el) => <p key={el.score}>{el.score}</p>).slice(0, 1)}
      {resData?.map((el) => <p key={el.score}>{el.score}</p>).slice(41, 42)}
      {resData?.map((el) => <p key={el.score}>{el.score}</p>).slice(42, 43)}
      {resData?.map((el) => <p key={el.score}>{el.score}</p>).slice(-1)}
      <S.ExpectContainer>
        <div>{expectScore(before30m)}</div>
        <div>+{changeScore(before30m)}</div>
      </S.ExpectContainer>
      <S.ExpectContainer>
        <div>{expectScore(before1h)}</div>
        <div>+{changeScore(before1h)}</div>
      </S.ExpectContainer>
      <S.ExpectContainer>
        <div>{expectScore(before24h)}</div>
        <div>+{changeScore(before24h)}</div>
      </S.ExpectContainer>
    </S.Container>
  );
};

export default Gold;
