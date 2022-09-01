
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import ErrorComponent from "../../components/ErrorComponent";
import "./main.scss"

const Main = ()=>{
  return (
    <div className="grid-container">
      <section className="header">
        <Header/>
      </section>
      <section className="main-content">
        <ErrorComponent>
          <Outlet/>
        </ErrorComponent>
      </section>
    </div>
  );
}

export default Main;