import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();
    console.log(friends);

    return (
        <div>
            <h1 className='text-5xl text-green-800'>These are my Friends: {friends.length}</h1>
            <div className='grid grid-cols-3 gap-2'>
                {
                    friends.map(friend => <Friend
                        key={friend.id}
                        friend={friend}
                    ></Friend>)
                }
            </div>

        </div>
    );
};

export default Friends;