import ShareList from "../ShareList";

const Footer = () => (
  <footer>
    <ShareList url={document.URL} />
  </footer>
);

export default Footer;
