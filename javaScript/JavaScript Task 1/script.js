
let myName = 'Oluwatobiloba Samuel Okekunle';

let coursesIamOffering = ["HTML", " CSS", " JAVASCRIPT", " PHP", " NODEJS"];

console.log(`My name is ${myName}, and my courses are ${coursesIamOffering}`)

// get the number of Courses i'm offering from the array and store it to the variable
noOfCoursesIamOffering = coursesIamOffering.length

//Displays the number of course
console.log("The number of courses i'm offering is ==> ", noOfCoursesIamOffering);


//An If else if statement to print out certain instructions
if(noOfCoursesIamOffering % 2 !==0) {
    printOdd();
} else if(noOfCoursesIamOffering % 2 === 0) {
    printEven();
}


// this function is a for loop statement printing odd numbers
 function printOdd(num) {
    for (let i=1; i<200; i++) {
      if(i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  
// this function is a for loop statement printing even numbers
  function printEven(num) {
    for (let i=1; i<200; i++) {
      if(i % 2 === 0) {
        console.log(i);
      }
    }
  }


