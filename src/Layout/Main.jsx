import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function Main() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Main;
