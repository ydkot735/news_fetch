
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews, selectAllNews, selectNewsStatus, selectNewsError } from '../features/newsSlice';

const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectAllNews);
  const newsStatus = useSelector(selectNewsStatus);
  const error = useSelector(selectNewsError);

  useEffect(() => {
    if (newsStatus === 'idle') {
      dispatch(getNews());
    }
  }, [dispatch, newsStatus]);

  if (newsStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (newsStatus === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {news.length ? (
        news.map((article, index) => (
          <div key={index} className="news-item">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Прочитать в источнике</a>
          </div>
        ))
      ) : (
        <div>Новостей нет :(</div>
      )}
    </div>
  );
};

export default NewsList;
