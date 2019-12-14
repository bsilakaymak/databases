//require modules
const express = require('express');
const app = express();
const mysql = require('mysql');
const tables = require('./tables.js');

//creating connection to mysql
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'company'
});

connection.connect(error => {
  if (error) throw error;
  console.log("Connected to MySqL");
});

//creating three tables
app.get('/createdb', (req, res) => {
  const sql = `CREATE DATABASE company`;
  connection.query(sql, (error, result) => {
      if (error) throw error;
      console.log(result);
  });
  res.send('database created');
});

//--------------employees
app.get('/createemployeetable', (req, res) => {
  const sql = `
  CREATE TABLE employees(
    emp_no INT NOT NULL AUTO_INCREMENT PRIMARY KEY, emp_name VARCHAR(50) NOT NULL, salary INT NOT NULL,reports_to INT NOT NULL );`;
  connection.query(sql, (error, result) => {
      if (error) throw error;
      console.log(result);
      res.send('employees table created');
  });

});
//--------------departments
app.get('/createdeptable', (req, res) => {
  const sql = `
  CREATE TABLE departments(dept_no INT NOT NULL, dept_name VARCHAR(50) NOT NULL, manager INT NOT NULL)`;
  connection.query(sql, (error, result) => {
      if (error) throw error;
      console.log(result);
      res.send('departments table created');
  });

});
//---------------projects
app.get('/createprojectstable', (req, res) => {
  const sql = `CREATE TABLE projects(proj_no INT NOT NULL AUTO_INCREMENT PRIMARY KEY, proj_name VARCHAR(50) NOT NULL, starting_date DATE NOT NULL, ending_date DATE)`;
  connection.query(sql, (error, result) => {
      if (error) throw error;
      console.log(result);
      res.send('Projects table created');
  });

});


 // inserting values to the tables
 tables.departments.forEach(department => {
   const sql=`INSERT INTO departments SET ?`;
   connection.query( sql, department, (err, result) => {
     if (err) throw err;
     console.log(result);
 });
 });
 tables.employees.forEach(employee => {
   const sql=`INSERT INTO employeeS SET ?`;
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

//server
app.listen(3000, () => {
  console.log('server started');
});