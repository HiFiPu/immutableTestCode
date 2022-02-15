// OrderedMap是有序的map，迭代输出的顺序是调用set的顺序。
// 需要更高的开销
const {OrderedMap} = require('immutable');

const map = OrderedMap({});
const map2 = map.set('z', 1);
const map3 = map2.set('x', 2);

map3.forEach((v, k)=> console.log(k, v));