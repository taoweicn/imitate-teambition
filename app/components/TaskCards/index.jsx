import React from 'react';
import { FaPlus } from 'react-icons/lib/fa';
import style from './style.scss';
import Card from '../Card';

export default class TaskCards extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [{
        title: '简单了解',
        task: ['你收到了一条新任务,点击查看任务详情', '第二条']
      }]
    };
  }
  // 新建列表
  newList() {
    const list = this.state.list.slice();
    list.push({
      title: '新增的',
      task: ['任务卡']
    });
    this.setState({
      list
    });
  }
  render() {
    const bodyHeight = window.innerHeight - 99;
    const cardList = this.state.list.map(item =>
      <Card title={item.title} task={item.task} />);
    return (
      <div className={style.cards} style={{ height: bodyHeight }}>
        {cardList}
        <button className={style.newList} onClick={() => this.newList()}>
          <FaPlus />&nbsp;新建任务列表
        </button>
      </div>
    );
  }
}
