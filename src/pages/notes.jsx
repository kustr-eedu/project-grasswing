import GrasswingFooter from "./components/footer";
import WebsiteSelector from "./components/siteSelector";
import NoteSystem from "./components/noteSystem";
import "./stylesheet.css";

const Notes = () => {
  return (
    <div className="main-container">
      <WebsiteSelector />
      <section />
      <NoteSystem />
      <section />
      <GrasswingFooter />
    </div>
  );
};

export default Notes;
