// Map对应原生js的Object结构,它是无序的

// Map是工厂方法，不要使用new实例化
const {Map, List} = require('immutable');
const m1 = Map({
    x: 1,
    y: 2
})
console.log('m1:', m1);

// set设定值 set(key, value)
const m2 = m1.set('z', 666);
console.log('m2', m2);
const m3 = m1.set(List([1]), {username: "zhangsan"});
console.log('m3:', m3);

// get取值
console.log(m2.get('z'));

// delete删除值 delete(key)
const d1 = Map({
    username: "zhangsan",
    age: 18
});
const d2 = d1.delete('age');
console.log('d2:', d2);

// deleteAll批量删除 deleteAll([key1, key2,...keyN])
const dal = Map({
    x: 1,
    y: 2,
    z: 3,
    username: 'zhangsan'
});
const dal2 = dal.deleteAll(['x', 'z']);
console.log('dal2:', dal2);

// clear清除所有返回新Map
const cls = dal.clear();
console.log('cls:', cls);

// update更新 update(key, callback)
const sal = Map({
    name: "zhangsan",
    salary: 1000
});
const sal2 = sal.update("salary", x => x * 2);
console.log('sal2', sal2);

// merge合成N个Map为一个Map merge(map1, map2, ...mapN)
const mer1 = Map({
    x: 1,
    y: 2
});
const mer2 = Map({
    y: 666,
    z: 3
})
const mer3 = mer1.merge(mer2);
console.log('mer3:', mer3);

// concat是merge的别名

// mergeWith类似于merge，但是指定了merge的具体规则
const mer4 = mer1.mergeWith((oldVal, newVal)=>{return newVal + "!!!!"}, mer2);
console.log('mer4:', mer4);

// setIn 对于嵌套解构来进行设置值 setIn([层次1key, 层次2key, ...层次Nkey], value)
const deepMap = Map({
    lev1: Map({
        lev2: Map({
            lev3: Map({
                lev4: 'good'
            })
        })
    })
});
const setIn2 = deepMap.setIn(['lev1', 'lev2', 'lev3', 'lev4'], 'good morning');
console.log('setIn2:', setIn2);

// 同样的嵌套层次的操作还有 deleteIn, updateIn, mergeIn

// toJS 把map转换成原生object，深转换
const deep = deepMap.toJS();
console.log('deep:', deep);

// toJSON 把map转换成原生object，浅转换
const shallow = deepMap.toJSON();
console.log('shallow:', shallow);

// toArray转换成数组，浅转换
const arrTest = Map({
    x: 1,
    y: 2,
    z: 3
});
const arr = arrTest.toArray();
console.log('arr:', arr);

// toObject转换成Object，浅转换
const json = arrTest.toObject();
console.log('json:', json);

// equals两个map的值是否相等
const map1 = Map({
    x: 1,
    y: 2,
    z: 3
});
const map2 = Map({
    x: 1,
    y: 2,
    z: 3
});
console.log('map1===map2:', map1 === map2);
console.log('equals:', map1.equals(map2));

// find查找，匹配到的第一个
const findTest = Map({
    x: 1,
    y: 2,
    z: 3,
    username1: "张三",
    username2: "李四"
});
const findResult = findTest.find((val, key) => typeof v === 'String');
console.log('findResult:', findResult);

// findLast查找，匹配到的最后一个

// flatten拉平Map
const flatTest = Map({
    lev1: Map({
        lev2: Map({
            lev3: Map({
                lev4: 'good'
            }),
            username: 'zhangsan'
        })
    }),
    y: 2,
    x: 3
});
const flat2 = flatTest.flatten(true);
console.log('flat2:', flat2);
const flat3 = flatTest.flatten(false);
console.log('flat3:', flat3);

// has判断是否有指定的key
const hasTest = Map({
    sex: 'male',
    username: 'zhangsan'
});
console.log('has:', hasTest.has('username'));

// includes判断是否有指定的value
const includeTest = Map({
    sex: 'male',
    username: 'zhangsan'
});
console.log('includes:', includeTest.includes('zhangsan'));

// forEach方法
includeTest.forEach((val, key) => console.log('val:', val, 'key:', key))