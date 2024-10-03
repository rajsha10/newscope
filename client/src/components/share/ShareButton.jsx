import React from 'react';
import { FaSquareWhatsapp,FaSquareXTwitter ,FaTelegram, FaFacebookMessenger, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import './shareButton.css';

const ShareButton = () => {
    const currentUrl = window.location.href; // Get the current page URL

    // Share URLs for different platforms
    const shareLinks = {
        whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`,
        telegram: `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
        messenger: `https://www.messenger.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`,
    };

    return (
        <div className="share-buttons">
            <h3>Share</h3>
            <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
                <FaSquareWhatsapp color='white' />
            </a>
            <a href={shareLinks.telegram} target="_blank" rel="noopener noreferrer">
                <FaTelegram color='white'/>
            </a>
            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter color='white'/>
            </a>
            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare color='white'/>
            </a>
            <a href={shareLinks.messenger} target="_blank" rel="noopener noreferrer">
                <FaFacebookMessenger  color='white'/>
            </a>
            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin color='white' />
            </a>
        </div>
    );
};

export default ShareButton;
