import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import "./App.css";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";
import  Header from "./Components/Header/Header";
import  Footer  from "./Components/Footer/Footer";

function App() {
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return !Loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-600">
      <div className="w-full block">
        <Header></Header>

        <main>
          <Outlet />
        </main>

        <Footer></Footer>
      </div>
    </div>
  ) : null;
}

export default App;
