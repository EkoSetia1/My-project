import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./Components/Layout/DefaultLayout.jsx";
import AboutSection from "./Components/Page/About.jsx";
import PortfolioSection from "./Components/Page/Portfolio.jsx";
import ContactSection from "./Components/Page/Contact.jsx";
import HomeSection from "./Components/Page/Home.jsx";
import Website from "./Components/Portfolios/Website.jsx";
import Design from "./Components/Portfolios/Design.jsx";
import Photography from "./Components/Portfolios/Photography.jsx";

const router = createBrowserRouter([
   {
    path: "/",
    element: <HomeSection />,
  },
  {
    path: "/Home",
    element: <HomeSection />,
  },
  {
    path: "/About",
    element: <AboutSection />,
  },
  {
    path: "/Portfolio",
    element: <PortfolioSection />,
  },
  {
    path: "/Contact",
    element: <ContactSection />,
  },
  {
    path: "/Portfolio/Website",
    element: <Website />,
  },
  {
    path: "/Portfolio/Design",
    element: <Design />,
  },
  {
    path: "/Portfolio/Photography",
    element: <Photography />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <DefaultLayout> */}
    <RouterProvider router={router} />
    {/* </DefaultLayout> */}
  </React.StrictMode>
);
