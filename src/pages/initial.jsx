import NewsCardSmall from "./components/newsCardSmall";
import GrasswingFooter from "./components/footer";
import GrasswingNavbar from "./components/navbar";
import GreetUser from "./components/greetUser";
import { useEffect } from "react";
import axios from "axios";
import "./stylesheet.css";

const Initial = ({ locale, lang, data, setData }) => {

  const fetchAllNews = async () => {
    try {
      const res = await axios.get(
        `https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_API_KEY}&country=${locale}&language=${lang}&removeduplicate=1`
      );

      setData(res.data.results.slice(0, 4));

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllNews();
  }, []);

  return (
    <div className="main-container">
      <GrasswingNavbar />
      <section />
      <GreetUser />
      <section />
      <div className="newsCard">
        {
          data.map((data, index) => {
            return <NewsCardSmall key={index} data={data} />
           })
        }
      </div>
      <section />
      <GrasswingFooter />
    </div>
  );
};

export default Initial;
