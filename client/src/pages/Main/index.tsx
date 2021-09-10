import { useQuery } from '@apollo/client';

import * as S from './style';
import { EventType, BorderType } from './type';
import { GET_EVENT, GET_EVENT_BORDER } from './query';

function Main() {
  const event = useQuery<EventType>(GET_EVENT).data?.event;
  const { data } = useQuery<BorderType>(GET_EVENT_BORDER, {
    variables: { id: event?.id, rank: 2500 },
  });
  const resData = data?.data?.data;

  return (
    <S.Container>
      {data && (
        <>
          {resData?.length !== 0 && <div>{data?.data?.rank}</div>}
          <div>
            {resData?.map((el) => (
              <div key={el.score}>{el.score}</div>
            ))}
          </div>
        </>
      )}
      <div>PST 이벤트 기간이 아닙니다.</div>
    </S.Container>
  );
}

export default Main;
