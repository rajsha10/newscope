import { useEffect, useState } from 'react';
import axios from 'axios';
import { Article } from '../components';
import Hero from '../sections/Hero';
import NewsTiles from '../components/NewsTiles';
import './feed.css';

const Feed = () => {
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

    const topNews = news
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 4); // Top 4 for Hero section

    const topRead = news 
        .sort((a, b) => b.readCount - a.readCount)
        .slice(0, 5); // Top 5 most-read articles

    // const latestNews = news.slice(0, 9); // Latest 9 news articles for NewsTiles

    return (
        <div className="feed">
            <Hero articles={topNews} />
            
            {error && <p>{error}</p>}
            {news.length > 0 ? (
                <>
                    <NewsTiles articles={news} topRead={topRead} />
                </>
            ) : (
                <p>No news available.</p>
            )}
        </div>
    );
};

export default Feed;

