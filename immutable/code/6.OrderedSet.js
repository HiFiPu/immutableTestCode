// OrderedSet是有序的Set，它的顺序是调用add添加元素的顺序，拥有Set的所有方法和属性
const {OrderedSet, Set} = require('immutable');

const oset = OrderedSet([2,4,6,8,1,3,5,7,9]);
console.log('oset:', oset)

const set = Set([2,4,6,8,1,3,5,7,9]);
console.log('set:', set);

const result = oset.takeWhile(item => item % 2===0);
console.log('result:', result);

// sort 排序方法 sort((valueA: T, valueB: T) => number)
// valueA - valueB: 升序
// valueB - valueA: 降序
const sort1 = oset.sort((valA, valB) => valA - valB);
console.log('sort1:', sort1);


const sort2 = oset.sort((valA, valB) => valB - valA);
console.log('sort2:', sort2);