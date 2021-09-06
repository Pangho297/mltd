import { gql, useQuery } from '@apollo/client';

import * as S from './style';
import { EventType, RankingType } from './type';

const GET_EVENTID = gql`
  query {
    eventid
  }
`;

const GET_EVENT_POINT = gql`
  query data($id: Int!, $rank: Int!) {
    data(id: $id, rank: $rank) {
      rank
      data {
        score
        summaryTime
      }
    }
  }
`;

function Main() {
  const id = useQuery<EventType>(GET_EVENTID).data?.eventid;
  const { data } = useQuery<RankingType>(GET_EVENT_POINT, {
    variables: { id, rank: 100 },
  });

  console.log(data?.data?.rank, data?.data?.data);

  return (
    <S.Container>
      <div>{data?.data?.rank}</div>
      <div>
        {data?.data?.data.map((el) => (
          <div>{el.score}</div>
        ))}
      </div>
    </S.Container>
  );
}

export default Main;