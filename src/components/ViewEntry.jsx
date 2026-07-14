import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const ViewEntry = () => {

  const [data, changeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/view-student")
      .then((response) => {
        console.log(response.data);
        changeData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
        <Navigation />

      <div className="container mt-4">

        <h2 className="text-center mb-4">View Lab Entries</h2>

        {loading ? (
          <h4 className="text-center">Loading...</h4>
        ) : (
          <div className="table-responsive">

            <table className="table table-bordered table-striped table-hover">

              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Course</th>
                  <th>Semester</th>
                  <th>Date</th>
                  <th>Time In</th>
                  <th>Time Out</th>
                  <th>System No</th>
                </tr>
              </thead>

              <tbody>

                {data.map((value, index) => (
                  <tr key={index}>
                    <td>{value.name}</td>
                    <td>{value.department}</td>
                    <td>{value.course}</td>
                    <td>{value.semester}</td>
                    <td>{value.date}</td>
                    <td>{value.time_in}</td>
                    <td>{value.time_out}</td>
                    <td>{value.system_no}</td>
                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

      </div>

    </div>
  );
};

export default ViewEntry;