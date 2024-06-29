import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Layout } from "antd";
import Login from "./pages/Login/Login";
import Admin from "./pages/Profile/Admin";
import ImpoExpo from "./pages/ImpoExpo/ImpoExpo";
import LecturePage from "./pages/LecturePage/LecturePage";
import AppHeader from "./components/Common/Header";
import AppHome from "./components/Home/Home";
import Routine from "./pages/Routine/Routine";
import AddTeacher from "./components/AddTeacher/AddTeacher";
import AddProgram from "./components/AddProgram/AddProgram";
import AddSubject from "./components/AddSubject/AddSubject";
import EditProgram from "./components/EditProgram/EditProgram";
import EditTeacher from "./components/EditTeacher/EditTeacher";
import { EditClass } from "./components/EditClass/EditClass";
import Program from "./pages/Program/Program";
import Teacher from "./pages/Teacher/Teacher";
import ReactGa from "react-ga";
import "antd/dist/antd.css";
import "./App.css";
import Signup from "./pages/Register/Signup";
const { Header, Content } = Layout;

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };

    const token = getCookie("cookieToken");
    setToken(token);
    console.log(token);
  }, []);

  return (
   
      <Layout className="mainLayout">
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <AppHeader />
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            marginTop: "50px",
            height: "100vh",
            alignContent: "center",
          }}
        >
          <div className="site-layout-background" style={{ padding: 24 }}>
            <Routes>
              <Route exact path="/" element={<AppHome />} />
              <Route path="/routine" element={<Routine />} />
              <Route path="/user/login" element={<Login />} />
              <Route path="/user/signup" element={<Signup />} />
              <Route path="/user/admin" element={<Admin />} />
              <Route path="/user/admin/ie" element={<ImpoExpo />} />
              <Route path="/user/lecture" element={<LecturePage />} />
              <Route path="/user/admin/teacher" element={<Teacher />} />
              <Route path="/user/admin/program" element={<Program />} />
              <Route path="/user/admin/addTeacher" element={<AddTeacher />} />
              <Route path="/user/admin/addProgram" element={<AddProgram />} />
              <Route path="/user/admin/addSubject" element={<AddSubject />} />
              <Route path="/user/admin/editProgram/:id" element={<EditProgram />} />
              <Route path="/user/admin/editTeacher/:id" element={<EditTeacher />} />
              <Route path="/user/admin/editClass/:id" element={<EditClass />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    
  );
}

export default App;
