import { Switch, Route, useHistory } from 'react-router-dom';
import * as S from './style';

import Border from 'pages/Border';
import Calculators from 'pages/Calculators';

const App = () => {
  const history = useHistory();

  const moveBorder = () => {
    history.push('/');
  };

  const moveCalc = () => {
    history.push('/calc');
  };

  return (
    <S.Container>
      <Switch>
        <Route exact path='/' component={Border} />
        <Route exact path='/calc' component={Calculators} />
      </Switch>
      <S.BtnBox>
        <S.BorderBtn onClick={moveBorder}>
          <p>Event Border</p>
        </S.BorderBtn>
        <S.CalcBtn onClick={moveCalc}>
          <p>Event Calculator</p>
        </S.CalcBtn>
      </S.BtnBox>
    </S.Container>
  );
};

export default App;
