import { useFormik } from "formik";
import { Link } from "react-router-dom";
import logo from "/favicon.ico";
const Signup = () => {
  const { values, errors, handleChange, handleSubmit, resetForm, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        acceptPrivacy: false,
      },
      onSubmit: (values, actions) => {
        console.log("🚀 ~ file: Signup.jsx:14 ~ Signup ~ values:", values);
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      },
    });
  return (
    <div className="overflow-hidden">
      <div className="bg-signup-bg h-screen max-h-screen inset-0 image-wrap bg-no-repeat bg-cover bg-center zoom-in-zoom-out"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-2"></div>
      <div className="h-auto p-8 rounded-md shadow-md bg-white w-1/3 fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <Link to={`/`}>
          <img className="mx-auto pb-8" src={logo} alt="" />
        </Link>
        <form className="" onSubmit={handleSubmit}>
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
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="email">
              Your Email Address:
            </label>
            <input
              className="w-full my-3 rounded-sm "
              type="email"
              name="email"
              value={values.email}
              id="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="password">
              Password:
            </label>
            <input
              className="w-full my-3 rounded-sm "
              type="password"
              name="password"
              value={values.password}
              id="password"
              autoComplete="none"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="font-medium" htmlFor="confirm_password">
              Confirm Password:
            </label>
            <input
              className="w-full my-3 rounded-sm"
              type="password"
              name="confirm_password"
              value={values.confirm_password}
              id="confirm_password"
              autoComplete="none"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="my-3 rounded-sm focus:outline-none"
              type="checkbox"
              name="acceptPrivacy"
              value={values.acceptPrivacy}
              id="acceptPrivacy"
              onChange={handleChange}
            />
            <label className="font-medium ms-2" htmlFor="acceptPrivacy">
              <span className="opacity-80">I accept</span>{" "}
              <Link to="#" className="text-secondary">
                Terms and conditions
              </Link>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary py-2 rounded-md text-white font-semibold mt-3"
          >
            Register
          </button>

          <p className="text-center mt-3">
            <span className="opacity-80">Already have an account?</span>{" "}
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
