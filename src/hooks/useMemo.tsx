// useMemo - react hook that memoizes(remembers) the result of expensive calaculations and only re-computes when one of dependency changes until then cached result ( from last re-render ) is return helps  in optimizing performance

import { useMemo, useState } from "react";

const memoizedVal = useMemo(() => someExpCal(a,b),[abstract,b])
// syntax:
// const memoizedVal = useMemo(() => someExpCal(a,b),[a,b]);
// 1st arg => fn that return val 
// 2nd arg => dependency array
// recomputes only when dependency array changes

// problem solved:
// - avoid exp calculations(loops,filtering,sorting)
// - prevent unnecessary work when unrelated state change
// - useful in large list,dataset

// real life analogy:
// imagine ur solving a hard math problem and u solved it and write the answer on note
// next time someone want answer u just read note unless num is change and u solve it again
// that's useMemo does:memoizes expensive calculations

// eg. Expensive calculation

export function ExpensiveCalculations() {
    const [num,setNum] = useState(5);
    const [theme,setTheme] = useState(false);

    // expensive cal
    const slowFunction = (num) => {
        console.log("Calculating")
        for(let i = 0;i < 100000;i++){

        }

        return num * 2;
    }

    // useMemo - to memoize expensive cal of slow fn and run it only when num changes
    const doubledNum = useMemo(() => slowFunction(num),[num])


    return (
        <div style={{ background: theme ? "black" : "white", color: theme ? "white" : "black" }}>
            <h2>Doubled:{doubledNum}</h2>
            <button onClick={() => setNum(num + 1)}>Double Num</button>
            <button onClick={()=> setTheme(!theme)}>Toggle Theme</button>
        </div>
    )
}


// without useMemo -> on every render (even when theme changes) slow function would run causing bad performance
// with useMemo -> slow function would only run when num changes until it cached result will be return optimising performance



export function ExpensiveCalculations() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

    // exp calc
    const slowFunction = (num) => {
        console.log("Calculating")
        for(let i = 0;i < 100000;i++){
        
        }

        return num * 2;
    }

    // useMemo - to memoize expensive cal of slow fn and run it only when num changes
    const doubledNum = useMemo(() => slowFunction(num),[num]);

    return (
        <div>
            <h1>Doubled Num : {doubledNum}</h1>
            <button onClick={() => setCount(count + 1)}>Rerender</button>
            <button onClick={() => setNum(num + 1)}>Double</button>
        </div>
    )
}

// without useMemo -> on every render (even when theme changes) slow function would run causing bad performance
// with useMemo -> slow function would only run when num changes until it cached result will be return optimising performance