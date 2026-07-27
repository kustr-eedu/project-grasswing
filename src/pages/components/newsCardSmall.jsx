import { useEffect } from "react";
import axios from "axios";
import "./newsCard.css";

const NewsCardSmall = () => {

  return (
    <div className="news-container">
      <div className="news-card-row">
        <div className="news-card">
          <img alt="Image from the news" />
          <a>Lorem ipsum dolor sit amet eiusmod tempor</a>
        </div>
        <section />
        <div className="news-card">
          <img alt="Image from the news" />
          <a>Lorem ipsum dolor sit amet eiusmod tempor</a>
        </div>
        <section />
        <div className="news-card">
          <img alt="Image from the news" />
          <a>Lorem ipsum dolor sit amet eiusmod tempor</a>
        </div>
        <section />
      </div>
    </div>
  );
};

export default NewsCardSmall;
