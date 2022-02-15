// Seq描述了一个“懒”操作，允许使用collection的高阶方法的高效地链式调用，但是不会生成中间的collections。
// 特点1：Seq is immutable Seq是不可改变的
// 特点2：Seq is lazy Seq是懒的

const { Seq } = require('immutable');
// 由于Seq是lazy的，因此下面的链式调用是不会被立即执行的，只有当oddSquares被调用的时候，才会被执行
const oddSquares = Seq([1, 2, 3, 4, 5, 6, 7, 8])
    .filter(x => x % 2 !== 0)
    .map(x => {
        console.log('Seq is runnning');
        return x * x;
    });

console.log('oddSquares:', oddSquares);

// 可以通过Seq方法把任意collection转换成Seq
const {List, Map, Set} = require('immutable');
const list = List([1,3,2,4]);
const seq1 = Seq(list);

console.log('seq1:', seq1);

const map = Map({x: 1, y:2, z:3});
const seq2 = Seq(map);
console.log('seq2:', seq2);

const set = Set([1,3,5,7,9]);
const seq3 = Seq(set);
console.log('seq3:', seq3);

// Seq.Keyed
const obj = {x:1, y:2, z:3};
const seqK = Seq.Keyed(obj);
console.log('seqK:', seqK);

// Seq.Indexed
const arr = [1,2,3,4,5,6];
const seqI = Seq.Indexed(arr);
console.log('seqI:', seqI);

// Seq.Set
const setset = Set([11, 11, 22, 22, 33, 33]);
const seqSet = Seq.Set(setset);
console.log('seqSet:', seqSet);