import { MouseEvent } from 'react';
import { Switch, Route, useHistory } from 'react-router';

import Theater from '../../components/Calculator/Theater';
import Tour from 'components/Calculator/Tour';
import Twin from 'components/Calculator/Twin';
import Tune from 'components/Calculator/Tune';
import Tale from 'components/Calculator/Tale';

import * as S from './style';

const Calculators = () => {
  const history = useHistory();
  const handlePush = (e: MouseEvent<HTMLButtonElement>) => {
    history.push(`/calc/${e.currentTarget.value}`);
  };

  return (
    <S.Container>
      <S.EventBtn btnColor={'#AFA690'} value='theater' onClick={handlePush}>
        PSTheater
      </S.EventBtn>
      <S.EventBtn btnColor={'#ED90BA'} value='tour' onClick={handlePush}>
        PSTour
      </S.EventBtn>
      <S.EventBtn btnColor={'#6495CF'} value='twin' onClick={handlePush}>
        PSTwin
      </S.EventBtn>
      <S.EventBtn btnColor={'#EB613F'} value='tune' onClick={handlePush}>
        PSTune
      </S.EventBtn>
      <S.EventBtn btnColor={'#6BB6B0'} value='tale' onClick={handlePush}>
        PSTale
      </S.EventBtn>
      <Switch>
        <Route exact path='/calc/theater' component={Theater} />
        <Route exact path='/calc/tour' component={Tour} />
        <Route exact path='/calc/twin' component={Twin} />
        <Route exact path='/calc/tune' component={Tune} />
        <Route exact path='/calc/tale' component={Tale} />
      </Switch>
    </S.Container>
  );
};

export default Calculators;
