import React, { useState, useEffect } from "react";
import { showNewsItem } from "../api/Api";

function NewsItem({ newsId }) {
  const [newsItem, setNewsItem] = useState({});

  console.log(newsId);

  useEffect(() => {
    showNewsItem(newsId).then((data) => {
      setNewsItem(data);
      console.log(data);
    });
  }, [newsId]);

  console.log(newsItem);

  const { title, by, id, url } = newsItem;

  return (
    <>
      <h1>{title}</h1>
      <p>{by}</p>
      <p>{id}</p>
      <a href={url}>Full story</a>
    </>
  );
}

export default NewsItem;
