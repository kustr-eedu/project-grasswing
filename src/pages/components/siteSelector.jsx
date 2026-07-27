import "./siteSelector.css";

const WebsiteSelector = () => {
  return (
    <div className="site-selector">
      <button className="bar-button">
        <a href="/">Main</a>
      </button>
      <button className="bar-button">
        <a href="/news">News</a>
      </button>
      <button className="bar-button">
        <a href="/notes">Notes</a>
      </button>
      <button className="bar-button">
        <a href="/music">Music</a>
      </button>
    </div>
  );
};

export default WebsiteSelector;
