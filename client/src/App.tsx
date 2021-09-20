import { Switch, Route, useHistory } from 'react-router-dom';
import * as S from './styles/appStyle';

import Border from 'pages/Border';
import Calculators from 'pages/Calculators';

const App = () => {
  const history = useHistory();

  const moveBorder = () => {
    history.push('/');
  };

  const moveCalc = () => {
    history.push('/calc/theater');
  };

  return (
    <S.Container>
      <Switch>
        <Route exact path='/' component={Border} />
        <Route path='/calc' component={Calculators} />
      </Switch>
      <S.BtnBox>
        <S.BorderBtn onClick={moveBorder}>
          <p>이벤트 예측컷</p>
        </S.BorderBtn>
        <S.CalcBtn onClick={moveCalc}>
          <p>이벤트 계산기</p>
        </S.CalcBtn>
      </S.BtnBox>
    </S.Container>
  );
};

export default App;
