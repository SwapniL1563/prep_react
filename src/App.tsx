import Props from "../src/components/Props"
import State from "../src/components/State";
import ConditionalRendering from "../src/components/Conditional _Rendering";
import ListAndKeys from "./components/List_Keys";
import ControlledForm from "./components/Forms";

function App() {
  return (
   <div className="bg-green-300 flex gap-2 flex-col">
    <Props/>
    <State/>
    <ConditionalRendering loggedIn={true}/>
    <ListAndKeys/>
    <ControlledForm/>
   </div>
  )
}

export default App
