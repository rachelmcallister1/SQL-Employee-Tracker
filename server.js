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
function questions() {
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
    .then((answers) => {
      console.log(answers);
      if (answers.userChoice === 'View All Departments') {
        getAllDepartments()
      }
      if (answers.userChoice === 'View All Roles') {
        getAllRoles()
      }
      if (answers.userChoice === 'View All Employees') {
        getAllEmployees()
      }
      if(answers.userChoice === 'Add A Department') {
        addDepartment();
      }
      if(answers.userChoice === 'Add A Role') {
        addRole();
      }
      if(answers.userChoice === 'Add An Employee') {
        addEmployee();
      }
      if(answers.userChoice === 'Update An Employee Role') {
        addEmployeeRole();
      }
    })
    .catch((error) => {
      console.log(error);
    })
}
function getAllDepartments() {
  connection.query(
    'SELECT * FROM department',
    function (err, results, fields) {
      console.table(results);
    }
  );
}
function getAllEmployees() {
  // simple query
  connection.query(
    'SELECT * FROM employee',
    function (err, results, fields) {
      console.table(results); // results contains rows returned by server 
    }
  );
}
// with placeholder 
function getAllRoles() {
connection.query(
  'SELECT * FROM role',
  function (err, results) {
    console.table(results);
  }
);
}
// add prompt with list of options -> based on selected option run a diff. query. 
function addDepartment() {
  inquirer.prompt(
    [
      {
        type: "input",
        name: "departmentName",
        message: "What would you like the new department to be called?"
      }
    ]
  )
  .then((answers) => {
    console.log(answers);
    // query to insert new department
  })
  .catch((error) => {
    console.log(error)
  })
}
function addRole() {
  inquirer.prompt(
    [
      {
        type: "input",
        name: "roleName",
        message: "What new role would you like to add?"
      }
    ]
  )
  .then((answers) => {
    console.log(answers);
    // query to insert new department
  })
  .catch((error) => {
    console.log(error)
  })
}
function addEmployee() {
  inquirer.prompt(
    [
      {
        type: "input",
        name: "employeeName",
        message: "What is the name of the new employee you'd like to add?"
      }
    ]
  )
  .then((answers) => {
    console.log(answers);
    // query to insert new department
  })
  .catch((error) => {
    console.log(error)
  })
}
questions()