import React from 'react';

const UploadForm = () => {

    const handleCreateUser = event => {
        event.preventDefault();
        
        
    }
    return (
        <div className='form-container mt-10'>
            <div>
                <h2 className='form-title'>Add task</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input  type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default UploadForm;