import "./MainPage.scss";
import Header from "../../components/Header/Header";
import Introduction from "../../components/Introduction/Introduction";
import Button from "../../components/Button/Button";

function MainPage() {
  return (
    <div className="mainpage">
      <Header />
      <Introduction />
      <Button />
    </div>
  );
}
export default MainPage;
