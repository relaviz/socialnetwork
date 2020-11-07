import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './App';

if('render whithout crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
