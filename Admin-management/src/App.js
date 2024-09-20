import React, { useEffect, useState } from "react";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Notfound from "./components/Notfound";
import Noaccess from "./components/Noaccess";
import Get_Calendars from "./components/Get_Calendars";
import Get_Admissions from "./components/Get_Admissions";
import Get_All_News from "./components/Get_All_News";
import Forgotpassword from "./components/Forgotpassword";
import Add_New_Fees from "./components/Add_New_Fees";
import PrivateRoute from "./components/PrivateRoute";
import Get_Fees from "./components/Get_Fees";

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  //const isAuthenticated = localStorage.getItem("token") !== null;
  return (
    <Routes>
      <Route
        path="/version1/login"
        element={<Login setisAuthenticated={setisAuthenticated} />}
      />
      <Route path="/version1" element={<Login />} />
      <Route path="/version1/*" element={<Notfound />} />
      <Route path="/version1/forgotpassword" element={<Forgotpassword />} />
      <Route path="/version1/noaccess" element={<Noaccess />} />
      <Route
        path="/version1/dashboard"
        element={
          <PrivateRoute
            element={<Dashboard />}
            isAuthenticated={isAuthenticated}
          />
        }
      />

      <Route
        path="/version1/get_calendars"
        element={
          <PrivateRoute
            element={<Get_Calendars />}
            isAuthenticated={isAuthenticated}
          />
        }
      />
      <Route
        path="/version1/get_admissions"
        element={
          <PrivateRoute
            element={<Get_Admissions />}
            isAuthenticated={isAuthenticated}
          />
        }
      />
      <Route
        path="/version1/create_fees"
        element={
          <PrivateRoute
            element={<Add_New_Fees />}
            isAuthenticated={isAuthenticated}
          />
        }
      />
      <Route
        path="/version1/get_fees"
        element={
          <PrivateRoute
            element={<Get_Fees />}
            isAuthenticated={isAuthenticated}
          />
        }
      />
      <Route
        path="/version1/get_news"
        element={
          <PrivateRoute
            element={<Get_All_News />}
            isAuthenticated={isAuthenticated}
          />
        }
      />
    </Routes>
  );
}

export default App;
