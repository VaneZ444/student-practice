import { BrowserRouter } from 'react-router-dom';

import { AppLayout } from './components/AppLayout';

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
};

export default App;
