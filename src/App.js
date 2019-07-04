import React,{useEffect,Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/Layout/SearchBar';
import Logs from './components/Logs/Logs';
import AddBtn from './components/Layout/AddBtn';

import './App.css';

const App=() =>{
  useEffect(()=>{
    M.AutoInit();
  })
  return (
   <Fragment>
     <SearchBar/>
     <div className="container"> 
     <AddBtn/>
     <Logs/>
     
     </div>
   </Fragment>
  );
}

export default App;
