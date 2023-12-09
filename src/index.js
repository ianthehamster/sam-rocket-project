import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Products from "./Components/Products";
import Users from "./Components/Users";
import NoPage from "./Components/NoPage";
import Friends from "./Components/Friends";
import Profile from "./Components/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/users">Users</Link>

    <Routes>
      <Route path="/" element={<App2 />} />
      <Route path="/products" element={<Products />} />
      <Route path="/users" element={<Users />}>
        <Route path="friends" element={<Friends />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);

/* <Link /> has "to" property and Route has "path" property: 
1. "to" property to find the path of the URL which the link directs the user to 
2. "path" property match the link "to" property and the element property which is component that is rendered
*/

// it will take App.js and put the code into the div id = root in the index.html file

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
