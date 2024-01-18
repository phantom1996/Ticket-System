import React, { useState, useContext } from 'react'
import TicketContext from '../context/TicketContext';


function CreateTicket() {

    const initialState = {
        topic: "",
        description: "",
        severity: 0,
        type: ""
    }

    const context = useContext(TicketContext)

    const { addTicket } = context

    const [ticket, setTicket] = useState(initialState);

    const handleChange = (e) => {

        setTicket({ ...ticket, [e.target.name]: e.target.value });
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log("Firing handleclick")
        if (ticket.severity >= 1 && ticket.severity <= 5 && ticket.description && ticket.topic && ticket.type) {
            addTicket(ticket.topic, ticket.description, ticket.severity, ticket.type);
            alert('Ticket has been created');
        }
        else {
            alert('Ticket Cannot be created Enter Severity between 1-5 and Fill all fields')
        }
    }

    return (
        <div className="container my-4">
            <form className="row g-3">
                <div className="mb-3">
                    <label htmlFor="topic" className="form-label">Topic</label>
                    <input type="text" className="form-control" id="topic" name="topic" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" rows="3" onChange={handleChange} ></textarea>
                </div>
                <div className="col-md-2">
                    <label htmlFor="severity" className="form-label">Severity</label>
                    <input type="number" className="form-control" id="severity" name="severity" onChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="type" className="form-label">Type</label>
                    <input type="text" className="form-control" id="type" name="type" onChange={handleChange} />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add-Ticket</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTicket;
