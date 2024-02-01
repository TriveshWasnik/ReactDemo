import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(
    function () {
      (async function () {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`;
        const res = await fetch(url);
        const data = await res.json();
        setArticles(data.articles);
      })();
    },
    [category]
  );

  return (
    <div>
      <h2 className="text-center" style={{ marginTop: "50px" }}>
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div style={{ padding: "20px 8%" }}>
        <div className="card-group">
          {articles.map((news) => (
            <NewsItem
              key={news.title}
              imageUrl={news.urlToImage}
              title={news.title}
              description={news.description}
              url={news.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsBoard;
