import { observable, autorun, action,makeObservable } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';
class Pen {
 
  TestData = observable('https://alibaba.com')
  changeString = observable({ value: '可变数据' })
  todos = observable([
    { title: 'Spoil tea', completed: true },
    { title: 'Make coffee', completed: false },
  ])
  // constructor(){
  //   this.changeString = observable({ value: '可变数据' })
  //   this.todos = observable([
  //     { title: 'Spoil tea', completed: true },
  //     { title: 'Make coffee', completed: false },
  //   ])
  // };
  // constructor(){
  //   makeObservable(this);
  // }
  handleClick01 = () => {
    console.log(this.TestData,'........注解')
    this.todos[0].completed = false
    this.changeString.value = 'alibaba.com'
  };

  handleClick02 = () => {
    this.todos[2] = { title: 'Take a nap', completed: false };
    // 打印: 'Remaining: Spoil tea, Make coffee, Take a nap'
  };

  handleClick03 = () => {
    this.todos.shift();
    // 打印: 'Remaining: Make coffee, Take a nap'
  };
}

const ViewTest = observer(({datax:{changeString,todos,handleClick01,handleClick02,handleClick03}})=> {
 console.log(changeString,todos,handleClick01,'props......')

  return (
    <div>
      <h1>测试数据</h1>
      <h2>{changeString.value}</h2>
      <p>
        <button onClick={handleClick01}>按钮一</button>
      </p>
      <p>
        <button onClick={handleClick02}>按钮二</button>
      </p>
      <p>
        <button onClick={handleClick03}>按钮三</button>
      </p>
    </div>
  );
})

function index(props) {
  const xxxx = new Pen()
  // let changeString = xxxx.changeString.value
  autorun(() => {
    console.log(
      'Remaining:',
      xxxx.todos
        .filter((todo) => !todo.completed)
        .map((todo) => todo.title)
        .join(', '),
    );
  });
  // 打印: 'Remaining: Make coffee'
  

  return (
    <div>
      <ViewTest datax={xxxx}/>
     
    </div>
  );
}

export default index;
