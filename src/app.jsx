import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Start from "./pages/start";
import News from "./pages/news";
import Music from "./pages/music";
import Notes from "./pages/notes";
import "./app.css";

const GrasswingRouter = () => {

  const [ data, setData ] = useState([])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start locale="br" lang="pt" data={data} setData={setData} />} />
        <Route path="/news" element={<News locale="br" lang="pt" data={data} setData={setData} />} />
        <Route path="/music" element={<Music />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
};

export default GrasswingRouter;
