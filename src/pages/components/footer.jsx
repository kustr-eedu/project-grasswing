import ReactIcon from "./icons/react.svg";
import ViteIcon from "./icons/vite.svg";
import ZedIcon from "./icons/zed.svg";

import "./footer.css";

const GrasswingFooter = () => {
  return (
    <footer className="grasswing-footer">
      <div className="grasswing-footer-icons">
        <div className="grasswing-footer-images">
          <img src={ReactIcon} />
          <section className="horizontal" />
          <img src={ViteIcon} />
          <section className="horizontal" />
          <img src={ZedIcon} />
        </div>
        <p className="tool-copyright">© Meta Open Source, VoidZero and Zed Ind.</p>
      </div>
      <section className="horizontal" />
      <div className="grasswing-footer-links">
        <a className="grasswing-footer-title">Documentation</a>
        <section className="vertical" />
        <a className="grasswing-footer-docs" href="https://zed.dev/docs/">
          Zed Documentation
        </a>
        <a className="grasswing-footer-docs" href="https://vite.dev/guide/">
          Vite Documentation
        </a>
        <a className="grasswing-footer-docs" href="https://react.dev/learn">
          React Documentation
        </a>
      </div>
      <section className="horizontal" />
      <div className="grasswing-footer-links">
        <a className="grasswing-footer-title">Support</a>
        <section className="vertical" />
        <a className="grasswing-footer-docs" href="https://zed.dev/docs/">
          Patreon
        </a>
        <a className="grasswing-footer-docs" href="https://vite.dev/guide/">
          YouTube
        </a>
        <a className="grasswing-footer-docs" href="https://react.dev/learn">
          Instagram
        </a>
      </div>
      <section className="horizontal" />
      <div className="grasswing-footer-links">
        <a className="grasswing-footer-title">Updates</a>
        <section className="vertical" />
        <a className="grasswing-footer-docs" href="https://github.com/kustr-eedu/project-grasswing">
          GitHub
        </a>
        <a className="grasswing-footer-docs" href="https://vite.dev/guide/">
          GitLab
        </a>
        <a className="grasswing-footer-docs" href="https://react.dev/learn">
          Code.Overheid.NL
        </a>
      </div>
      <section className="horizontal" />
      <div className="grasswing-footer-copyright">
        <p>
          © 2023-2026 Project Grasswing.
          Made with the intent to provide the users with an all-in-one experience for day-to-day use.
        </p>
      </div>
    </footer>
  );
};
export default GrasswingFooter;
