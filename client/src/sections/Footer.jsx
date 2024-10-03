import React from 'react';
import { FaInstagram,FaFacebook, FaYoutube, FaXTwitter, FaTelegram } from "react-icons/fa6";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="/images/logoFoot.png" alt="Logo" className="footer-logo-image" />
                </div>
                <div className="footer-nav">
                    <h4>Categories</h4>
                    <ul>
                        <li><a href="/category/news">News</a></li>
                        <li><a href="/category/sports">Sports</a></li>
                        <li><a href="/category/technology">Technology</a></li>
                        <li><a href="/category/entertainment">Entertainment</a></li>
                        <li><a href="/category/business">Business</a></li>
                    </ul>
                </div>
                <div className="social-icons">
                    <a href="#"><FaInstagram color='black'/></a>
                    <a href="#"><FaFacebook color='black'/></a>
                    <a href="#"><FaYoutube color='black' /></a>
                    <a href="#"><FaXTwitter color='black'/></a>
                    <a href="#"><FaTelegram color='black'/></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Website Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
