useMemo和useCallback的区别和使用
useMemo

 

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
将“创建”函数和依赖项添加到参数上使用备注，它仅会在某个依赖项改变时才重新计算备忘录值。这种优化避免在每次渲染时都进行高开销的计算。

也就是说useMemo可以让函数在某个依赖项改变的时候才运行，这可以避免很多额外的开销。举个例子：

不使用useMemo

function Example() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
 
    const getNum = useMemo(() => {
        return Array.from({length: count * 100}, (v, i) => i).reduce((a, b) => a+b)
    }, [count])
 
    return <div>
        <h4>总和：{getNum()}</h4>
        <div>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
    </div>;
}
使用useMemo后，成为count作为依赖值传递进去，此时仅当count变化时才会重新执行getNum。

useCallback

const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
将内联变量函数和依赖项替换为参数回调使用，回调返回该变量函数的备注，版本，该变量函数仅在某个依赖项改变时才会更新。当您将函数传递给经过优化的并使用引用替代性去避免非必要渲染（例如shouldComponentUpdate）的子组件时，则非常有用。


看起来似乎和useMemo差不多，我们来看看这两个有什么异同：


useMemo和useCallback接收的参数都是一样，都是在其依赖项发生变化后才执行，都是返回缓存的值，区别在于useMemo返回的是函数运行的结果，useCallback返回的是函数。

useCallback（fn，deps）相当于useMemo（（）=> fn，deps）
使用场景
顶部上面所说的，当你把某些函数传递给经过优化的并使用引用替代性去避免非必要渲染（例如shouldComponentUpdate）的子组件时，则非常有用。而父组件传递一个函数给子组件的时候，由于父组件的更新会导致该函数重新生成从而传递给子组件的函数引用发生了变化，这就会导致子组件也会更新，而很多时候子组件的更新是没必要的，所以我们可以通过useCallback来缓存该函数，然后传递给子组件。举个例子：

function Parent() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
 
    const getNum = useCallback(() => {
        return Array.from({length: count * 100}, (v, i) => i).reduce((a, b) => a+b)
    }, [count])
 
    return <div>
        <Child getNum={getNum} />
        <div>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
    </div>;
}

const Child = React.memo(function ({ getNum }: any) {
    return <h4>总和：{getNum()}</h4>
})
使用useCallback之后，仅当count发生变化时Child组件才会重新渲染，而val变化时，Child组件是不会重新渲染的。
https://www.cnblogs.com/chenzxl/p/13255888.html

useMemo和useCallback的区别


useMemo 和 useCallback 接收的参数都是一样,第一个参数为回调 第二个参数为要依赖的数据

共同作用：

1.仅仅 依赖数据 发生变化, 才会重新计算结果，也就是起到缓存的作用。

两者区别：

1.useMemo 计算结果是 return 回来的值, 主要用于 缓存计算结果的值 ，应用场景如： 需要 计算的状态

2.useCallback 计算结果是 函数, 主要用于 缓存函数，应用场景如: 需要缓存的函数，因为函数式组件每次任何一个 state 的变化 整个组件 都会被重新刷新，一些函数是没有必要被重新刷新的，此时就应该缓存起来，提高性能，和减少资源浪费。

注意： 不要滥用会造成性能浪费，react中减少render就能提高性能，所以这个仅仅只针对缓存能减少重复渲染时使用和缓存计算结果。

