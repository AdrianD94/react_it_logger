import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/Layout/SearchBar';
import Logs from './components/Logs/Logs';
import AddBtn from './components/Layout/AddBtn';
import AddLogModal from './components/Logs/AddLogModal';
import EditLogModal from './components/Logs/EditLogModal';
import AddTechModal from './components/Techs/AddTechModal';
import TechListModal from './components/Techs/TechListModal';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <Logs />
          <AddTechModal />
          <TechListModal />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
