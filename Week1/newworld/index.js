//require modules
const express = require('express');
const app = express();
const mysql = require('mysql');

//create connection to mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'new_world'
  });
//error handling for mysql connection
  connection.connect(error => {
    if (error) throw error;
    console.log("Connected to MySqL");
  });


  
/*--------------------------------------- QUESTIONS---------------------------------------------*/

// What are the names of countries with population greater than 8 million?
app.get('/q1', (req, res) => {
    const sql =  `SELECT Name, Population  FROM Country WHERE Population > 8000000 ORDER BY Population DESC;` ;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Q1-Data retrieved-names of countries with population greater than 8 million');
});
// What are the names of countries that have “land” in their names?
app.get('/q2', (req, res) => {
    const sql = `SELECT Name FROM Country WHERE Name LIKE '%land%'` ;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Q2-Data retrieved-names of countries that have “land” in their names');
});
// What are the names of the cities with population in between 500,000 and 1 million?
app.get('/q3', (req, res) => {
    const sql = `SELECT Name FROM City WHERE Population BETWEEN 500000 AND 1000000` ;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Q3-Data retrieved-cities with population in between 500,000 and 1 million');
});
// What's the name of all the countries on the continent ‘Europe’?
app.get('/q4', (req, res) => {
    const sql = `SELECT Name FROM Country WHERE continent = 'Europe'`;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Q4-Data retrieved-name of all the countries on the continent Europe');
});
// List all the countries in the descending order of their surface areas.
app.get('/q5', (req, res) => {
    const sql = `SELECT Name FROM Country ORDER BY SurfaceArea DESC` ;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Q5-Data retrieved-countries in the descending order of their surface areas');
});
// What are the names of all the cities in the Netherlands?
app.get('/q6', (req, res) => {
    const sql = `SELECT Name FROM City WHERE CountryCode = 'NLD'` ;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Q6-Data retrieved-names of all the cities in the Netherlands');
});
// What is the population of Rotterdam?
app.get('/q7', (req, res) => {
    const sql = `SELECT Population FROM City WHERE Name = 'Rotterdam'` ;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Q7-Data retrieved-population of Rotterdam');
});
// What's the top 10 countries by Surface Area?
app.get('/q8', (req, res) => {
    const sql = `SELECT * FROM Country ORDER BY SurfaceArea DESC LIMIT 10` ;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Q8-Data retrieved-top 10 countries by Surface Area');
});
// What's the top 10 most populated cities?
app.get('/q9', (req, res) => {
    const sql = `SELECT * FROM City ORDER BY Population DESC LIMIT 10` ;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Q9-Data retrieved-top 10 most populated cities');
});
// What is the population number of the world?
app.get('/q10', (req, res) => {
    const sql = `SELECT SUM(Population) FROM Country` ;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        console.log(result);
    });
    res.send('Q10-Data retrieved-the population number of the world');
});
/*---------------------------------- QUESTIONS-FINISHED--------------------------------------*/


//server
app.listen(8000, ()=>{
    console.log('server started');
})