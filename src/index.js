import React from 'react';
import { render } from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
//import gon from 'gon';

import io from 'socket.io-client';
import i18next from 'i18next';

import App from './components/App';
import Context from './context';
import ru from './locales/ru/translation.json';
import en from './locales/en/translation.json';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

//import './assets/application.scss';
import reducer, { actions, asyncActions } from './slices';
import makeUser from './user';
export default () => {
  if (process.env.NODE_ENV !== 'production') {
    localStorage.debug = 'chat:*';
  }

  i18next.init({
	lng: 'ru',
	fallbackLng: 'en',
	resources: {
	  ru,
	},
  });

  //const socket = io();
  //console.log(socket);
  const store = configureStore({
    reducer,
  });

  ////store.dispatch(asyncActions(gon));
  //store.dispatch(actions.channelAddFetchSuccess(socket));
  //store.dispatch(actions.channelRemoveFetchSuccess(socket));
  //store.dispatch(actions.channelRenameFetchSuccess(socket));
  //store.dispatch(actions.messageFetchSuccess(socket));

  render(
    <Provider store={store}>
      <Context.Provider value={{ user: makeUser() }}>
        <App />
      </Context.Provider>
    </Provider>,
    document.getElementById('chat'),
  );
};