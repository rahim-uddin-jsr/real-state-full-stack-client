import { Link } from "react-router-dom";
import logo from "/favicon.ico";
const Signup = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-signup-bg h-screen max-h-screen inset-0 image-wrap bg-no-repeat bg-cover bg-center zoom-in-zoom-out"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-2"></div>
      <div className="h-auto p-8 rounded-md shadow-md bg-white w-1/3 fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <Link to={`/`}>
          <img className="mx-auto pb-8" src={logo} alt="" />
        </Link>
        <form className="">
          <div className="">
            <label className="font-medium" htmlFor="name">
              Your Name:
            </label>
            <input
              className="w-full my-3 rounded-sm "
              type="text"
              name="name"
              id="name"
              autoComplete="none"
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="name">
              Your Email Address:
            </label>
            <input
              className="w-full my-3 rounded-sm "
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="name">
              Password:
            </label>
            <input
              className="w-full my-3 rounded-sm "
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="name">
              Confirm Password:
            </label>
            <input
              className="w-full my-3 rounded-sm"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div>
            <input
              className="my-3 rounded-sm focus:outline-none"
              type="checkbox"
              name="name"
              id="name"
            />
            <label className="font-medium ms-2" htmlFor="name">
              I accept{" "}
              <Link to="#" className="text-secondary">
                Terms and conditions
              </Link>
            </label>
          </div>
          <button className="w-full bg-secondary py-2 rounded-md text-white font-semibold mt-3">
            Register
          </button>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to={`/signin`} className="text-secondary">
              Signin
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
