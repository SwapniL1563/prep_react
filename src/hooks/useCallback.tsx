// useCallback - react hook that return memoized version of callback fn 
// It prevent a fn from being recreated on every render, unless its dependencies change

import React, { useCallback, useState } from "react";

// syntax:const memoizedFn = useCallback(()=> {
// // fn logic here
//  },[dependency])

const memoizedFn = useCallback(() => {

},[])

// return the reference to fn
// 1st render -> memoized fn
// 2nd render -> if dependencies didn't change, return same fn refernce
// if dependencies change, recreate the fn

// need:
// in react,fn are re-created every time a comp. re-render
// if u pass these fn as prop to child comp, it may cause unnecessary re-render ( coz child think prop has changes )

// analogy:
// useCallback -> speed-dial number in phone
// without it -> type num every time(new fn every render)
// with it -> press the saved speed-dial(same fn ref. used)

// eg.

// function Button({onClick,label}) {
//     console.log(`${label} rendered`);
//     return <button onClick={onClick}>{label}</button>
// }

// export default function AppCb(){
//     const [count,setCount] = useState(0);

//     const handleClick = useCallback(() => {
//         console.log("Button Click");
//     },[]);

//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <Button onClick={handleClick} label="Child Button"/>
//         </div>
//     )
// }



function Button ({onClick,label}) {
    console.log("Button rerendered!")
    return <button onClick={onClick}>{label}</button>
}

function Parent () {
    const [count,setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button Clicked")
    },[]);

    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Button onClick={handleClick} label="Button"/>
        </div>
    )
}

// w/o useCallback any time parent re-render child (Button) also re-render
// with useCallback the child will only re-render when dependencies change 


// useCallback + react.memo
const Button = React.memo(function Button ({onClick,label}) {
    console.log("Button rerendered!")
    return <button onClick={onClick}>{label}</button>
})

export function Parent () {
    const [count,setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button Clicked")
    },[]);

    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Button onClick={handleClick} label="Button"/>
        </div>
    )
}