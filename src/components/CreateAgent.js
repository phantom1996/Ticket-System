import React from 'react'

export default function CreateAgent() {
    return (
        <div>
            <>
                <div className="container my-5">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputName" className="form-label">Name</label>
                            <input type="name" className="form-control" id="exampleInputName" placeholder='Enter Your name' />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Your e-mail' />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputNumber" className="form-label">Number</label>
                            <input type="name" className="form-control" id="exampleInputName" placeholder='Enter Your number' />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='About Yourself'></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </>

        </div>
    )
}
