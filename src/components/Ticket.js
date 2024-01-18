import React, { useContext,useEffect } from 'react'
import TicketContext from '../context/TicketContext'
import TicketItem from './TicketItem';

function Ticket() {
    const context = useContext(TicketContext);
    const {tickets, fetchTicket} = context;


    useEffect(() => {
        fetchTicket()
    }, [])


    return (
        <>

        <div className="my-5 mx-10">
            <h3>Customize your Tickets</h3>
        </div>

        <div className="container">
            <div className="row my-3">
                {
                    tickets.map((ticket) => {
                        return <TicketItem key={tickets._id} ticket={ticket} />
                    })
                }
            </div>
        </div>
        </>
    )
}
export default Ticket;