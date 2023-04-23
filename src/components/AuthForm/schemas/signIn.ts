import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const signInSchema = yup.object({
  email: yup
    .string()
    .required("Enter a valid email address.")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Type a valid email address."),
  password: yup
    .string()
    .required("The password must be between 4 and 60 characters long.")
    .min(4, "The password must be between 4 and 60 characters long.")
    .max(60, "The password must be between 4 and 60 characters long."),
});

export type SignInSchema = yup.InferType<typeof signInSchema>;

export default yupResolver(signInSchema);
