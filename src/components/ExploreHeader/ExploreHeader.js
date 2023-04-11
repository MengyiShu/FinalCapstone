import "./ExploreHeader.scss";
import logo from "../../assets/Monster-Hunter-World-Logo.png";
import { useNavigate } from "react-router-dom";

function ExploreHeader() {
  const navigate = useNavigate();
  function handleonClick() {
    navigate("/");
  }
  return (
    <section className="exploreheader">
      <button onClick={handleonClick} className="logo">
        <img className="navlogo" src={logo}></img>
      </button>
      <div className="h2">
        <h2 className="h2-title">Explore the weapons and Armor</h2>
      </div>
    </section>
  );
}
export default ExploreHeader;
