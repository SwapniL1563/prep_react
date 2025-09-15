import Props from "../src/components/Props"
import State from "../src/components/State";
import ConditionalRendering from "../src/components/Conditional _Rendering";

function App() {
  return (
   <div className="bg-green-300">
    <h1 >Hii</h1>
    <Props/>
    <State/>
    <ConditionalRendering loggedIn={true}/>
   </div>
  )
}

export default App
