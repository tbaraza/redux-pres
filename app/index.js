import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './components/SignUp';
import configureStore from './redux/store/configureStore';

const store = configureStore();

const render = () => {
    ReactDOM.render(
      <SignUp state={store.getState()} />, document.getElementById('app')
  );
};

store.subscribe(render);
render();
