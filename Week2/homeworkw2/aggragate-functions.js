const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_company"
});
connection.connect(error => {
  if (error) console.log(error);
  console.log("Connected to MySqL");
});

function queries(sql) {
  connection.query(sql, (error, result) => {
    if (error) throw error;
    console.log(result);
  });
}

// All department numbers and the number of employees working there.
queries(`SELECT departments.dept_no, departments.title, COUNT(employee_no) from employees
 JOIN departments ON departments.dept_no = employees.dept_no GROUP BY departments.dept_no`);

// Sum of the salaries of all employees.
queries(`SELECT SUM(salary) FROM employees;`);
// Average of the salaries of all employees.
queries(`SELECT AVG(salary) FROM employees;`);
// Sum of the salaries of the employees per department.
queries(
  `SELECT title, SUM(salary) FROM employees JOIN departments ON departments.dept_no = employees.dept_no GROUP BY departments.dept_no`
);
// Minimum and maximum od the salaries per department.
queries(
  `SELECT dept_no, MAX(salary), MIN(salary) FROM employees GROUP BY employees.dept_no`
);
// For each salary value, return the number of employees paid.
queries(`SELECT salary, COUNT(employee_no) FROM employees GROUP BY salary`);
