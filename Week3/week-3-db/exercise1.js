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
const skills = [
  { skill: "Node.js", emp_id: 3 },
  { skill: "Scrum", emp_id: 2 },
  { skill: "JavaScript", emp_id: 4 },
  { skill: "HTML", emp_id: 5 },
  { skill: "HTML", emp_id: 1 },
  { skill: "CSS", emp_id: 5 },
  { skill: "CSS", emp_id: 6 },
  { skill: "React", emp_id: 7 }
];
queries(`CREATE TABLE IF NOT EXISTS skills (
    skill VARCHAR(50),
    emp_id INT,
    CONSTRAINT FOREIGN KEY(emp_id) REFERENCES employees(employee_no))`);

skills.forEach(skill => {
    const sql = `INSERT INTO skills SET ?`;
    connection.query(sql, skill, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  });

connection.end();
