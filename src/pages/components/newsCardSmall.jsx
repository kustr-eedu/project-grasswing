import { Link } from "react-router-dom";
import "./newsCard.css";

const NewsCardSmall = ({data}) => {

  const { pubDate, creator, image_url, title, link } = data

  return (
    <div className="news-card-grid-container">
      <div className="news-card">
        <img src={image_url} className="news-img" alt="News image" />
        <a className="news-card-autor">{creator}, {pubDate}</a>
        <Link to={link}>
          <ul className="news-text" >{title}</ul>
        </Link>
      </div>
    </div>
  );
};

export default NewsCardSmall;
