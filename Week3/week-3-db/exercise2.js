const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "company"
});

function flatify(emp_no, dept_no) {
  connection.beginTransaction(function(err) {
    if (err) {
      throw err;
    }
        connection.query(
        `SELECT emp_no FROM Employees 
                    JOIN departments
                    ON employees.reports_to = departments.manager
                    WHERE dept_no=?`,
        dept_no,
        function(err, result) {
            if (err) {
            connection.rollback(function() {
                throw err;
            });
            }

        connection.query(
          `UPDATE departments SET manager = ? WHERE dept_no = ?`,
          [[emp_no], [dept_no]],
          function(err, result) {
            if (err) {
              connection.rollback(function() {
                throw err;
              });
            }
        connection.commit(function(err) {
            if (err) {
            connection.rollback(function() {
                throw err;
            });
            }
        console.log("Transaction Complete.");
        connection.end();
            });
          }
        );
      }
    );
  });
}

flatify(3, 11);
flatify(5, 10);
