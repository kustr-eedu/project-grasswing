import NewsCardSmall from "./components/newsCardSmall";
import GrasswingFooter from "./components/footer";
import WebsiteSelector from "./components/siteSelector";
import GreetUser from "./components/greetUser";
import "./stylesheet.css";

const Initial = () => {

  return (
    <div className="main-container">
      <WebsiteSelector />
      <section />
      <GreetUser />
      <section />
      <NewsCardSmall />
      <section />
      <GrasswingFooter />
    </div>
  );
};

export default Initial;
