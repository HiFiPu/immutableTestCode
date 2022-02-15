// Range(start?: number, end?: number, step?: number) 根据给定的范围生成一个Seq。
const {Range} = require('immutable');
const r1 = Range(5);
console.log('r1:', r1);
const r2 = Range(6, 15, 2);
console.log('r2:', r2);

r2.forEach(item => console.log(item));

// Repeat(value, times)重复生成N个值的Seq，当没有传入times的时候，会生成长度为infinite的Seq。
const {Repeat} = require('immutable');
const repeat1 = Repeat(666);
console.log('repeat1:', repeat1);

const repeat2 = Repeat(999, 20);
console.log('repeat2:', repeat2);
repeat2.forEach(item => console.log(item));
