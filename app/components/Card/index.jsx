import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronCircleDown, FaPlus } from 'react-icons/lib/fa';
import style from './style.scss';
import CardItem from '../CardItem';

class Card extends React.Component {
  state = {
    whetherNewTask: false, // 是否新建任务
    taskValue: '' // 任务名的值
  }

  // “添加任务”按钮
  newTask = () => {
    this.setState(prevState => ({
      whetherNewTask: !prevState.whetherNewTask
    }));
  }

  // 创建新任务
  createTask = () => {
    this.props.addTask(this.props.index, this.state.taskValue);
    this.setState(prevState => ({
      whetherNewTask: !prevState.whetherNewTask,
      taskValue: ''
    }));
  }

  handleChange = (e) => {
    this.setState({
      taskValue: e.target.value
    });
  }

  render() {
    const taskList = this.props.task.map((item, index) => (
      // 列表每一项任务
      <CardItem content={item} index={index} length={this.props.task.length} />
    ));
    return (
      <div className={style.card}>
        <header>
          <span>{this.props.title}{taskList.length ? `·${taskList.length}` : ''}</span>
          <button><FaChevronCircleDown /></button>
        </header>
        <ul>
          {taskList}
        </ul>
        {this.state.whetherNewTask ? (
          <div className={style.input}>
            <textarea
              placeholder="任务内容"
              value={this.state.taskValue}
              onChange={e => this.handleChange(e)}
            />
            <div className={style.buttons}>
              <button onClick={this.newTask}>取消</button>
              <button onClick={this.createTask}>保存</button>
            </div>
          </div>
        ) : (
          <button className={style.addTask} onClick={this.newTask}>
            <span><FaPlus /></span>&nbsp;添加任务
          </button>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  task: PropTypes.arrayOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  addTask: PropTypes.func.isRequired
};

export default Card;
