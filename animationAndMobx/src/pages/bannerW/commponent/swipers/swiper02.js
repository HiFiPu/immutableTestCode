import React, { Component, useEffect } from 'react';
import Swiper02 from '../images/02.jpg';
import '../style.less';
// export default class swiper02 extends Component {
//   componentDidMount() {
//     console.log('swiper02.......');
//   }
//   handleBtn = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log('Swiper02');
//   };
//   render() {
//     console.log('swiper02.......');
//     return (
//       <>
//         <div className="Swiperx">
//           <img src={Swiper02}></img>
//           <h1 className='animate__animated animate__bounceInUp'>利用 Bootstrap 构建快速、响应式的网站</h1>
//           <p>
//             Bootstrap 是全球最受欢迎的前端开源工具库，它支持 Sass 变量和
//             mixin、响应式栅格系统、自带大量组件和众多强大的 JavaScript
//             插件。基于 Bootstrap
//             提供的强大功能，能够让你快速设计并定制你的网站。
//           </p>
//           <button onClick={this.handleBtn}>按钮</button>
//         </div>
//       </>
//     );
//   }
// }
const Swiper02X = () => {
  useEffect(() => {
    console.log('swiper02....');
  }, []);
  const handleBtn = () => {
    console.log('111');
  };
  return (
    <>
      <div className="Swiperx">
        <img src={Swiper02}></img>
        <h1 className="animate__animated animate__bounceInUp">
          利用 Bootstrap 构建快速、响应式的网站
        </h1>
        <p className='animate__animated animate__bounceInUp'>
          Bootstrap 是全球最受欢迎的前端开源工具库，它支持 Sass 变量和
          mixin、响应式栅格系统、自带大量组件和众多强大的 JavaScript 插件。基于
          Bootstrap 提供的强大功能，能够让你快速设计并定制你的网站。
        </p>
        <button onClick={handleBtn}>按钮</button>
      </div>
    </>
  );
};
export default  Swiper02X
