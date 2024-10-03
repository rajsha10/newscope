import './article.css'

const Article = ({ article }) => {
  // Function to format date and time
  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  return (
    <div className="article">
      <h2>{article.title}</h2>
      <img src={article.thumbnail} alt={article.title} className="article-thumbnail" />
      <p>{article.description}</p>
      <div className="article-author">
        {/* <img src={article.author.avatar} alt={article.author.name} className="author-avatar" /> */}
        <p>{article.author}</p>
      </div>
      <p className="article-date">{formatDate(article.createdAt)}</p>
    </div>
  );
};

export default Article;
