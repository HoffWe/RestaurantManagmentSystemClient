import React from 'react';
import './App.css';
import {AppRouter} from "./router/App.router";
import {useAxios} from "./hooks/useAxios";

function App() {

    useAxios();
  return (

    <div className="App">
     <AppRouter/>
    </div>
  );
}

export default App;
