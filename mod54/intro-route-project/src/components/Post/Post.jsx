import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/post/${id}`);

    }

    return (
        <div className='border-2 border-amber-700 rounded-md'>
            <h5 className='text-2xl'>ID: {id}</h5>
            <h3 className='text-3xl text-purple-600'>{title}</h3>
            {/* <p>{body}</p> */}
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}> <button>Show Post Details</button></Link>
            <button onClick={handleNavigation}>With Button Handler</button>
        </div>
    );
};

export default Post;