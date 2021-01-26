import Logo from "../img/logo.jpg";
import "../App.css";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={Logo} alt="" />
    </div>
  );
};
export default Header;
