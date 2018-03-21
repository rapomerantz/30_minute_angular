let myApp = angular.module('myApp', []); 

myApp.controller('WelcomeController', function(){
    let self = this;
    self.greeting = 'Hello!';
    self.greet = function (name) {
        console.log('Hello', name); 
    }
    self.username = 'doctorhowser'; 
    self.cohort = 'you'; 
    let instructorArray = [{name: 'Chris', pet: 'Charlie', showPet: true},
                             {name: 'Dane', pet: 'Juniper', showPet: false},
                             {name: 'Atticus', pet: 'none'}]
    self.instructors = instructorArray; 
    self.togglePet = function(person) {
        person.showPet = !person.showPet; 

    }
  });
  
  //if you have a variable but it's not linked to self. it is NOT avaiable to Angular