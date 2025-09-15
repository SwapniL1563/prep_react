// Conditional Rendering - showing, hiding or rendering UI elements based on conditions like if/else,true/false
// in real world use in checking login status, API success,etc

// using if / else
// function UserGreeting({loggedIn}){
//     if(loggedIn) {
//         return <h1>Welcome Back!</h1>
//     } else {
//         return <h2>Please Log In</h2>
//     }
// }

// using ternary operator
function UserGreeting({ loggedIn }) {
  return (
    <div>
      {loggedIn ? <h2>Welcome Back! 🎉</h2> : <h2>Please Login 🚪</h2>}
    </div>
  );
}

export default UserGreeting;

