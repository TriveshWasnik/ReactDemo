import React from "react";

function NewsItem({ title, description, imageUrl, url }) {
  return (
    <div
      className="card"
      style={{ flexBasis: "480px", margin: "5px", border: "1px solid #333" }}
    >
      <img
        src={
          imageUrl
            ? imageUrl
            : "https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_1280.jpg"
        }
        className="card-img-top"
        alt={title}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"> {description}</p>
      </div>
      <div className="card-footer">
        <a href={url}>
          <small className="text-body-secondary">Read More</small>
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
