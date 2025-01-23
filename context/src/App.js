import React from "react";
// import { AppProvider } from "./AppContext";
import C1 from "./C1";
import C2 from "./C2";
import { createContext, useState } from "react";


const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = useState("");

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};

function App() {
  return (
    <AppProvider>
      <div>
        <C1 />
        <C2 />
      </div>
    </AppProvider>
  );
}

export default App;
export {AppContext};
