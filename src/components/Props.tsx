// Props - properties are passed as input to components
// props are immutable(read-only) inside the component
// passed from parent to child 
// makes component reusable and dynamic 

function Greeting(props) {
    return <h1>Hello ,{props.name}</h1>
}

export default function App(){
    return <Greeting name="Swapnil"  />
}

// Here App Passes name = "Swapnil" as props to greeting 