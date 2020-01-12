const mysql = require("mysql");
const tables = require('./tables')

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "company"
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

//create employees table
queries(`
CREATE TABLE employees(
  emp_no INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  emp_name VARCHAR(50) NOT NULL, 
  salary INT NOT NULL,
  reports_to INT NOT NULL );`)
//create departments table
queries(`
CREATE TABLE departments(
    dept_no INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    dept_name VARCHAR(50) NOT NULL, 
    manager INT NOT NULL);`);
//create projects table
queries( `CREATE TABLE projects(
    proj_no INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    proj_name VARCHAR(50) NOT NULL, 
    starting_date DATE NOT NULL, 
    ending_date DATE);`);

// inserting values to the tables
tables.departments.forEach(department => {
    const sql=`INSERT INTO departments SET ?`;
    connection.query( sql, department, (err, result) => {
      if (err) throw err;
      console.log(result);
  });
  });
  tables.employees.forEach(employee => {
    const sql=`INSERT INTO employees SET ?`;
    connection.query(sql, employee, (err, result) => {
      if (err) throw err;
      console.log(result);
  });
  });
  tables.projects.forEach(project => {
    const sql=`INSERT INTO projects SET ?`;
    connection.query(sql, project, (err, result) => {
      if (err) throw err;
      console.log(result);
  });
  });

  connection.end();