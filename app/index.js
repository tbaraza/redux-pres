import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './components/SignUp';
import { store } from './redux/store/configureStore';

const render = () => {
    ReactDOM.render(
      <SignUp state={store.getState()} />, document.getElementById('app')
  );
};

store.subscribe(render);
render();
