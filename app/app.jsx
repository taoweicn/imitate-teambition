import React from 'react';
import ReactDOM from 'react-dom';
import './common.scss';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
