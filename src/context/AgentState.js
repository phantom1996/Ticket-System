import React, { useState } from "react";
import AgentContext from "./AgentContext";
const AgentState = (props) => {

    const Host = "http://localhost:5000";

    const addAgent = async (name, email, phonenumber, description) => {

        const data = {
            "name": name,
            "email": email,
            "phonenumber": phonenumber,
            "description": description
        }

        const response = await fetch(`${Host}/api/auth/support-agents`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        // const json = await response.json();

    }
    return (
        <AgentContext.Provider value={addAgent}>
            {props.children}
        </AgentContext.Provider>
    )
}

export default AgentState;