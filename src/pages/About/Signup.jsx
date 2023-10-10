import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signupSchema } from "../../Schema";
import logo from "/favicon.ico";
const Signup = () => {
  const [error, setError] = useState("");
  const [loading, serLoading] = useState(false);
  const navigate = useNavigate();

  const { values, handleBlur, errors, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
        acceptPrivacy: false,
      },
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {
        serLoading(true);
        setError("");
        const data = {
          username: values.name,
          email: values.email,
          password: values.password,
        };
        console.log("🚀 ~ file: Signup.jsx:14 ~ Signup ~ values:", data);
        axios
          .post("http://localhost:5000/api/auth/signup", data)
          .then((res) => {
            console.log("🚀 ~ file: Signup.jsx:21 ~ axios.post ~ res:", res);
            serLoading(false);
            actions.resetForm();
            navigate("/signin");
          })
          .catch((err) => {
            serLoading(false);
            setError(err?.response?.data?.message);
          });
        serLoading(false);
        setError("");
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
              onBlur={handleBlur}
            />
            {touched.name && errors.name && (
              <div className="text-red-500">{errors.name}</div>
            )}
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
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <div className="text-red-500">{errors.email}</div>
            )}
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
              onBlur={handleBlur}
            />
            {touched.password && errors.password && (
              <div className="text-red-500">{errors.password}</div>
            )}
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
              onBlur={handleBlur}
            />
            {touched.confirm_password && errors.confirm_password && (
              <div className="text-red-500">{errors.confirm_password}</div>
            )}
          </div>
          <div>
            <input
              className="my-3 rounded-sm focus:outline-none"
              type="checkbox"
              name="acceptPrivacy"
              value={values.acceptPrivacy}
              id="acceptPrivacy"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label className="font-medium ms-2" htmlFor="acceptPrivacy">
              <span className="opacity-80">I accept</span>{" "}
              <Link to="#" className="text-secondary">
                Terms and conditions
              </Link>
            </label>
            {touched.acceptPrivacy && errors.acceptPrivacy && (
              <div className="text-red-500">{errors.acceptPrivacy}</div>
            )}
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <button
            disabled={!loading}
            type="submit"
            className="w-full bg-secondary py-2 rounded-md text-white font-semibold mt-3"
          >
            {!loading ? "Register" : "Loading..."}
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
