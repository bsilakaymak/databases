
//"1; CREATE TABLE cities(name VARCHAR(50), pop INT); --" creates a new table
//"1; INSERT INTO cities (name, pop) VALUES ('Gotham', 100);--"  adds values
//"1; DELETE FROM cities; --"  would delete the whole table

//to prevent injection we can use prepared queries
function getPopulation(cityOrCountry, name, cb) {
    // assuming that connection to the database is established and stored as conn
    const sql = `SELECT Population FROM ? WHERE Name = ?`;
    const inserts = [cityOrCountry, name]
    conn.query(
      sql, 
      inserts,
      function(err, result) {
        if (err) cb(err);
        if (result.length == 0) cb(new Error("Not found"));
        cb(null, result[0].name);
      }
    );
  }