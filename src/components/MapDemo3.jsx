import React from "react";

export const MapDemo3 = () => {
  var employees = [
    { id: 1, name: "raj", age: 25, salary: 30000 },
    { id: 2, name: "jay", age: 28, salary: 50000 },
    { id: 2, name: "amit", age: 25, salary: 35000 },
    { id: 2, name: "parth", age: 32, salary: 60000 },
  ];
  return (
    <div>
      <h1>MAP DEMO 3</h1>
      <table className="table table-dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>SALARY</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((emp)=>{
                        return<tr>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.age}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    })
                }
            </tbody>
      </table>
    </div>
  );
};
