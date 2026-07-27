import { React, useEffect } from "react";
import NewsCard from "./components/newsCard";
import GrasswingFooter from "./components/footer";
import WebsiteSelector from "./components/siteSelector";
import axios from "axios";
import "./stylesheet.css";

const News = ({ locale, lang, data, setData }) => {

  const fetchAllNews = async () => {
    try {
      const res = await axios.get(
        `https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_API_KEY}&country=${locale}&language=${lang}&removeduplicate=1`
      );

      setData(res.data.results);
      console.log(res.data.results)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllNews();
  }, []);


  return (
    <div className="main-container">
      <WebsiteSelector />
      <section />
      <div className="newsCard">
        {
          data.map((data, index) => {
            return <NewsCard  key={index} data={data}/>
          })
        }
      </div>
      <section />
      <GrasswingFooter />
    </div>
  );
};

export default News;
