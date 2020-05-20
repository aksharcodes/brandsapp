import React from 'react';
import store from './store';
import {Provider} from 'react-redux';
import Brands from './components/Brands';
import './App.css' //styleLoader in webpack

const App = () => {
  return (
    <Provider store = {store}>
    <Brands/>
    </Provider>
  )
}

export default App