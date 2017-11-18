import React from 'react';
import PropTypes from 'prop-types';
import { FaSquareO, FaCheckSquareO } from 'react-icons/lib/fa';
import style from './style.scss';

export default class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinish: false,
      order: props.index
    };
  }
  // 切换完成状态
  toggleCompletion() {
    const taskNum = this.props.length;
    this.setState({
      isFinish: !this.state.isFinish,
      order: this.state.order >= taskNum ? this.state.order - taskNum : this.state.order + taskNum
    });
  }
  render() {
    return (
      <li
        className={this.state.isFinish ? style.cardItemCompleted : style.cardItem}
        style={{ order: this.state.order }}
      >
        <button onClick={() => this.toggleCompletion()}>
          {this.state.isFinish ? (
            <FaCheckSquareO />
          ) : (
            <FaSquareO />
          )}
        </button>
        <div className={style.content}>
          {this.props.content}
        </div>
      </li>
    );
  }
}

CardItem.propTypes = {
  content: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired
};
