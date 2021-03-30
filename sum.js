/* eslint-disable indent */

//Make plan and assess what you have.

// expected input & output.
// $ node sum.js 1 2 3 4 5 -1 potato
// should return 14

// What we have from command line (array)
// What we want - Sum of all valid values.
const commandLineArguments = process.argv.slice(2);
console.log(commandLineArguments);
// Cleaning the code by using .slice() is optional.

const sumOfListOfElements = function (listOfElements) {
  let accumulator = 0;
  // iterate over the elements of the process.argv array
  for (let i = 0; i < commandLineArguments.length; i++) {
    // for every element in the array
    const currentElement = listOfElements[i];
    //convert,
    const parsedElement = Number(currentElement);
    // then check if string or array
    //If it's a number
    if (!Number.isNaN(parsedElement)) {
      accumulator += parsedElement;
    }
    //update the value of the accumulator(variable) with thte new nember
  }
  return accumulator;
};
const output = sumOfListOfElements(commandLineArguments);
console.log(output);
// declare a accumulator (variable)

// return the accumulator

//Create a function called sum
//Get the arguments from the console line
//Call the function
//Create some pseudo code
//process.argv
