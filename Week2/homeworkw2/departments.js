const mysql = require("mysql");
const tables = require("./tables");

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
queries(`CREATE DATABASE IF NOT EXISTS new_company`);
queries(`CREATE TABLE IF NOT EXISTS departments(
    dept_no INT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    description VARCHAR(255),
    address VARCHAR(255)
    );`);

tables.departments.forEach(department => {
  const sql = `INSERT INTO departments SET ?`;
  connection.query(sql, department, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});

connection.end();
