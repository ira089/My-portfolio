import "./footer.scss";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <a href="https://t.me/gvir2015" target="_blank">
        <FaTelegram className="icon" />
        <span>Telegram</span>
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/iryna-hlushnova-1926a82a8"
      >
        <TbBrandLinkedinFilled className="icon" />
        <span>Linkedin</span>
      </a>

      <a target="_blank" href="mailto:gvir1015@gmail.com">
        <MdOutlineMailOutline className="icon" />
        <span>Email</span>
      </a>
    </footer>
  );
};

export default Footer;
