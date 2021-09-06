import { Route, HashRouter } from 'react-router-dom';

import Main from './pages/Main';

const App = () => {
  return (
    <HashRouter>
      <Route exact path='/' component={Main} />
    </HashRouter>
  );
};

export default App;
