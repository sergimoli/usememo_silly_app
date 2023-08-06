import React, { useEffect, useState } from "react";

function Employees({ page = 1, message }) {
  const [employees, setEmployees] = useState([]);

  //recordem al posar el [] al useeefect--> quan el component es monti.
  useEffect(() => {
    // setTest(page);
    getEmployees();
    console.log("et un putas");
  }, [page]);

  useEffect(() => {
    console.log("render again employees");
  }, [employees]);

  const getEmployees = async () => {
    console.log(page);
    const url = "https://reqres.in/api/users?page=" + page;
    const request = await fetch(url);
    console.log(url);

    // const employees = await request.json();
    // destructuro i li renombro a employees
    const { data: employees } = await request.json();
    console.log(employees);
    setEmployees(employees);
  };
  console.log("render again idiota");

  message();

  return (
    <div>
      <p>showing page: {page}</p>
      <ul className="employees">
        {employees.length >= 1 &&
          employees.map((employee) => {
            return (
              <li key={employee.id}>
                {employee.first_name + " " + employee.last_name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

// export default Employees;
// en aquest cas com que l'hem posat com a memo no es renderitza cada cop quan es cridt des de management
export default React.memo(Employees);
