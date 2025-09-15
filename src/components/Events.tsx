// React handles almost everything like HTML but with few changes
// Events are named in camelCase 
// Instead of string u passed  function as event handler

// function ClickBtn() {
//     const handleClick = () => {
//         alert("Button Clicked")
//     }

//     return <button onClick={handleClick}>Click Me</button>

//     // here handleClick is function reference
//     // if you write onClick={handleClick()} it will execute immediately
// }


// if we want to pass argument to event handler
// wrap the function in an arrow function

function GreetButton({ name }) {
  const greet = (person) => alert(`Hello, ${person}!`);

  return <button onClick={() => greet(name)}>Greet</button>;
}

export default GreetButton;

