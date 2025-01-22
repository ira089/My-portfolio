import "./header.scss";
import avatar from "../../assets/image/myPhoto.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
        <h3>Iryna</h3>
      </div>
      <div>
        <a href="#footer">My contacts</a>
      </div>
    </header>
  );
};

export default Header;
