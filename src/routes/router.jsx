import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/About/Home";
import Profile from "../pages/About/Profile";
import Signin from "../pages/About/Signin";
import Signout from "../pages/About/Signout";
export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signout", element: <Signout /> },
  { path: "/about", element: <About /> },
  { path: "/user-profile", element: <Profile /> },
]);
