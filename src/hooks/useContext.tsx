// useContext - react hook that let you consume value from react context directlty without prop drilling

// use in theme switching, authentication, cart feature in e-commerce
// prop drilling - maually pass props at every level

// function App() {
//   const theme = "dark";
//   return <Toolbar theme={theme} />;
// }

// function Toolbar({ theme }) {
//   return <ThemedButton theme={theme} />;
// }

// function ThemedButton({ theme }) {
//   return <button>{theme}</button>;
// }


// using useContext
import React, { useContext } from "react";

const ThemeContext = React.createContext("light");
function App() {
    
    return <ThemeContext.Provider value="dark">
        <Toolbar />
    </ThemeContext.Provider>
}

function Toolbar() {
    return <ThemedButton/>
}

function ThemedButton(){
    const theme = useContext(ThemeContext);
    return <button>{theme === "dark" ? "Dark Mode" : "Light Mode"}</button>
}

export default App;

