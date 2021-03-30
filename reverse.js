let input = process.argv[2];
const reverse = function (original) {
  if (input) {
    return original.split('').reverseList().join('');
  }
};
console.log(reverse(input));
