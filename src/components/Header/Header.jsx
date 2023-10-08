import { Link, NavLink } from "react-router-dom";
import logoDark from "../../assets/images/logos/logo-dark.webp";
// import logoLight from "../../assets/images/logos/logo-light.webp";
function Header() {
  const loggedin = "false";
  const handleSignOut = () => {};
  return (
    <header className="shadow-sm">
      <div className="container mx-auto flex w-full min-h-[74px] items-center font-medium">
        {/* for dark mood  */}
        {/* <img src={logoLight} alt="logo light" /> */}
        <img className="max-h-7" src={logoDark} alt="logo dark" />
        <div className="flex  items-center w-3/4 ms-auto">
          <div className="me-auto">
            <NavLink
              style={{ padding: "0px 20px" }}
              className={({ isActive, isPending }) =>
                isActive
                  ? "underline underline-offset-8 decoration-green-500 decoration-4"
                  : isPending
                  ? "pending text-green-500"
                  : ""
              }
              to={`/`}
            >
              <span className="mx-4">Home</span>
            </NavLink>
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "underline underline-offset-8 decoration-green-500 decoration-4"
                  : isPending
                  ? "pending"
                  : ""
              }
              to={`/about`}
            >
              <span className="px-4">About</span>
            </NavLink>
          </div>
          <div className="flex gap-1">
            <button className="rounded-full bg-green-400 w-10 h-10 flex justify-center items-center">
              <svg
                className="w-4 h-4 fill-white  "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path>
              </svg>
            </button>
            {loggedin ? (
              <Link
                to={`/signup`}
                className="font-medium rounded-full text-white bg-green-400 px-6 h-10 flex justify-center items-center"
              >
                Signup
              </Link>
            ) : (
              <button
                onClick={handleSignOut}
                className="font-medium rounded-full text-white bg-green-400 px-6 h-10 flex justify-center items-center"
              >
                Signout
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
