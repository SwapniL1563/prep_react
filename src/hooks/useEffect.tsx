// useEffect - react hook that let's you perform side effect in functional components

import { useEffect } from "react";

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
