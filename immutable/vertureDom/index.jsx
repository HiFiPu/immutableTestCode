import React, { Component } from 'react';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: {
        id: 5,
        subData: {
          id: 100,
          name:'alibaba.com'
        },
      },
    };
  }
  componentDidMount() {
    document
      .querySelector('.btn1')
      .addEventListener('click', this.asynCallFn.bind(this, 8));
    let eleArr = document.querySelectorAll('li');
    for (let ele of eleArr) {
      ele.addEventListener('click', () => {
        console.log('0001.......');
      });
    }
  }
  asynCallFn = (data) => {
    this.setState({ count: data });
    console.log(this.state.count, 'btn1.....');
  };
  syncFn = () => {
    return new Promise((resolve, reject) => {
      this.setState({ count: 5 });
      resolve();
    });
  };
  handleClik = () => {
    // this.setState((prevState, props) => {
    //   return {
    //     count: prevState.count + 1,
    //   };
    // });
    // this.setState({},()=>{})
    const arr = {id:2,name:"Baidu.com"}
    this.setState({data:{subData:{id:2,name:"Baidu.com"}}})
    // this.setState({ count: 5 });
    console.log(this.state.count, 'btn2......');
    // 1.setState只在合成事件和钩子函数中是“异步”的，在原生事件和setTimeout 中都是同步的。
    // this.setState()同步
    // this.syncFn().then(() => {
    //   console.log(this.state.count, 'btn2...........');
    // });
    // new Promise((resolve,reject)=>resolve(5)).then((count)=>{
    //     this.setState({count})
    //     console.log(this.state.count,'btn2.....')
    // })
  };
  render() {
    return (
      <div>
          <h1>{this.state.data.subData.name}</h1>
        <ul>
          <li>按钮001</li>
          <li>按钮002</li>
          <li>按钮003</li>
        </ul>
        <div className="btn1">按钮01</div>
        <div className="bt2" onClick={this.handleClik}>
          按钮02
        </div>
      </div>
    );
  }
}

// setState用法需要注意的点
// https://www.jianshu.com/p/fa1e28f8c418
// https://www.cnblogs.com/wangxi01/p/11202501.html
// https://blog.csdn.net/weixin_33777877/article/details/88611098

// https://blog.csdn.net/qq_34273059/article/details/119206660?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_paycolumn_v3&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1.pc_relevant_paycolumn_v3&utm_relevant_index=1
