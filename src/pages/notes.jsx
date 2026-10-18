import GrasswingFooter from "./components/footer";
import GrasswingNavbar from "./components/navbar";
import NoteSystem from "./components/noteSystem";
import "./stylesheet.css";

const Notes = () => {

  return (
    <div className="main-container">
      <GrasswingNavbar />
      <section />
      <NoteSystem />
      <section />
      <GrasswingFooter />
    </div>
  );
};

export default Notes;
