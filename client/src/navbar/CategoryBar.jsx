import React from 'react';
import { category } from '../assets/data';
import './categoryBar.css';

const CategoryBar = () => {
    return (
        <div className="category-bar">
            <ul className="category-list">
                {category.map((catName, id) => (
                    <li key={id} className="category-item">
                        <a href={`#${catName.toLowerCase()}`} className="category-link">
                            {catName}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryBar;
