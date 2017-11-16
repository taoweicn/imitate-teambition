import React from 'react';
import style from './style.scss';
import Menu from '../Menu';

export default function Body() {
  return (
    <main className={style.main}>
      <Menu />
    </main>
  );
}
