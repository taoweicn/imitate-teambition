import React from 'react';
import { FaStar, FaAngleDown, FaUser, FaEye, FaList } from 'react-icons/lib/fa';
import style from './style.scss';

const Menu = () => (
  <div className={style.container}>
    { /* 导航区 */ }
    <div className={style.navigation}>
      首页 &gt; Teambition 新手引导
      <button className={style.down}><FaAngleDown /></button>
      <button className={style.star}><FaStar /></button>
    </div>
    { /* 标签页 */ }
    <ul className={style.tabs}>
      <li className={style.selected}>任务</li>
      <li>分享</li>
      <li>文件</li>
      <li>日程</li>
      <li>群聊</li>
    </ul>
    { /* 信息区 */ }
    <div className={style.info}>
      <span><FaUser />&nbsp;2</span>
      <span><FaEye />&nbsp;视图</span>
      <span><FaList />&nbsp;菜单</span>
    </div>
  </div>
);

export default Menu;
