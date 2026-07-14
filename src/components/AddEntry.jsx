import React, { useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const AddEntry = () => {
  const [input, changeInput] = useState({
    name: "",
    department: "",
    course: "",
    semester: "",
    date: "",
    time_in: "",
    time_out: "",
    system_no: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const readValue = () => {
    axios
      .post("http://localhost:3000/add-student", input)
      .then((response) => {
        console.log(response.data);

        setMessage(response.data.message || "Lab Entry Added Successfully");
        setError("");

        changeInput({
          name: "",
          department: "",
          course: "",
          semester: "",
          date: "",
          time_in: "",
          time_out: "",
          system_no: "",
        });
      })
      .catch((error) => {
        console.log(error);

        if (error.response) {
          setError(error.response.data.message);
        } else {
          setError("Something went wrong");
        }

        setMessage("");
      });
  };

  return (
    <div>
        <Navigation />
      <div className="container mt-4">

        <h2 className="text-center mb-4">Add Lab Entry</h2>

        {message && (
          <div className="alert alert-success">{message}</div>
        )}

        {error && (
          <div className="alert alert-danger">{error}</div>
        )}

        <div className="row g-4">

          <div className="col-md-6">
            <label className="form-label"><b>Name</b></label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={input.name}
              onChange={inputHandler}
              placeholder="Enter Name"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Department</b></label>
            <input
              type="text"
              className="form-control"
              name="department"
              value={input.department}
              onChange={inputHandler}
              placeholder="Enter Department"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Course</b></label>
            <input
              type="text"
              className="form-control"
              name="course"
              value={input.course}
              onChange={inputHandler}
              placeholder="Enter Course"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Semester</b></label>
            <input
              type="text"
              className="form-control"
              name="semester"
              value={input.semester}
              onChange={inputHandler}
              placeholder="Enter Semester"
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Date</b></label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={input.date}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Time In</b></label>
            <input
              type="time"
              className="form-control"
              name="time_in"
              value={input.time_in}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>Time Out</b></label>
            <input
              type="time"
              className="form-control"
              name="time_out"
              value={input.time_out}
              onChange={inputHandler}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label"><b>System Number</b></label>
            <input
              type="number"
              className="form-control"
              name="system_no"
              value={input.system_no}
              onChange={inputHandler}
              placeholder="Enter System Number"
            />
          </div>

          <div className="col-12">
            <button
              className="btn btn-primary w-100"
              onClick={readValue}
            >
              Add Lab Entry
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AddEntry;