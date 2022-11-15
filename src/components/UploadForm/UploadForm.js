import React from 'react';
// import swal from 'sweetalert';
import { useForm } from 'react-hook-form';
import './UploadForm.css';

const UploadForm = () => {
    const { register, formState: { errors }, handleSubmit,reset} = useForm();
    const imageStorageKey = "471d1141ac13b90a4dedd43aa0764fc6";

    const onSubmit = async data => {
        console.log(data);
        const image = data.Images[0];
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log("img",result);
                if (result.success) {
                    const img = result.data.url;
                    const task = {
                        name: data.name,
                        img: img
                    }
                    console.log(task);
                    // send to your database
                    const url = 'http://localhost:5000/task';
                    fetch(url, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(task)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted);
                            if (inserted.insertedId) {
                                console.log("successfully");
                                // swal("Successfully", "Task added successfull", "success");
                               reset()
                            }
                            else {
                                console.log("failed");
                                // swal("Error", "Task added failed!", "error");
                            }
                        })
                }
            })
    };

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Add task</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input  type="text"
                        placeholder="Your Name"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}/>
                         <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                    </div>
                    <div className="input-group">
                        <label htmlFor="images">Images</label>
                        <input id='Images'
                        type="file"
                        placeholder="Image url"
                        {...register("Images", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}/>
                        <label className="label">
                        {errors.Images?.type === 'required' && <span className="label-text-alt text-red-500">{errors.Images.message}</span>}
                    </label>
                    </div>
                    <input className='form-submit mb-5' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default UploadForm;