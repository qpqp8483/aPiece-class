import React, { useEffect, useState } from 'react';

const CounterA = React.memo(({ count }) => {

    useEffect(()=>{
     console.log(`CounterA Update : ${count}`)
    })

    return<div>{count}</div>
})

const CounterB = React.memo(({ obj }) => {

    useEffect(()=>{
        console.log(`CounterB Update : ${obj.count}`)
    })

    return<div>{obj.count}</div>
})

const OpimizeTest = () => {
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState({
        count : 1
    });
    
    return (
        <div style={{ padding:50 }}>
            <div>
                <h2>Counter A</h2>
                <CounterA count={count}/>
                <button onClick={() => {setCount(count)}}>A Button</button>
            </div>
            <div>
                <h2>Counter B</h2>
                <CounterB obj={obj}/>
                <button onClick={() => {setObj({
                    count : obj.count
                })}}>B Button</button>
            </div>
        </div>
    );
};

export default OpimizeTest;