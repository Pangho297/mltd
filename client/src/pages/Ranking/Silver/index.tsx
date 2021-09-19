import { useQuery } from '@apollo/client';

import { GET_EVENT, GET_EVENT_BORDER } from 'query';
import { EventType, BorderType } from 'types/eventType';
import { RankProps } from 'types/rankProps';

const Silver = ({ rank }: RankProps) => {
  const event = useQuery<EventType>(GET_EVENT).data?.event;
  const { data } = useQuery<BorderType>(GET_EVENT_BORDER, {
    variables: { id: event?.id, rank: rank },
  });
  const resData = data?.data.data;

  return (
    <div style={{ display: 'flex' }}>
      {resData?.length !== 0 && <p>{data?.data?.rank}</p>}
      {resData?.map((el) => <p key={el.score}>{el.score}</p>).slice(0, 1)}
      {resData?.map((el) => <p key={el.score}>{el.score}</p>).slice(41, 42)}
      {resData?.map((el) => <p key={el.score}>{el.score}</p>).slice(42, 43)}
      {resData?.map((el) => <p key={el.score}>{el.score}</p>).slice(-1)}
    </div>
  );
};

export default Silver;
