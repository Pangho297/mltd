import { useQuery } from "@apollo/client";

import * as S from "./style";
import { GET_EVENT_BORDER } from "query";
import BannerImage from "asset/image/PSTour_01.png";
import { BorderType } from "types/eventType";
import { RankProps } from "types/rankProps";

const TableHeader = ({ rank, eventId, title }: RankProps) => {
  const { data } = useQuery<BorderType>(GET_EVENT_BORDER, {
    variables: { id: eventId, rank: rank },
  });
  const resData = data?.data.data;
  const currentTime = resData?.slice(-1).map((el) => el.summaryTime)[0];

  const getTime = () => {
    const date = new Date(`${currentTime}`);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const YY = date.getFullYear();
    const MM = month < 10 ? `0${month}` : `${month}`;
    const DD = day < 10 ? `0${day}` : `${day}`;
    const hh = hours < 10 ? `0${hours}` : `${hours}`;
    const mm = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const ss = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
  };
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Time>
        <div>{getTime()}</div>
      </S.Time>
      <S.Image src={BannerImage} />
      <S.TableContainer>
        <div>RANK</div>
        <div>-24H</div>
        <div>-1H</div>
        <div>-0.5H</div>
        <div>NOW</div>
        <div>+0.5H</div>
        <div>+1H</div>
        <div>+24H</div>
      </S.TableContainer>
    </S.Container>
  );
};

export default TableHeader;
