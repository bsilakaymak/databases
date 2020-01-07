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
queries(`SELECT first.full_name AS 'Employee Name',
                second.full_name AS 'manager name' FROM employees first, employees second 
                WHERE first.employee_no = second.manager;`);

queries(`SELECT employees.full_name AS 'Employee name', departments.title AS 'Department Name' FROM employees
         RIGHT JOIN departments ON employees.dept_no = departments.dept_no; `)

connection.end(); 