import "./newsCard.css";
import { Link } from "react-router-dom";

const NewsCard = ({data}) => {

  const { description, image_url, title, link } = data

  return (
    <div className="news-card-grid-container">
      <div className="news-card">
        <img src={image_url} className="news-img" alt="Image from the news" />
        <Link to={link}>
          <ul className="news-text" >{title}</ul>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
