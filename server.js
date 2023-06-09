// get the client
const mysql = require('mysql2');
const inquirer = require("inquirer")
require("console.table");
//set the enviornment variable PORT to tell the web server what port to listen on
const PORT = process.env.PORT || 3001;
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
      if (answers.userChoice === 'Add A Department') {
        addDepartment();
      }
      if (answers.userChoice === 'Add A Role') {
        addRole();
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
      questions()
    }
  );
}
function getAllEmployees() {
  // simple query
  connection.query(
    'SELECT employee.id, employee.first_name AS "first name", employee.last_name AS "last name",role.title AS "title", role.salary AS "salary" FROM employee JOIN role ON employee.role_id = role.id ORDER BY employee.id ASC ',
    function (err, results, fields) {
      console.table(results); // results contains rows returned by server 
      if (err) throw err;
      questions()
    }
  );
}
// with placeholder 
function getAllRoles() {
  connection.query(
    'SELECT * FROM role',
    function (err, results) {
      console.table(results);
      questions()
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
      connection.query(
        'INSERT INTO department SET ?', { name: answers.departmentName }
      )
      questions()
    })
    .catch((error) => {
      console.log(error)
    })
}
function addRole() {
  connection.query(
    'SELECT id, name FROM department',
    function (err, results, fields) {
      inquirer.prompt(
        [
          {
            type: "input",
            name: "title",
            message: "What new role would you like to add?"
          },
          {
            type: "input",
            name: "salary",
            message: "What is the salary for this new role?"
          },
          {
            type: "list",
            name: "department_id",
            message: "What department is this role in?",
            choices: results.map((department) => {
              return {
                name: department.name,
                value: department.id
              }
            })
          }])
        .then((answers) => {
          connection.query(
            // query to insert new role
            'INSERT INTO role SET ?', answers
          )
          questions()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  )
  }

questions()