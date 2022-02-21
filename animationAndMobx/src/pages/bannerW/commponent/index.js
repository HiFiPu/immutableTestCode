import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './css/index.css';
import './css/normalized.css';
export default class index extends Component {
  constructor(props) {
    super(props);
    let { autoplay, interval, Banners } = this.props;
    // 克隆数组
    let _idots = [];
    _idots = _idots.concat([].concat(Banners));
    this.state = {
      _curIndex: 0,
      _idots: _idots,
    };
    if (autoplay) {
      this._timer = setInterval(() => {
        this.nextBtn();
      }, this.props.interval);
    }
  }
  componentDidMount() {}
  render() {
    const { Banners,autoplay } = this.props;
    const { _curIndex } = this.state;
    return (
      <>
        <main className="content">
          {/* 淡入淡出  */}
          <section className="fade">
            {/* <h1 className="title">淡入淡出效果</h1> */}
            <div
              className="fade-flash-wrapper flash-wrapper"
              onMouseEnter={this.stop}
              onMouseLeave={this.play}
            >
              {/* 图片显示区域  */}
              <div className="img-box">
                {Banners.map((v, i, a) => {
                  let Swip = v,
                    propsobj = { ...this.props, uid: uuidv4() };
                  return (
                    <div className={`Swiper ${_curIndex == i ? 'show' : ''}`}>
                      {/* <Swip/> */}
                      {_curIndex==i?(React.cloneElement(<Swip />, { uid: uuidv4() })):(<div className='Swiperx'></div>)}
                    </div>
                  );
                })}
              </div>
              {/* 左右按钮区域  */}
              <div className="btn-box">
                <span className="btn prev" onClick={this.preBtn}></span>
                <span className="btn next" onClick={this.nextBtn}></span>
              </div>
              {/* 分页指示区域  */}
              <div className="idot-box">
                {Banners.map((v, i, a) => {
                  return (
                    <span
                      key={i}
                      className={`idot ${_curIndex == i ? 'selected' : ''}`}
                      onClick={() => this.updateIdot(i)}
                    ></span>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

  // 2. 左右切换
  preBtn = () => {
    console.log('pre.....');
    // 切换下标
    if (this.state._curIndex === 0) {
      this.setState({ _curIndex: this.props.Banners.length - 1 });
    } else {
      this.setState({ _curIndex: this.state._curIndex - 1 });
    }
  };
  nextBtn = () => {
    // 切换下标
    if (this.state._curIndex === this.props.Banners.length - 1) {
      this.setState({ _curIndex: 0 });
    } else {
      this.setState({ _curIndex: this.state._curIndex + 1 });
    }
  };
  // 5. 鼠标移入，停止定时器
  //    鼠标移出，启动定时器
  // 6. 函数封装
  play = () => {
    console.log('启动');
    if (this.props.autoplay) {
      this._timer = setInterval(() => {
        this.nextBtn();
      }, this.props.interval);
    }
  };
  stop = () => {
    console.log('暂停');
    clearInterval(this._timer);
  };
  updateIdot = (i) => {
    this.setState({ _curIndex: i });
  };
}
