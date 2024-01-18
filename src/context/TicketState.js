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
        console.log(response.json())
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

    const fetchTicket = async (filterVal) =>{

        var firstFilter=false;

        var url = Host+"/api/ticket/support-tickets";
        if(filterVal.severity>0){
            if(!firstFilter){
                url=url+"?"+"severity="+filterVal.severity;
                firstFilter=true;
            }
            else{
                url=url+"&severity="+filterVal.severity;
            }
        }
        if(filterVal.type){
            if(!firstFilter){
                url=url+"?type="+filterVal.type;
                firstFilter=true;
            }
            else{
                url=url+"&type="+filterVal.type;
            }
            
        }
        if(filterVal.assignedTo){
            if(!firstFilter){
                url=url+"?assignedTo="+filterVal.assignedTo;
                firstFilter=true;
            }
            else{
                url=url+"&assignedTo="+filterVal.assignedTo
            }
            
        }
        if(filterVal.status){
            if(!firstFilter){
                url=url+"?status="+filterVal.status;
                firstFilter=true;
            }
            else{
                url=url+"&status="+filterVal.status;
            }
            
        }

        const response = await fetch(url, {
            method: "GET", 
            headers: {
              "Content-Type": "application/json",
            },
        });
        var json = await response.json();
        if(filterVal.sort==="resolvedOn"){
            var result=[]
            for(var i in json){
                result.push(json[i]);
            }
            console.log(result)
            result.sort(function(a,b){return a.resolvedOn - b.resolvedOn})
            console.log(result)
            json= JSON.parse(JSON.stringify(result));
        }


        setTicket(json);
    }

    return (
        <TicketContext.Provider value={{tickets, resolveTicket, addTicket, fetchTicket}}>
            {props.children}
        </TicketContext.Provider>
    )
}
export default TicketState;