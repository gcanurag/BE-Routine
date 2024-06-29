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