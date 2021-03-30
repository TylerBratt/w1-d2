//Create a function that rolls dice
//Use Math.random and Math.floor to get a random number between 1 and 6
// the console line entry should indicate how many dice are being rolled.
const commandLineArguments = process.argv.slice(2);
//console.log(commandLineArguments);

const diceRoller = function () {
  let rollArray = [];
  for (let i = 0; i < commandLineArguments; i++) {
    let currentDie = Math.ceil(Math.random(10) * 6);
    //add each dice roll to an array
    rollArray.push(currentDie);
  }
  //return the template literal and join the array with (',')
  return `Rolled ${commandLineArguments} dice: ${rollArray.join(', ')}`;
};
console.log(diceRoller());
