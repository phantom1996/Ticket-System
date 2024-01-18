import React, { useContext, useState } from 'react'
import TicketContext from '../context/TicketContext';

export default function TicketItem(props) {
  const { ticket } = props

  const context = useContext(TicketContext);

  const { resolveTicket } = context;




  const [buttonVal, setButtonVal] = useState((ticket.status === "Resolved") ? "Resolved" : "Mark as resolved");
  const [buttonClick, setButtonClick] = useState(false);


  const handleClick = (e) => {
    e.preventDefault();
    if (buttonClick === false) {
      resolveTicket(ticket._id);
      if (buttonVal !== "Resolved") {
        setButtonVal("Resolved")
      }
      setButtonClick(true)
    }
  }

  return (
    <div className="col-md-3 ">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">Topic : {ticket.topic}</h5>
          <p className="card-text">Description : {ticket.description}</p>
          <p className="card-text">Severity : {ticket.severity}</p>
          <p className="card-text"> Status : {ticket.status}</p>
          <p className="card-text">Type : {ticket.type}</p>
          <p className="card-text"> AssignedTo : {ticket.assignedTo}</p>
          <p className="card-text">CreatedOn : {ticket.datecreated}</p>
          <p className="card-text"> ResolvedOn : {ticket.resolvedOn}</p>
          <div style={{ alignItems: 'flex-end' }}>
            <button type="button" className="mx-2" style={{ float: "right" }} onClick={handleClick}>{buttonVal} </button>
          </div>


        </div>
      </div>
    </div>
  )
}
