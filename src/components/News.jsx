import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import { showNews } from "../api/Api";

function News() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    showNews().then((ids) => setStoryIds(ids));
  }, []);

  console.log(storyIds);

  return storyIds
    .slice(0, 10)
    .map((storyId, i) => <NewsItem key={i} newsId={storyId} />);
}

export default News;
