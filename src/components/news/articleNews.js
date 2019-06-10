import React from 'react';
import PropTypes from 'prop-types';

const ArticleNews = (props) => {
  const {
    urlToImage, title, url, author, description
  } = props;

  return (
    <article>
      { urlToImage ? (
        <div className='img-wrap'>
          <img align='left' src={urlToImage}/>
        </div>) : null
      }
      <div>
        <div className='title'>
          <a href={url}>{title}</a>
          <div className='author'>
            <span>{author}</span>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </article>
  );
};

ArticleNews.propTypes = {
  urlToImage: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string
};

export default ArticleNews;
