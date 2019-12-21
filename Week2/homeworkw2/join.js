const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'hyfuser',
    password : 'hyfpassword',
    database : 'new_company'
});
connection.connect(error => {
    if (error) throw error;
    console.log("Connected to MySqL");
  });
function queries(sql){
    connection.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
}
queries(`SELECT a.employee_no 'Emp id', a.full_name AS 'Employee Name',
                b.manager AS 'manager id', 
                b.full_name AS 'manager name' FROM employees a, employees b 
                WHERE a.employee_no = b.manager;`);

queries(`SELECT employees.full_name AS 'Employee name', departments.title AS 'Department Name' FROM employees
         JOIN departments ON employees.dept_no = departments.dept_no; `)

connection.end(); 