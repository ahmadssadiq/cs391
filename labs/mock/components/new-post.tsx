"use client"; // Ensure this is a client component

import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { createNewPost } from '../lib/createNewPost';

// Define the Post type
interface Post {
    id: string;
    title: string;
    content: string;
    upvotes: number;
    downvotes: number;
}

// Define the type for the props
interface NewPostProps {
    onPostAdded: (newPost: Post) => void; // Specify the type for the onPostAdded callback
}

const NewPost: React.FC<NewPostProps> = ({ onPostAdded }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async () => {
        if (title && content) {
            const newPost: Post = {
                id: `id${Date.now()}`, // Generate a unique ID
                title,
                content,
                upvotes: 0,
                downvotes: 0,
            };
            createNewPost(newPost);
            onPostAdded(newPost); // Callback to update the parent component
            setTitle('');
            setContent('');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                padding: 3,
                border: '1px solid #ccc',
                borderRadius: 2,
                backgroundColor: '#f9f9f9',
            }}
        >
            <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                fullWidth
                margin="normal"
                multiline
                rows={4}
            />
            <Button variant="contained" onClick={handleSubmit}>
                Submit
            </Button>
        </Box>
    );
};

export default NewPost;