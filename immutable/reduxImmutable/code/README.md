This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



## 相关链接
https://blog.csdn.net/canduecho/article/details/79390207
https://cn.mobx.js.org/intro/concepts.html
https://blog.csdn.net/sinat_17775997/article/details/73603797






基本数据类型  如 number string  都是 不可变对象
引用数据类型  如 Array Object  都是 可变对象 

引用类型的数据，优点在于频繁的操作数据都是在原对象的基础上修改，不会创建新对象，从而可以有效的利用内存，不会浪费内存，这种特性称为mutable（可变） 
但恰恰它的优点也是它的缺点，太过于灵活多变在复杂数据的场景下也造成了它的不可控性，假设一个对象在多处用到，在某一处不小心修改了数据，
其他地方很难预见到数据是如何改变的，针对这种问题的解决方法，一般就像刚才的例子，会想复制一个新对象，再在新对象上做修改，
这无疑会造成更多的性能问题以及内存浪费

为了解决这种问题，出现了immutable对象，每次修改immutable对象都会创建一个新的不可变对象，而老的对象不会改变

immutable.js  (想帮助你像操作不可变数据一样操作可变数据(对象数组))

安装下载 
cnpm i  immutable redux-immutable -S


常用api介绍
immutable.js提供了十余种不可变的类型（List，Map，Set，Seq，Collection，Range等）

//Map()  原生object转Map对象 (只会转换第一层，注意和fromJS区别)
immutable.Map({name:'danny', age:18,a:{b:1000}})
 
//List()  原生array转List对象 (只会转换第一层，注意和fromJS区别)
immutable.List([1,2,3,4,5])
 
//fromJS()   原生js转immutable对象  (深度转换，会将内部嵌套的对象和数组全部转成immutable)
immutable.fromJS([1,2,3,4,5])    //将原生array  --> List
immutable.fromJS({name:'danny', age:18})   //将原生object  --> Map
 
//toJS()  immutable对象转原生js  (深度转换，会将内部嵌套的Map和List全部转换成原生js)
immutableData.toJS();
 
//查看List或者map大小  
immutableData.size  或者 immutableData.count()
 
// is()   判断两个immutable对象是否相等
immutable.is(imA, imB);
 
//merge()  对象合并
var imA = immutable.fromJS({a:1,b:2});
var imA = immutable.fromJS({c:3});
var imC = imA.merge(imB);
console.log(imC.toJS())  //{a:1,b:2,c:3}
 
//增删改查（所有操作都会返回新的值，不会修改原来值）
var immutableData = immutable.fromJS({
    a:1,
    b:2，
    c:{
        d:3,
        f:{
            g:100
        }
    }
});
var data1 = immutableData.get('a') //  data1 = 1  
var data2 = immutableData.getIn(['c', 'd']) // data2 = 3   getIn用于深层结构访问
var data3 = immutableData.set('a' , 2);   // data3中的 a = 2
var data4 = immutableData.setIn(['c', 'd'], 4);   //data4中的 d = 4
var data5 = immutableData.update('a',function(x){return x+4})   //data5中的 a = 5
var data6 = immutableData.updateIn(['c', 'd'],function(x){return x+4})   //data6中的 d = 7
var data7 = immutableData.delete('a')   //data7中的 a 不存在
var data8 = immutableData.deleteIn(['c', 'd'])   //data8中的 d 不存在


优点
降低mutable带来的复杂度  (数组和对象)
节省内存
拥抱函数式编程

缺点
需要重新学习api


0. react  

就是数据驱动的框架  
jQuery 真真切切的操作DOM 

虚拟DOM  object  用来描述 存储在 内存里面记录DOM标签的对象树  (key 对比 )

操作数据  ----- 操作虚拟DOM  ---- 真实DOM 

配套的数据管理方案和框架  （实现组件的数据交换和数据缓存）

vuex  （state action mutations component ==> store） 

redux  (state action reducers  component ==> store) 

a. 组件 components 取到 state 的值 
b. 发送 action  store.dispatch 
c. 进入 reducers 根据 type 修改对应的数据 state 
d. store 会订阅 state, 当state 改变就会 重新刷新组件视图 

单向数据流   （管理数据）

state ---->  reducers  ---->    store  ----->  components   

a. 把初始化的 state 存储在 reducers 
b. 把reducers 挂载到 store   (store.getState() )
c. 组件 components 获取到 store 里面的 state 数据 
d. 修改state 组件发送 store.dispatch 发送 action

flux

mobx    	
 
react-redux （完全遵循 redux  优化 将redux 里面的组件 拆分为 容器组件和 UI 组件 ）


1.redux

2.mobx 




