// Forms are used to collect user input. React handles form differnetly than HTML as it has state driven ui
// 2 types of form handling in React - 
// Controlled Components
// Uncontrolled Components

// Controlled Component

// form inputs derive their val from React state 
// every input change updates state and the value of input comes drom that state
// adv - better input validation , good for dynamic forms

import { useRef, useState } from "react";

// function ControlledForm() {
//     const [name,setName] = useState("");

//     const handleSubmit = (e) => {
//        e.preventDefault();
//        alert(`Hello, ${name}`)
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Enter your Name" />
//             <button type="submit">Submit</button>
//         </form>
//     )

// }

// export default ControlledForm

// Uncontrolled Component 

// Here form input values are managed by DOM itself not state
// useRef to access input values when needed
// adv - less code , no need to store input in state 
// disadv - harder to validate / manipulate input dynamically

function UncontrolledForm() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${nameRef.current.value}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;

// Real World analogy:

// Controlled:- Teacher watching every student’s notebook while they write.
// React updates on every change.

// Uncontrolled:- Teacher only checks the notebook at the end.
// React reads the value when submitting.