let myApp = angular.module('myApp', []); 

myApp.controller('WelcomeController', function(){
    let self = this;
    self.greeting = 'Hello!';
    self.greet = function (name) {
        console.log('Hello', name); 
    }
    self.cohort = 'you'; 
    let instructorArray = [{name: 'Chris', pet: 'Charlie'}, {name: 'Dane', pet: 'Juniper'}]
    self.instructors = instructorArray; 
  });
  
  //if you have a variable but it's not linked to self. it is NOT avaiable to Angular