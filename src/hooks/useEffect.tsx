// useEffect - react hook that let's you perform side effect in functional components

// import { useEffect } from "react";

// side effect -> anything that affect smtg outside react's rendering cycle
// such as -> fetching data from an API, reading / writting from localstorage, using setTimeout/setInterval

// syntax: 
useEffect(()=> {
    // code to run
    return () => {
        // cleanup (optional)
    }
},[dependencies]);

// effect fn -> runs after react render the component
// dependencies array -> control when effect run
// cleanup fn -> optional run before effect re-run / when component mount

// 3 ways useEffect run:
// 1 - on every re-render
useEffect(()=>{
    console.log("Run on every render")
});

// 2 - on component mount
useEffect(()=>{
    console.log("Run on component mount")
},[]);

// 3 - when dependencies array change
useEffect(()=>{
    console.log("Run on dependecies change")
},[count]);

// 4 - run cleanup when component unmounts
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Timer running...");
  }, 1000);

  // cleanup
  return () => clearInterval(timer);
}, []);

// analogy -> 
// useEffect -> alarm on phone
// u want to run it on smtg(render) one(mount) or [count] chnges
// u can turn off it when not needed(cleanup)


// useEffect vs useLayoutEffect 
// useEffect runs after the browser paints the ui and is non-blocking, idea for most side effects like data fetching
// useLayoutEffect runs sync befire the browser paint the ui , hence useful for reading layout or mutate dom  before its visible preventing flickering

// lets say u wwant to measure an elem widtg and adjiust anoher elem size based on it before bowser paint

// useEffect -> browser paint the dom and then measurement causing flucker
// useLayoutEffect -> after dom updates measures the width in sync manner - before paint - no flicker

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function BoxExample() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  // 👇 Try changing this between useEffect and useLayoutEffect
  useLayoutEffect(() => {
    // Measure DOM element before paint
    const boxWidth = boxRef.current.getBoundingClientRect().width;
    setWidth(boxWidth);
    console.log("Measured width before paint:", boxWidth);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <div
        ref={boxRef}
        style={{
          width: "50%",
          height: "100px",
          background: "lightblue",
          transition: "all 0.3s ease",
        }}
      >
        Measured Box
      </div>

      <p>Box width: {width.toFixed(2)}px</p>
    </div>
  );
}
