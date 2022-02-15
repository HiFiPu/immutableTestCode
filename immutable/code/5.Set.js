// Set可以理解为value唯一的数组，即数组中不允许出现重复的值

// Set是工厂方法，不允许new来实例化, 会自动去重
const {Set} = require('immutable');
const set = Set([1,2,3,4,5,2,2,2,1]);
console.log(set);

// add添加值
const add1 = set.add(6);
console.log('add1:', add1);

// delete删除值
const del1 = set.delete(2);
console.log('del1:', del1);

// clear清空并且返回新Set
const cls1 = set.clear();
console.log('cls1:', cls1);

// union N个set合并成一个set
const s1 = Set([1,2,3]);
const s2 = Set(['x', 'y', 'z']);
const union = s1.union(s2);
console.log('union:', union);

// intersect 取N个set的交集
const in1 = Set([1,2,3,4,5,6]);
const in2 = Set([2,4,6,8,10]);
const resultIntersect = in1.intersect(in2);
console.log('resultIntersect:', resultIntersect);

// subtract 从set除去一些值
const sub1 = Set([1,2,3,4,5,6,7,8,9]);
const sub2 = sub1.subtract([1,5,9]);
console.log('sub2:', sub2);

// forEach循环
const each1 = Set(['x', 'y', 'z']);
each1.forEach((val, key)=> console.log(key, val))

// get 取得值
const setArr = Set(['x', 'y', 'z']);
console.log('setArr.get(2):', setArr.get(2));
console.log('get:', setArr.get('z'));

// has 判断是否包含指定的key
console.log('has:', setArr.has('y'));

// includes 判断是否包含指定的value
console.log('includes:', setArr.includes('y'));

// rest 除了第一个的其余元素
const r1 = Set([1,2,3,4,5,6]);
const r2 = r1.rest();
console.log('r2:', r2);

// butLast 除了最后一个的其余元素
const b1 = Set([1, 2, 3, 4, 5, 6]);
const b2 = b1.butLast();
console.log('b2:', b2);

// skip(number) 略过前N个元素，取得其余元素
const sk1 = Set([1, 2, 3, 4, 5, 6]);
const sk2 = sk1.skip(3);
console.log('sk2:', sk2);

// skipLast(number) 略过最后N个元素，取得其余元素
const skL1 = Set([1, 2, 3, 4, 5, 6]);
const skL2 = skL1.skipLast(3);
console.log('skL2:', skL2);

// skipWhile((value: T, key: T, iter: this) => boolean) 当判断条件为false时，取得当前以及后面的元素
const skw1 = Set(['hello', 'world', 'good', 'bad', 'just', 'little']);
const skw2 = skw1.skipWhile(item => item.indexOf('o') !== -1);
console.log('skw2:', skw2);

// skipUntil((value: T, key: T, iter: this) => boolean) 当判断条件为true时，取得当前以及后面的元素
const sku1 = Set(['hello', 'world', 'good', 'bad', 'just', 'little']);
const sku2 = sku1.skipUntil(item => !/o/g.test(item));
console.log('sku2:', sku2);

// take(number) 取得前N个元素
const take1 = Set([1,2,3,4,5,6]);
const take2 = take1.take(2);
console.log('take2:', take2);

// takeLast(number) 取得最后N个元素
const take3 = take1.takeLast(4);
console.log('take3:', take3);

// takeWhile((value: T, key: T, iter: this) => boolean) 从前向后取元素，当判断条件为false时为止
const tw1 = Set([2,4,6,8,1,3,5,7,9]);
console.log('tw1:', tw1);
const tw2 = tw1.takeWhile(item => item % 2 === 0);
console.log('tw2:', tw2);

// takeUntil((value: T, key: T, iter: this) => boolean) 从前向后取元素，当判断条件为true时为止