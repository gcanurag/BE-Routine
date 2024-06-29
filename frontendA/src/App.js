import React, { useEffect, useState } from "react";


import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
import "antd/dist/antd.css";
import "./App.css";
import Signup from "./pages/Register/Signup";
const { Header, Content } = Layout;


function App() {

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
          <Router>
            <AppHome exact path="/" />
            <Routine path="/routine" />
            <Login path="/user/login" />
            <Signup path="/user/signup" />
            <Admin exact path="/user/admin" />
            
            {/* <Routes> */}
              {/* <Route exact path='/user/admin' element={<Admin/> } /> */}
            {/* </Routes> */}
            <ImpoExpo path="/user/admin/ie" />
            <LecturePage path="/user/lecture" />
            <Teacher path="/user/admin/teacher" />
            <Program path="/user/admin/program" />
            <AddTeacher path="/user/admin/addTeacher" />
            <AddProgram path="/user/admin/addProgram" />
          <AddSubject path="/user/admin/addSubject" />
            <EditProgram path="/user/admin/editProgram/:id"></EditProgram>
            <EditTeacher path="/user/admin/editTeacher/:id"></EditTeacher>
            <EditClass path="/user/admin/editClass/:id"></EditClass>
          </Router>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
