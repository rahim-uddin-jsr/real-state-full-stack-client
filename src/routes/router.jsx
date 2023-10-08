import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Home from "../pages/About/Home";
import Profile from "../pages/About/Profile";
import Signin from "../pages/About/Signin";
import Signout from "../pages/About/Signout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/user-profile", element: <Profile /> },
    ],
  },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signout /> },
]);
