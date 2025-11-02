// React.memo -> wraps a component so it only re-render when  props cahnged

// It is an HOC that memoizes the result of comp render and if  props haven't change react skip re-render improves performance 
// It prevent unnecssary re-render of functional comp

// syntax:
// const myMemoizedComp = React.memo(function myMemoizedComp((props) => {
//     // comp logic
//     return <div>
//     { props.value }
//     </div>
// }))


// real-life analogy:
// React.memo -> security guard at door
// checks  if props have changed
// if yes -> then let person(comp) inside ( re-render )
// if not -> then blocks it( skip re-render )

// Note:
// It only works on props, not state inside comp
// for fn as props -> combine with useCallback 
// for object/arrays as props -> combine with useMemo

// eg: Without React.memo
import React, { useState } from "react";

function Child({ label }) {
  console.log(`${label} rendered`);
  return <h3>{label}</h3>;
}

function AppUseMemo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Child label="Child Component" />
    </div>
  );
}

export default AppUseMemo;

// When Count Increase -> parent re-render -> child also re-render even when props haven't changed

// eg: With React.memo
// import React, { useState } from "react";

// const Child = React.memo(function Child({ label }) {
//   console.log(`${label} rendered`);
//   return <h3>{label}</h3>;
// })

// function AppUseMemo() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       <Child label="Child Component" />
//     </div>
//   );
// }

// export default AppUseMemo;

// When Count Increase -> parent re-render -> but  child doesn't re-render even bcoz its props haven't changed

const Children = React.memo(function Children ({label}) {
  return <h1>{label}</h1>
} )

export function App() {
  const [count,setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <Children label="Hiii"/>
    </div>
  )
}