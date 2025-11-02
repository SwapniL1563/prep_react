// What is React?

// React is js-lib used for building user interfaces, dev by facebook.
// It focus on creating re-usable comp and effectively update ui when data changes

// diff between library and framework 
// library gives more flexibilty. u decide how to sturture code, routes and state like react
// framework enforces standards. u need to follow folder structure,routing etc like angular

// Features of react:
// JSX -> js + html like syntax for ui
// components -> reusable blocks of code 
// virtual dom -> lghtwt copy of real dom for efficient ui change
// hooks -> fn that manage state and sideffects in functional comp
// declarative syntax -> describle what ui should look like 

//----------------------------------------------------------------------------------------------
// what is jsx? 
// jsx is syntax extension that let u write html like code inside js
// react tranforms this jsx into React.createElement() calls at build time

// just make creating elements or ui logic more readable

// eg. const element = <h1>Hello, world!</h1>

// it get compiled into 
// const element = React.createElement('h1',null,'Hello, world!');

//------------------------------------------------------------------------------------------------
// what are components?

// components are resuable block of code that return react elements.
// 2 types - functional  and class based

// eg.
export function button() {
    return <button>Click me</button>
}

// here button can be reused anywhere

// components let u prevent repetive code and helps in modular architecture

// real - like lego blocks combined to build to bigger strucure(app)

//--------------------------------------------------------------------------------------------------
// diff between functional and class based components?

// functonal components are simple js func that return jsx or react element
// they use react hooks to manage state and lifecycle methods
// modern way that is simpler, easier to read and cleaner
import { useEffect, useState } from "react"

 export function Counter () {
   const [count,setCount] = useState(0);

   useEffect(()=> {
    console.log("Component mounted or updated")
   },[count]);

   return (
    <div>
       <h1>Count: {count}</h1>
       <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
   )
}


// Class based components (older way)

// ES6 classes that extends React.Component and use lifecycle methods and this.state 
// they were use before react hooks where introduced 
// verbose code, require this binding , explicitly use lifecycle method

export class Counter extends React.Component() {
    constructor(props){
        super(props);
        this.state = { count:0 };
    }

    componentDidMount(){
        console.log("Component mounted")
    }

    render() {
        return (
            <button onClick={() => this.setState(count: this.state.count + 1)}> Clicked { this.state.count }</button>
        )
    }
}

// ReactDOM.render() -> mounts your react component tree into real DOM node in browser 

// ReactDOM.render(<App/>,document.getElementById('root'));


// why react is spa?
// spa is an  we app that loads a single html page intially and dynamically updates the content without full page reload as user navigates
// react is spa bcoz it renders a single HTML page on intial req and dynamically updates the ui using js and vdom, w/0 full page reload
// uses react router to handle clienyt side nav providing smooth exp. unlike mpa where each page click triggers new server req and ful page relaod