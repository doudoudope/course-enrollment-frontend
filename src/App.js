import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MenuBar from "./components/MenuBar";
import AllCourses from "./views/AllCourses";
import EnrolledCourses from "./views/EnrolledCourses";
import LoginDialog from "./components/LoginDialog";

function App() {
  return (
    <div>
      <MenuBar />
      <Routes>
        <Route path="/" element={<AllCourses />} />
        <Route path="enrolled-courses" element={<EnrolledCourses />} />
          <Route path="login-dialog" element={<LoginDialog />} />
      </Routes>
    </div>
  );
}

export default App;
