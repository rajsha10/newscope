import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from './CustomArrow';
import './hero.css';
import { Link } from 'react-router-dom';

export default function Hero({ articles, onArticleSelect }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="top-news">
            <Slider {...settings}>
                {articles.map((article) => (
                    <div key={article._id} className="slider-item">
                    <Link to={`/article/${article._id}`}>
                        <div className="image-container">
                            <img src={article.thumbnail} alt={article.title} className="article-thumbnail" />
                            <div className="text-overlay">
                                <h2 className="article-title">{article.title}</h2>
                                <p className="article-description">{article.description.substring(0, 100)}...</p>
                                <div className="article-details">
                                    <p className="article-author">{article.author}</p>
                                    <p className="article-date">{formatDate(article.createdAt)}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};
