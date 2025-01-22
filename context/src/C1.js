import React, { useContext } from "react";
import { AppContext } from "./App"; 

function C1() {
    const { user } = useContext(AppContext);

    return (
        <header style={{ backgroundColor: "grey", color: "black", padding: "10px" }}>
            <h1>Welcome, {user}!</h1>
        </header>
    );
}

export default C1;
