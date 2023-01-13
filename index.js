const db = require('./config/connection.js');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

let departmentId;
let roleId;
let managerId;
let updatedEmployeeId;
let departmentList = [];
let roleList = [];
let employeeList = [];

console.log('Welcome to the Employee Tracker!!');

function startMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        name: 'options',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Quit',
        ],
      },
    ])
    .then((answers) => {
      if (answers.options === 'View all departments') {
        getDepartments();
      } else if (answers.options === 'View all roles') {
        getRoles();
      } else if (answers.options === 'View all employees') {
        getEmployees();
      } else if (answers.options === 'Add a deparment') {
        addDepartment();
      } else if (answers.options === 'Add role') {
        addRole();
      } else if (answers.options === 'Add an employee') {
        addEmployee();
      } else if (answers.options === 'Update an employee role') {
        updateRole();
      } else {
        return;
      }
    });
}
