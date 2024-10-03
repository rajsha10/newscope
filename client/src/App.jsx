import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed';
import axios from 'axios';
import { SinglePost } from './components'; // Import the SinglePost component

function App() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    const fetchNews = async () => {
        try {
            const response = await axios.get('/api/v1/news');
            setNews(response.data);
            console.log(response.data);
        } catch (err) {
            setError('Error fetching news: ' + err.message);
            console.error(err);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    axios.defaults.withCredientials = true;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://newscope-bay.vercel.app')
        .then(result => console.log(result))
        .catch(err => console.log(err))

    }


    return (
        <Router>
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/article/:id" element={<SinglePost articles={news} />} />
            </Routes>
        </Router>
    );
}

export default App;
