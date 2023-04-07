import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h2>Everything of my Friend is Here</h2>
            <h3 className='text-3xl text-rose-600'>Name: {friend.name}</h3>
            <p className='text-2xl text-green-500'>Phone: {friend.phone}</p>
            <p className='text-2xl text-purple-500'>Email: {friend.email}</p>

        </div>
    );
};

export default FriendDetail;