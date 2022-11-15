import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AllTask.css';

const AllTask = () => {
    const [allImages, setAllImages] = useState([]);
    const [user,isLoading] = useAuthState(auth);

    useEffect(() => {

            fetch(`http://localhost:5000/allImages`, {
                method: "GET",
            })
                .then(res => res.json())
                .then(data => {
                    setAllImages(data)
                })
    }, []);

    return (
        <div className='container'>
        {
            allImages.map((list,index)=> 
            <div>
                {list.img}
            </div>
            )
        }
            
        </div>
    );
};

export default AllTask;