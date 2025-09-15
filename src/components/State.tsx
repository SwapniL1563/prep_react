// State - an object that holds dyanmic data about a component
// State - similar to memeory of component - store values that changes over time and when state updates, react re-render the components to reflect in UI
// It is mutable , internal to component and managed with useState hook

import { useState } from "react";

function Counter() {
    // Declare state var "count" with default value 0
    const [count,setCount] = useState(0);

    return <div>
      <h2>Count: {count}</h2>
      {/* Update state using setCount */}
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
}

export default Counter;