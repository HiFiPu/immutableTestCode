// 原生对象转immutable对象
// fromJS() 能够把原生的数组或者对象转换成对应的List或者Map
const immutable = require('immutable');
const map = immutable.fromJS({x: 1, y:2, z:3, xyz: {
    good: 123
}});
console.log('map:', map);

const list = immutable.fromJS([1,2,3,[44,55,66]]);
console.log('list:', list);

const list_map = immutable.fromJS([1,2,3, [
    {x: 1, y: 2},
    {a: 3, b: 4}
]]);
console.log('list_map:', list_map);

// immutable对象转原生对象
// toJs() 转换为原生对象
//      List -> 数组
//      Set -> 数组
//      Map —> 对象
const {List, Map, Set} = require('immutable');
const ls = List([1,2,3,4]);
const arr1 = ls.toJS();
console.log('arr1:', arr1);

const mp = Map({x: 1, y:2});
const obj = mp.toJS();
console.log('obj:', obj);

const st = Set([11,22,22,22,33]);
const arr2 = st.toJS();
console.log('arr2:', arr2);