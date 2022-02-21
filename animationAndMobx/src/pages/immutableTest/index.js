import React from 'react';
import {fromJS,merge} from 'immutable'
function index(props) {
  let obj1 = fromJS({
      id:'1111',
      name:'alibaba.com',
      other:{
          sex:'男',
          age:18
      }
  })
  let obj2 = fromJS({
      id:'2222',
      name:'baidu.com',
      other:{
          sex:'女',
          age:18
      }
  })
  console.log(merge(obj1,obj2).toJS())
  console.log(obj1.mergeDeep(obj2).toJS())
  console.log(obj1.mergeWith((o,n)=>o,obj2).toJS())
  return (
    <div>
      <h1>immutable.js测试</h1>
    </div>
  );
}

export default index;