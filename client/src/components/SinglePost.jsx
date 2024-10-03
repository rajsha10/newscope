import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NewsTiles from './NewsTiles';
import ShareButton from './share/ShareButton';
import './singlePost.css';

export default function SinglePost({ articles }) {

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

    const topRead = news 
        .sort((a, b) => b.readCount - a.readCount)
        .slice(0, 5); // Top 5 most-read articles

    const { id } = useParams();
    const article = articles.find(article => article._id === id);

    if (!article) {
        return <p>No article found</p>;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="main-container">
            <div className='single-news-area'>
                <div className="single-post">
                    <div key={article._id} className="single-news-tile">
                        <img
                            src={article.thumbnail}
                            alt={article.title}
                            className="news-thumbnail"
                        />
                        <h3 className="news-title">{article.title}</h3>
                        <p className="news-description">
                            {article.description}...
                        </p>
                        <div className="news-youtube">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/watch?v=AGPbDC5jg9w"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="news-author-date">
                            <p className="news-author">{article.author}</p>
                            <p className="news-date">{formatDate(article.createdAt)}</p>
                        </div>
                    </div>
                </div>
                <ShareButton />
            </div>
            <NewsTiles articles={articles} topRead={topRead}/>
        </div>
    );
}

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};
