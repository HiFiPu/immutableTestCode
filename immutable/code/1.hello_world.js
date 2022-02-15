const { Map } = require('immutable');
let a = Map({
    owner: '张三',
    car: Map({ name: 'QQ' })
})
let b = a.set('owner', '李四');

console.log('a===b:', a===b);

console.log('a.get("car")===b.get("car"):', a.get("car") === b.get("car"));