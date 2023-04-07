import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2 className='text-3xl text-purple-900'>All Posts are Here: {posts.length}</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    posts.map(post => <Post
                        key={post.id}
                        post={post}
                    ></Post>)
                }
            </div>
        </div>

    );
};

export default Posts;