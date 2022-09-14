import React, {Fragment, useState} from 'react'

const InputTasks = () => {
    //UseState: the actual states needs to be specified
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:4000/api/v1/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
  
          console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    };
    return (
        <Fragment><h1 className='text-center mt-5'>Input Tasks 🧺</h1>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input type="text" placeholder='Insert tasks' className='form-control'
                    value={description} onChange={e => setDescription(e.target.value)} />
                <button className='btn btn-success'>Add</button>
            </form>
        </Fragment>
    
    );
};

export default InputTasks;
