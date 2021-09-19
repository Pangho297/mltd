import BannerImage from 'asset/image/PSTreasure_01.png';

import * as S from './style';

const TableHeader = () => {
  return (
    <S.Container>
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
