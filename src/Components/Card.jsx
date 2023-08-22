import React from "react";
import "../App.css";
export default function Card({ title, img, author, type, publisher, link }) {
  return (
    <div className="card" style={{ width: "280px" }}>
      <img src={img} />
      <div className="card-body">
        <h2>{title}</h2>
        <p>By : {author}</p>
        <p>{type}</p>
        <p>publisher: {publisher}</p> <br />
        <a href={link} className="link" target="_blank">
          Read
        </a>
      </div>
    </div>
  );
}
