import { useQuery } from '@apollo/client';

import TableHeader from '../../components/TableHeader';
import TopPlatinum from '../Ranking/TopPlatinum';
import Platinum from '../Ranking/Platinum';
import Gold from '../Ranking/Gold';
import Silver from '../Ranking/Silver';
import Bronze from '../Ranking/Bronze';
import UnRank from '../Ranking/UnRank';

import * as S from './style';
import { EventType, BorderType } from 'types/eventType';
import { GET_EVENT, GET_EVENT_BORDER } from 'query';

function Main() {
  const event = useQuery<EventType>(GET_EVENT).data?.event;
  const { data } = useQuery<BorderType>(GET_EVENT_BORDER, {
    variables: { id: event?.id, rank: 1 },
  });

  return (
    <S.Container>
      {data?.data ? (
        <div>
          <TableHeader />
          <TopPlatinum rank={100} />
          <Platinum rank={2500} />
          <Gold rank={5000} />
          <Silver rank={10000} />
          <Bronze rank={25000} />
          <UnRank rank={50000} />
        </div>
      ) : (
        <div>PST 이벤트 기간이 아닙니다.</div>
      )}
    </S.Container>
  );
}

export default Main;
