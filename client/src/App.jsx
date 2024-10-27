/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Dashboard,
  HomeLayout,
  Landing,
  Login,
  Logout,
  Register,
  HealthDataEntry,
  Congratulations,
} from "./pages";
import { ToastContainer, toast } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "health-data-entry", // New route added
        element: <HealthDataEntry />,
      },
      {
        path: "congratulations", // New route for congratulations
        element: <Congratulations />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
