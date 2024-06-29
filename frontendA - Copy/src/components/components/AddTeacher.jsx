import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const AddTeacherButton = () => {
  const navigate = useNavigate();

  const handleAddTeacherClick = () => {
    navigate("/user/admin/addTeacher");
  };

  return (
    <div>
      <Button type="primary" onClick={handleAddTeacherClick}>
        Add Teacher
      </Button>
    </div>
  );
};

export default AddTeacherButton;
