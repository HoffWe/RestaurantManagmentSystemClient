import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppRouter} from "./router/App.router";
import {AllWorkers} from "./components/worker/AllWorkers";
import {useAxios} from "./hooks/useAxios";

function App() {

    useAxios();
  return (

    <div className="App">
     <AllWorkers/>
    </div>
  );
}

export default App;
