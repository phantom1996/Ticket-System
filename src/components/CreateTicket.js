import React from 'react'

function CreateTicket() {
    return (
        <div className="container my-4">
            <form className="row g-3">
                <div className="mb-3">
                    <label for="exampleInputTopic" className="form-label">Topic</label>
                    <input type="text" className="form-control" id="exampleInputName" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
                </div>
                <div className="col-md-6">
                    <label for="inputTyype" className="form-label">Type</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-2">
                    <label for="inputSeverity" className="form-label">Severity</label>
                    <input type="number" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTicket;
