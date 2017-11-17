import React from 'react';
import PropTypes from 'prop-types';
import { FaSquareO, FaCheckSquareO } from 'react-icons/lib/fa';
import style from './style.scss';

export default class CardItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isFinish: false
    };
  }
  // 切换完成状态
  toggleCompletion() {
    this.setState({
      isFinish: !this.state.isFinish
    });
  }
  render() {
    return (
      <li className={style.cardItem} style={this.state.isFinish ? { color: '#a6a6a6', backgroundColor: '#f7f7f7' } : {}}>
        <button onClick={() => this.toggleCompletion()}>
          {this.state.isFinish ? (
            <FaCheckSquareO />
          ) : (
            <FaSquareO />
          )}
        </button>
        <div>
          {this.props.content}
        </div>
      </li>
    );
  }
}

CardItem.propTypes = {
  content: PropTypes.string.isRequired
};
