// useReducer - React hook that is used to manage complex states
// it is an alternative to useState when-
// state depend on previous state, multiple state are related

// syntax:

import { useReducer } from "react";

// const [state,dispatch] = useReducer(reducer,initialValue);

// const [state,dispatch] = useReducer(reducer,initialVal);

// here state -> current state
// dispatch -> func used to send action
// reducer ->  pure func that decides how to update state

// it is similar to mini state machine
// - u send an action describing what happened
// - reducer func decides (react) how state should cahnge based on action

// Real life analogy:
// useReducer -> tv remote
// state -> current TV channel/ volume
// action -> button press(volume up,channel change)
// dispatch -> pressing btn
// reducer -> TV logic that decides what happen when btn is pressed

// problem solve:
// complex state updates, state transition and predictability

// les say we have shopping cart
// using useState -> becomes complicated as logic grows ( increase quantity,decrease quantity,discount)
// using useReducer -> we just dispatch action,easier to add more action,alll logic in one place

// eg:

// step 1: reducer fn
function cartReducer(state,action) {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state,action.payload]
        case "REMOVE_ITEM":
            return state.filter((item)=> item.id !== action.payload);
        case "CLEAR_CART":
            return [];
        default:
            return state
    }
}

// setp 2: component
function Cart() {
    const [cart,dispatch] = useReducer(cartReducer,[]);

    return (
        <div>
            <h2>Shopping Cart</h2>
            <button onClick={()=> dispatch({type:"ADD_ITEM",payload:{id:Date.now(),name:"Apple"}})}>Add Apple</button>
            <button onClick={()=> dispatch({type:"CLEAR_CART"})}>Clear Cart</button>
            <ul>
            {cart.map((item) => (
            <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>
              X
            </button>
            </li>
           ))}
        </ul>
     </div>
    )
}


export default Cart;

const initialState = { count : 0 }

// reducer fn 
function counterReducer(state,action) {
    switch (action.type) {
        case "INCREMENT":
            return { count : state.count + 1}
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}  

function App () {
    const [ state, dispatch ] = useReducer(counterReducer,initialState);

    return (
        <div className="p-4 text-center">
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}