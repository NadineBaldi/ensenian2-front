import { lazy } from "react";
const SignUp = lazy(() => import("../client/signUp"));
const Login = lazy(() => import("../client/login"));
const MainCourses = lazy(() => import("../client/mainCourses"));
const ForgetPassword = lazy(() => import("../client/forgetPassword"));
const AccountData = lazy(() => import("../client/accountData"));
const CourseView = lazy(() => import("../client/course"));

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
  {
    path: "courses",
    name: "courses",
    layout: "/courses",
    exact: true,
    element: <MainCourses />,
  },
  {
    path: "forgetPassword",
    name: "forgetPassword",
    layout: "/forgetPassword",
    exact: true,
    element: <ForgetPassword />,
  },
  {
    path: "accountData",
    name: "accountData",
    layout: "/accountData",
    exact: true,
    element: <AccountData />,
  },
  {
    path: "course",
    name: "course",
    layout: "/course",
    exact: true,
    element: <CourseView />,
  },
];

export default routes;
