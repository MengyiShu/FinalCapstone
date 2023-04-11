import "./Header.scss";
import backgroudVideo from "../../assets/backgroundVideo.mp4";
import logo from "../../assets/Monster-Hunter-World-Logo.png";

function Header() {
  return (
    <header>
      {/* <video autoplay muted loop id="myVideo">
        <source src={backgroudVideo} type="video/mp4" />
      </video> */}
      <div className="top">
        <img src={logo} alt="MHW logo" />
        <div className="h1">
          <h1 className="h1-title">Monster Hunter World:Armor Builder</h1>
        </div>
      </div>
    </header>
  );
}
export default Header;
