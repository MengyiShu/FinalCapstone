import "./Button.scss";
import img from "../../assets/img_boost.jpg";
import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();
  function handleonClick() {
    navigate("/BuildYourArmor");
  }
  return (
    <section className="button">
      <div className="h1">
        <h2 className="h1-title">HUNTING</h2>
      </div>
      <div className="content">
        <div className="content-list">
          <div className="content-list_item">
            <div className="content-list_img">
              <img className="buttonimg" src={img} alt="img" />
            </div>
            <div className="content-list_buttoncontainer">
              <button className="content-list_button">
                The Hunter's Arsenal
              </button>
            </div>
          </div>
          <div className="content-list_item">
            <div className="content-list_img">
              <img className="buttonimg" src={img} alt="img" />
            </div>
            <div className="content-list_buttoncontainer">
              <button onClick={handleonClick} className="content-list_button">
                Build Your Own
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Button;
