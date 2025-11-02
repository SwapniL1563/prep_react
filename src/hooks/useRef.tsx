// useRef - react hook gives u a way to  store mutable val that:
// - persist between render(doesn't reset when component change)
// - dosen't cause re-render whn changes
// - access DOM element

// it is like hidden locker where u can store smtg and react won't care or re-render because of it

// syntax:
// const refContainer = useRef(intialVal)
// return an object: { current: initialValue }
// u  can read / wirte using ref.current and react won't re-render

// problem useRef solve:
// access dom elem, store val bet render w/o re-rendering(timer ids,prev val)
// avoiding re-render caused by storing data in state unnecessarily
// real life analogy
// useRef -> locker
// ref.current -> to put smtg in it
// stays safe across renders
// updating it doesn't chnge how room look(re-render)


// eg. Accessing DOM element - focus input on click

import { useRef } from "react";

function FocusInput(){
    const inputRef = useRef(null);

    const focusInputClick = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter text here..." />
            <button onClick={focusInputClick}>Focus Input</button>
        </div>
    )
}

export default FocusInput;



function focusInput() {
    const focusInputRef = useRef(null);

    const focusInputClick = () => {
        focusInputRef.current.focus();
    }

    return (
        <div>
            <input type="text" ref={focusInputRef} name="" id="" />
            <button onClick={focusInputClick}>Focus Input</button>
        </div>
    )

}

// import React, { useRef, useState } from "react";

// function Timer() {
//   const [count, setCount] = useState(0);
//   const intervalRef = useRef(null);

//   const start = () => {
//     if (!intervalRef.current) {
//       intervalRef.current = setInterval(() => {
//         setCount((prev) => prev + 1);
//       }, 1000);
//     }
//   };

//   const stop = () => {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   };

//   return (
//     <div>
//       <h2>⏱ Count: {count}</h2>
//       <button onClick={start}>Start</button>
//       <button onClick={stop}>Stop</button>
//     </div>
//   );
// }

// export default Timer;
