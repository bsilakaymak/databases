const mysql = require("mysql");

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

queries(`CREATE DATABASE IF NOT EXISTS new_company`);


connection.end();
