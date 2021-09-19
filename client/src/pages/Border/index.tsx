import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import TableHeader from '../../components/TableHeader';
import TopPlatinum from '../../components/Ranking/TopPlatinum';
import Platinum from '../../components/Ranking/Platinum';
import Gold from '../../components/Ranking/Gold';
import Silver from '../../components/Ranking/Silver';
import Bronze from '../../components/Ranking/Bronze';
import UnRank from '../../components/Ranking/UnRank';

import * as S from './style';
import { EventType } from 'types/eventType';
import { GET_EVENT } from 'query';

const Border = () => {
  const [isPst, setIsPst] = useState<boolean>(true);
  const { loading, data } = useQuery<EventType>(GET_EVENT);
  const event = data?.event;

  const isPST = () => {
    if (event?.type === 9 || event?.type === 14) {
      setIsPst(false);
    } else {
      setIsPst(true);
    }
  };

  useEffect(() => {
    isPST();
  });

  return (
    <>
      {isPst ? (
        loading ? (
          <S.Loding>Loading...</S.Loding>
        ) : (
          <S.Table>
            <TableHeader rank={1} eventId={event?.id} title={event?.name} />
            <TopPlatinum rank={100} eventId={event?.id} />
            <Platinum rank={2500} eventId={event?.id} />
            <Gold rank={5000} eventId={event?.id} />
            <Silver rank={10000} eventId={event?.id} />
            <Bronze rank={25000} eventId={event?.id} />
            <UnRank rank={50000} eventId={event?.id} />
          </S.Table>
        )
      ) : (
        <S.IsPst>진행중인 PST 이벤트가 없습니다.</S.IsPst>
      )}
    </>
  );
};

export default Border;
