import React, { useContext, useState } from "react";
import { AppContext } from "./App";  

function C2() {
    const { user, setUser } = useContext(AppContext);
    const [Name, setName] = useState("");

    const update_newName = () => {
        setUser(Name);
        setName("");
    };

    return (
        <main style={{ padding: "20px" }}>
            <p>Current User: {user}</p>
            <input
                type="text"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
                style={{ padding: "10px", marginRight: "10px" }}
            />
            <button onClick={update_newName} style={{ padding: "10px", fontSize: "16px" }}>
                Update Name
            </button>
        </main>
    );
}

export default C2;
