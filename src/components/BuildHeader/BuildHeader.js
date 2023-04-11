import "./BuildHeader.scss";
import logo from "../../assets/Monster-Hunter-World-Logo.png";
import { useNavigate } from "react-router-dom";

function BuildHeader() {
  const navigate = useNavigate();
  function handleonClick() {
    navigate("/");
  }
  return (
    <section>
      <button onClick={handleonClick} className="logo">
        <img className="navlogo" src={logo}></img>
      </button>
      <div className="h2">
        <h2 className="h2-title">Build Your Armor Here</h2>
      </div>
    </section>
  );
}
export default BuildHeader;
