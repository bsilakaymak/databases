const mysql = require("mysql");
const tables = require("./tables");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_company"
});
connection.connect(error => {
  if (error) throw error;
  console.log("Connected to MySqL");
});

function queries(sql) {
  connection.query(sql, (error, result) => {
    if (error) throw error;
    console.log(result);
  });
}

queries(`CREATE TABLE IF NOT EXISTS employees(
    employee_no INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    full_name VARCHAR(50) NOT NULL, 
    salary INT NOT NULL, 
    address VARCHAR(255) NOT NULL,
    manager INT,
    dept_no INT,
    CONSTRAINT manager FOREIGN KEY (manager) REFERENCES employees (employee_no),
    CONSTRAINT dept_no FOREIGN KEY (dept_no) REFERENCES departments (dept_no) ON UPDATE CASCADE
    );`);

tables.employees.forEach(employee => {
  const sql = `INSERT INTO employees SET ?`;
  connection.query(sql, employee, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});

connection.end();
