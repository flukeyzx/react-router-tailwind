import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Contact from "./components/Contact.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Faq from "./components/Faq.jsx";
import User from "./components/User.jsx";
import Github, { githubURL } from "./components/Github";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="faq" element={<Faq />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={githubURL} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
