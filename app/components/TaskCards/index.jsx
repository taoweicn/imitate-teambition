import React from 'react';
import { FaPlus } from 'react-icons/lib/fa';
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
      <div className={style.newList}>
        <FaPlus />&nbsp;新建任务列表
      </div>
    </div>
  );
}
