import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    // console.log(friend);
    const { name, email, id, phone } = friend;
    return (
        <div className="m-10 p-10 rounded-md border-2 border-pink-900">
            <h1>{name}</h1>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
            <p><Link to={`/friend/${id}`}>Show Details</Link></p>
        </div>
    );
};

export default Friend;