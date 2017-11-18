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
        task: ['你收到了一条新任务,点击查看任务详情', '第二条', '第三条', '这是第四条任务，可能不是一般的长']
      }],
      whetherNewList: false, // 是否点击新建列表
      listValue: '' // 列表名的值
    };
  }
  // 新建列表按钮
  newList() {
    this.setState({
      whetherNewList: !this.state.whetherNewList
    });
  }
  // 确认创建一个列表
  createList() {
    const list = this.state.list.concat({ title: this.state.listValue, task: [] });
    this.setState({
      list,
      listValue: '',
      whetherNewList: false
    });
  }
  // 新建任务
  addTask(num, value) {
    const list = this.state.list.slice();
    list[num].task.push(value);
    this.setState({
      list
    });
  }
  handleChange(event) {
    this.setState({
      listValue: event.target.value
    });
  }
  render() {
    const bodyHeight = window.innerHeight - 99;
    const cardList = this.state.list.map((item, index) =>
      (<Card
        title={item.title}
        task={item.task}
        index={index}
        addTask={(num, value) => this.addTask(num, value)}
      />));
    return (
      <div className={style.cards} style={{ height: bodyHeight }}>
        {cardList}
        {this.state.whetherNewList
          ? (
            <div className={style.input}>
              <input
                type="text"
                placeholder="新建任务列表..."
                value={this.state.listValue}
                onChange={e => this.handleChange(e)}
              />
              <div className={style.buttons}>
                <button onClick={() => this.newList()}>取消</button>
                <button onClick={() => this.createList()}>保存</button>
              </div>
            </div>
          )
          : (
            <button className={style.newList} onClick={() => this.newList()}>
              <FaPlus />&nbsp;新建任务列表
            </button>
          )}
      </div>
    );
  }
}
