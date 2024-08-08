import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import NavigationStack from './navigation/NavigationStack';
import NoInternetConnection from './screens/NoInternetConnection';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationStack />
      <NoInternetConnection />
    </Provider>
  );
};

export default App;
