import React from 'react';
import { FaBars, FaPlus, FaCommentingO, FaBellO, FaQuestionCircleO } from 'react-icons/lib/fa';
import style from './style.scss';
import avatarImg from './img/avatar.jpg';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.menu}>
        <span className={style.menuBar}><FaBars /></span>
        <span className={style.flexCenter}>个人项目</span>
        <input type="search" className={style.search} placeholder="在个人项目中搜索" />
        <span className={style.addBtn}><FaPlus /></span>
      </div>
      <div className={style.user}>
        <span className={style.icons}><FaQuestionCircleO /></span>
        <span className={style.text}>
          <span className={style.mine}>我的</span>
          <span className={style.calendar}>日历</span>
        </span>
        <span className={style.icons}><FaCommentingO /></span>
        <span className={style.icons}><FaBellO /></span>
        <div className={style.avatar}><img src={avatarImg} alt="avatar" /></div>
      </div>
    </header>
  );
}
