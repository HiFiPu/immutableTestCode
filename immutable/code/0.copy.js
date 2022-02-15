const obj = {x:1, y:2};
const b = obj;

b.x = 'hello';

console.log(obj === b);
console.log(b.x);
console.log(obj.x);