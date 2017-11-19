import React from 'react';
import PropTypes from 'prop-types';
import { FaSquareO, FaCheckSquareO } from 'react-icons/lib/fa';
import style from './style.scss';

class CardItem extends React.Component {
  state = {
    isFinish: false,
    order: this.props.index
  };

  // 切换完成状态
  toggleCompletion = () => {
    this.setState((prevState, props) => ({
      isFinish: !prevState.isFinish,
      order: prevState.order >= props.length
        ? prevState.order - props.length
        : prevState.order + props.length
    }));
  }

  render() {
    return (
      <li
        className={this.state.isFinish ? style.cardItemCompleted : style.cardItem}
        style={{ order: this.state.order }}
      >
        <button onClick={this.toggleCompletion}>
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
  index: PropTypes.number.isRequired
};

export default CardItem;
