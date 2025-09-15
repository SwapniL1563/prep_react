import Props from "../src/components/Props"
import State from "../src/components/State";
import ConditionalRendering from "../src/components/Conditional _Rendering";
import ListAndKeys from "./components/List_Keys";

function App() {
  return (
   <div className="bg-green-300 flex gap-2 flex-col">
    <Props/>
    <State/>
    <ConditionalRendering loggedIn={true}/>
    <ListAndKeys/>
   </div>
  )
}

export default App
