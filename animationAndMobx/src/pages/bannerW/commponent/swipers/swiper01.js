import React, { Component } from 'react';
import Swiper01 from '../images/01.jpg';
import '../style.less';
export default class swiper01 extends Component {
  componentDidMount() {
    console.log('swiper01.......');
  }
  handleBtn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Swiper01');
  };
  render() {
    // console.log('swiper01.......');
    return (
      <>
        <div className="Swiperx">
          <img src={Swiper01}></img>
          <h1 className='animate__animated animate__bounceInUp'>利用 Bootstrap 构建快速、响应式的网站</h1>
          <p className='animate__animated animate__bounceInUp'>
            Bootstrap 是全球最受欢迎的前端开源工具库，它支持 Sass 变量和
            mixin、响应式栅格系统、自带大量组件和众多强大的 JavaScript
            插件。基于 Bootstrap
            提供的强大功能，能够让你快速设计并定制你的网站。
          </p>
          <button onClick={this.handleBtn}>按钮</button>
        </div>
      </>
    );
  }
}
