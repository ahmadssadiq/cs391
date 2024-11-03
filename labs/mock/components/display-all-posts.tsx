"use client"; // Ensure this is a client component

import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../lib/getAllPosts';
import NewPost from './new-post';

interface Post {
    id: string;
    title: string;
    content: string;
    upvotes: number;
    downvotes: number;
}

const DisplayAllPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        setPosts(getAllPosts());
    }, []);

    const handleNewPost = (newPost: Post) => {
        setPosts((prevPosts) => [newPost, ...prevPosts]);
    };

    return (
        <div>
            <NewPost onPostAdded={handleNewPost} />
            {posts.map((post) => (
                <div key={post.id} style={{ margin: '20px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <span>Upvotes: {post.upvotes} | Downvotes: {post.downvotes}</span>
                </div>
            ))}
        </div>
    );
};

export default DisplayAllPosts;