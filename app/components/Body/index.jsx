import React from 'react';
import style from './style.scss';
import Menu from '../Menu';
import TaskCards from '../TaskCards';

const Body = () => (
  <main className={style.main}>
    <Menu />
    <TaskCards />
  </main>
);

export default Body;
