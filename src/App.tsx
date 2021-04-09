import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Main } from './components/Main/Main';
import { Modal } from './components/Modal/Modal';

import { ModalTestComponent } from './components/Modal/ModalTestComponent'; // компонент для проверки работы Modal

import { ModalContext } from './context';

import 'antd/dist/antd.css';
import './scss/App.scss';

export const elementContextValue = {
  Component: ModalTestComponent,
  type: 'alert',
};

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ModalContext.Provider value={elementContextValue}>
        <Modal />
      </ModalContext.Provider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};
