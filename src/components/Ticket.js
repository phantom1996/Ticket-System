import React, { useContext, useEffect, useState } from 'react'
import TicketContext from '../context/TicketContext'
import TicketItem from './TicketItem';

function Ticket() {
    const context = useContext(TicketContext);
    const { tickets, fetchTicket } = context;

    const [filterVal, setFilterVal] = useState({ severity: 0, type: "", assignedTo: "", status: "", sort:"" })



    const handleChange = (e) => {
        setFilterVal({ ...filterVal, [e.target.name]: e.target.value });
        console.log(filterVal)
    }

    useEffect(() => {
        fetchTicket(filterVal)
    }, [filterVal])


    return (
        <>

            <div className="my-5 mx-80">
                <h3>Customize your Tickets</h3>
                <div className="container my-4">
                    <form className="row g-3">
                        <div className="col-md-2">
                            <label htmlFor="severity" className="form-label">Severity</label>
                            <input type="number" className="form-control" id="severity" name="severity" onChange={handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="type" className="form-label">Type</label>
                            <input type="text" className="form-control" id="type" name="type" onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="assignedTo" className="form-label">AssignedTo</label>
                            <input type="text" className="form-control" id="assignedTo" name="assignedTo" onChange={handleChange} />
                        </div>
                        <div className="col-md-8">
                            <label htmlFor="status" className="form-label">Status</label>
                            <select id="status" class="form-select" name="status" onChange={handleChange}>
                                <option selected>Choose...</option>
                                <option>New</option>
                                <option>Assigned</option>
                                <option>Resolved</option>
                            </select>
                        </div>

                        <div class="col-md-10">
                            <label htmlFor="sort" class="form-label">Sort By</label>
                            <select id="sort" class="form-select" name="sort" onChange={handleChange}>
                                <option selected>Choose...</option>
                                <option>datecreated</option>
                                <option>resolvedOn</option>
                            </select>
                        </div>

                    </form>
                </div>

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