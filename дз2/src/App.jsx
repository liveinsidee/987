// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PostsPage from './PostPage.jsx';
import CreatePostPage from './CreatePostPage.jsx';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Posts</Link>
                        </li>
                        <li>
                            <Link to="/create">Create Post</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<PostsPage />} />
                    <Route path="/create" element={<CreatePostPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
