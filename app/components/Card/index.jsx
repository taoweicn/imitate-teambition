import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronCircleDown } from 'react-icons/lib/fa';
import style from './style.scss';
import CardItem from '../CardItem';

export default function Card(props) {
  const taskList = props.task.map(item => (
    // 列表每一项任务
    <CardItem content={item} />
  ));
  return (
    <div className={style.card}>
      <header>
        <span>{props.title}·{taskList.length}</span>
        <button><FaChevronCircleDown /></button>
      </header>
      <ul>
        {taskList}
      </ul>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  task: PropTypes.arrayOf(PropTypes.string).isRequired
};
