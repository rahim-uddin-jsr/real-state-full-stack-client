import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function Main() {
  return (
    <>
      <div className="fixed w-full">
        <Header />
      </div>
      <Outlet />
    </>
  );
}

export default Main;
