import React, { useState } from "react";
import TicketContext from "./TicketContext";
const TicketState = (props) => {

    const Host = "http://localhost:5000";

    let s1 = [
      ]
    const [tickets, setTicket] = useState(s1);

    const resolveTicket = async (id) =>{
        const response = await fetch(`${Host}/api/ticket/update-tickets/${id}`, {
            method: "PUT", 
            headers: {
              "Content-Type": "application/json",
            },
        });
       var oldTicket;
        for(let i=0;i<tickets.length;i++){
            if(tickets[i]._id === id){
                oldTicket=tickets[i];
                break;
            }
        }
        oldTicket.status="Resolved";
        oldTicket.resolvedOn=new Date().toString();
        const newTickets = tickets.filter((ticket) => {return ticket._id!==id})
        
        setTicket(newTickets.concat(oldTicket));
    }

    const addTicket = async (topic, description, severity, type) =>{
        console.log(topic)
        console.log(description)
        console.log(severity)
        console.log(type)

        const data= {
            "topic":topic,
            "description":description,
            "severity":severity,
            "type":type
        }

        const response = await fetch(`${Host}/api/ticket/support-tickets`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
      // const json = await response.json();
       // console.log(json)
    }

    const fetchTicket = async () =>{

        const response = await fetch(`${Host}/api/ticket/support-tickets`, {
            method: "GET", 
            headers: {
              "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        setTicket(json);
    }

    return (
        <TicketContext.Provider value={{tickets, resolveTicket, addTicket, fetchTicket}}>
            {props.children}
        </TicketContext.Provider>
    )
}
export default TicketState;