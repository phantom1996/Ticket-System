import React, { useContext, useState } from 'react'
import AgentContext from '../context/AgentContext'

function CreateAgent() {

    const context = useContext(AgentContext)
    const addAgent = context;

    const [agent, setAgent] = useState({ name: "", email: "", phonenumber: 0, description: "" })

    const handleChange = (e) => {

        setAgent({ ...agent, [e.target.name]: e.target.value });
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (agent.name && agent.email && agent.phonenumber && agent.description) {
            if (agent.phonenumber.toString().length === 10) {
                addAgent(agent.name, agent.email, agent.phonenumber, agent.description);
                alert('Agent has been added');
            }
            else {
                alert('Enter a valid phone number')
            }
        }
        else {
            alert('Enter all the fields');
        }
    }

    return (
        <>
            <div className="container my-5">
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder='Enter Your name' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder='Enter Your e-mail' onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phonenumber" className="form-label">Number</label>
                        <input type="number" className="form-control" id="phonenumber" name="phonenumber" placeholder='Enter Your number' onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="description" class="form-label">Description</label>
                        <textarea type="text" class="form-control" id="description" name="description" rows="3" placeholder='About Yourself' onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Add-Agent</button>
                </form>
            </div>
        </>

    )
}

export default CreateAgent;