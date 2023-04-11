import logo from "./assets/Monster-Hunter-World-Logo.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import Button from "./components/Button/Button";
import "./App.scss";
import MainPage from "./pages/MainPage/MainPage";
import BuildYourArmor from "./pages/BuildYourArmor/BuildYourArmor";
import Explore from "./pages/Explore/Explore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/BuildYourArmor" element={<BuildYourArmor />}></Route>
        <Route path="/Explore" element={<Explore />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
