const fs = require('fs');
const inquirer = require('inquirer');
const jest = require('jest');
const writeFileAsync = util.promisify(fs.writeFile);

const Employee = require('../Employee.js');
const Engineer = require('../Engineer.js');
const Intern = require('../Intern.js')
const Manager = require('../Manager.js');


// Create an array of questions for user input upon initial application 
const promptQuestions = () => {
  return inquirer.prompt()([
   { type: 'input',
     name: 'managerName',
     message: 'What is the team manager\'s name?'
   },
   { type: 'input',
     name: 'employeeId',
     message: 'What is the team manager\'s employee ID?'
   },
   { type: 'input',
     name: 'emailAddress',
     message: 'What is the team manager\'s email address?'
   }, 
   { type: 'input',
     name: 'officeNumber',
     message: 'What is the team manager\'s office number?'
   },  
   { type: 'checkbox',
     name: 'addEngineer',
     message: 'Would you like to add an engineer, an intern, or continue to finish building the team?',
     choices: ['Add Engineer', 'Add Intern', 'Continue to Team']
   }  
  ])
  .then(function(data) {
    

  })
}

function Car(make, model) {
    this.make = make;
    this.model = model;
  }


  const car = new Car('Honda', 'Civic');
  console.log(car);

  

