import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().required("This is required").min(2, "minimum 2"),
  email: Yup.string().email().required("This is required").min(5),
  password: Yup.string()
    .required("This is required")
    .min(6, "Password must be at least 6 characters"),
  confirm_password: Yup.string()
    .required("This is required")
    .min(6)
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  acceptPrivacy: Yup.boolean().oneOf([true]),
});
