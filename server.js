// get the client
const mysql = require('mysql2');
const inquirer = require("inquirer")
require("console.table");

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1',
  database: 'employee_db'
});

function questions (){
  inquirer.prompt([
    {
      type: 'list',
      name: 'userChoice',
      message: 'View Employee Tracker Options',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add A Department',
        'Add A Role',
        'Add An Employee',
        'Update An Employee Role',
        'Exit'
      ]
    }])
    }

// simple query
connection.query(
  'SELECT * FROM employee',
  function(err, results, fields) {
    console.table(results); // results contains rows returned by server 
  }
);

// with placeholder
connection.query(
  'SELECT * FROM role',
  function(err, results) {
    console.table(results);
  }
);
// add prompt with list of options -> based on selected option run a diff. query. 

// Function call to initialize app
init();
