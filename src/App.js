import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import CardList from './containers/CardList/CardList';

function App() {
  return (
    <Provider store={store}>
      <CardList />
    </Provider>
  );
}

export default App;
