import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import PrivateRouter from "./routing/PrivateRouter";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        }
      />
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<Error />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
