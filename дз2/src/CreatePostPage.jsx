import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePostPage() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://dummyjson.com/posts', { title, body });
            console.log('Post created successfully: ', response.data);
            // После успешного создания поста перенаправляем пользователя на страницу списка постов
            navigate('/');
        } catch (error) {
            console.error('Error creating post: ', error);
        }
    };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Body:</label>
                    <textarea value={body} onChange={e => setBody(e.target.value)} />
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreatePostPage;
