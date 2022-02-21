我们经常会碰到一种场景，父组件状态变更需要re-render，通常情况下会连带着所有子组件一起re-render

但是实际上我们传递给某个子组件的props并没有改变，该子组件并不需要re-render

在class component 中，我们可以使用 PureComponent 或 shouldComponentUpdate 来控制子组件是否需要渲染

但在FC中没这些玩意儿该怎么办？

可以使用 React.memo，看个例子：

import React, { useState } from 'react'
const Child = props => {
    console.log("render child")
    return (
        <div>
            props count: { props.count }
        </div>
    )
}
const Wrapper = () => {
    const [count, setCount] = useState(0)
    const [id, setId] = useState(0)

    return (
        <div>
            <h2>React Memo</h2>
            <button onClick={() => setId(id + 1)}>render parent</button>
            <button onClick={() => setCount(count + 1)}>change count</button>
            <Child count={count}></MyComponent>
        </div>
    )
}

export default Wrapper
上述例子中，我们每次点击 render parent 按钮，Wrapper组件就会重新渲染，导致Child组件也会重新渲染打印"render child"，但实际上，Child的props并未改变，所以不需要render。

我们可以将Child用React.memo包裹一层：

import React, { useState } from 'react'
const Child = props => {
    console.log("render child")
    return (
        <div>
            props count: { props.count }
        </div>
    )
}

const Memo = React.memo(Child)
const Wrapper = () => {
    const [count, setCount] = useState(0)
    const [id, setId] = useState(0)

    return (
        <div>
            <h2>React Memo</h2>
            <button onClick={() => setId(id + 1)}>render parent</button>
            <button onClick={() => setCount(count + 1)}>change count</button>
            <Memo count={count}></Memo>
        </div>
    )
}
这样，只要在我们修改了count的情况下，子组件才会渲染

不仅如此，React.memo还提供了第二参数，一个函数，用来自定义判断前后是否相等，类似

shouldComponentUpdate，只不过返回值相反。

我们把上面的例子改为如果新的count值比老的count的差值值大于等于2，Child才能渲染：

import React, { useState } from 'react'
const Child = props => {
    console.log("render child")
    return (
        <div>
            props count: { props.count }
        </div>
    )
}

const Memo = React.memo(Child, (prev, next) => {
    return (next.count - prev.count) < 2
})
const Wrapper = () => {
    const [count, setCount] = useState(0)
    const [id, setId] = useState(0)

    return (
        <div>
            <h2>React Memo</h2>
            <button onClick={() => setId(id + 1)}>render parent</button>
            <button onClick={() => setCount(count + 1)}>change count</button>
            <Memo count={count}></Memo>
        </div>
    )
}
现在就是点两次change count按钮，才会触发render child

useMemo
useMemo的功能，有点类似，也是用来控制渲染，不过粒度就更细了

先来看一个例子：

import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [dep, setDep] = useState(0)
    console.log("render")
    const total = () => {
        console.log("get total")
        return 2 * count
    }
    const memoTotal = useMemo(() => {
        console.log("get memoTotal")
        return 2 * count
    }, [count])
    function changeDep() {
        setDep(dep + 1)
    }
    function changeCount() {
        setCount(count + 1)
    }
    return (
        <div>
            <h2>useMemo</h2>
            <button onClick={changeDep}>change dep</button>
            <button onClick={changeCount}>change count</button>
            <div>
                dep: { dep }
            </div>
            <div>
                count: { count }
            </div>
            <div>
                total: { total() }
            </div>
            <div>
                memo total: { memoTotal }
            </div>
        </div>
    )
}
上面这个例子中，当我点击changeDep的时候，因为组件重新渲染导致total重新执行。但实际上total仅仅依赖于count，此时是可以不进行更新的

实现这个思路最简单的就是将total放到全局，然后在setCount的时候将count作为参数传进去修改total

useMemo的作用就是提供了一个memorize值，在依赖项改变之后，该值才会改变才会被重新计算

个人感觉，有点像vue里的computed属性

然后上面的例子中，memoTotal属性就是利用useMemo创建的值，它仅在count发生改变的时候才会重新计算

useMemo有两个参数：

第一个参数为该值的创建函数
第二个参数为依赖数组
如果第二个参数不传，那和普通属性一样

如果是个空数组，就始终不会改变

如果数组中有依赖项，则当依赖项改变的时候，该值会重新计算