import React from 'react';
import style from './style.scss';
import Menu from '../Menu';
import TaskCards from '../TaskCards';

export default function Body() {
  return (
    <main className={style.main}>
      <Menu />
      <TaskCards />
    </main>
  );
}
