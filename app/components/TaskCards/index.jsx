import React from 'react';
import style from './style.scss';
import Card from '../Card';

export default function TaskCards() {
  const bodyHeight = window.innerHeight - 99;
  return (
    <div className={style.cards} style={{ height: bodyHeight }}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
