import React from 'react';
import { FaChevronCircleDown, FaSquareO } from 'react-icons/lib/fa';
import style from './style.scss';

export default function Card() {
  return (
    <div className={style.card}>
      <header>
        <span>简单了解·5</span>
        <button><FaChevronCircleDown /></button>
      </header>
      <ul className={style.lists}>
        <li>
          <span><FaSquareO /></span>
          <div>你收到了一条新任务,点击查看任务详情</div>
        </li>
        <li>
          <span><FaSquareO /></span>
          <div>你收到了一条新任务,点击查看任务详情</div>
        </li>
      </ul>
    </div>
  );
}
