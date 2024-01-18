import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation
} from "react-router-dom";
import CreateAgent from './CreateAgent';
import CreateTicket from './CreateTicket';
import FetchTicket from './FetchTicket';

export function Home() {
    return (
        <>
            <div className="container my-3">
                <h1 style={{textAlign:'center'}}>Wekcome to Ticket-System</h1>
            </div>
            <div className="container my-5 mx-6">
                <h3 style={{textAlign:'center'}}>Here you can resolve your issues by creating a ticket</h3>
                <h3 style={{textAlign:'center'}}>Agents can register themselves</h3>
                <h3 style={{textAlign:'center'}}>You can see the tickets</h3>
            </div>

        </>
    )
}
