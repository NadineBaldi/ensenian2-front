import { lazy } from "react";
const SignUp = lazy(() => import("../client/signUp"));

const routes = [
  {
    path: "signUp",
    name: "signUp",
    layout: "/signUp",
    exact: true,
    element: <SignUp />,
  },
];

export default routes;
