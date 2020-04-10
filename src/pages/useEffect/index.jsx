import React, { useEffect, useState } from 'react';
import router from 'umi/router';

// hook中的三个生命周期 1. DidMount 2.DidUpdate 3.UnMount

export default function () {
    const [count, setCount] = useState(0);

    useEffect(() => {      // DidUpdate => 等同于count更改后执行次方法
        console.log(123);  // DidMount
        return () => {     // UnMount   => 离开这个页面(也就是卸载这个页面触发的方法)
            console.log(2222)
        }
    }, [count])       // count如果为空的话就是不管怎样都不会执行这个函数

    function handleClick() {
        setCount( count + 1 );
    }

    function handelRouter() {
        router.push('/');
    }

    return(
        <div>
            <div>You Clicked { count } Times</div>
            <button onClick={handleClick}>Click Me</button>
            <br/>
            <button onClick={handelRouter}>index</button>
        </div>
    )
}