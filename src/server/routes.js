import { lazy } from "react";
const SignUp = lazy(() => import("../client/signUp"));
const Login = lazy(() => import("../client/login"));

const routes = [
  {
    path: "signUp",
    name: "signUp",
    layout: "/signUp",
    exact: true,
    element: <SignUp />,
  },
  {
    path: "login",
    name: "login",
    layout: "/login",
    exact: true,
    element: <Login />,
  },
];

export default routes;
