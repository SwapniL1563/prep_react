// useState Hook

// definition:
// react hook that let u add state to functional components
// when u call useState -> it return an array with 2 val: current val of state , fn that updates state


// syntax:
// const [state,setState] = useState(initialVal);

// state -> current val
// setState -> setter fn that updates the state val
// initialVal -> starting val of state(eg.number,string,array);


// example:
import { useState } from "react";

function Counter() {
    const[count,setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button className="bg-red-500" onClick={()=>setCount(count+1)}>Increment</button>
            <button className="bg-blue-500" onClick={()=>setCount(count-1)}>Deccrement</button>
        </div>
    )
}

export default Counter;

// count -> state val
// setCount -> setter fn 
// initialVal of count = 0
// whenver buuton is clicked react updates the state and then re-render the component to see latest value of count


// problem solved:
// fn can now hold store and update state val like class comp


// use case:
// forms, counter, theme change, toggle ui, api state


// real life analogy:
// let say useState -> whiteboard
// then current val(wriiten) on board -> state
// marker -> setter fn that update the state val
// everytime smtg is erased and newly add everyone see new num on board -> how react re-render the ui on state change
