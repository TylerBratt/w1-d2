// Print all numbers between 100 and 200

for (let num = 100; num <= 200; num++) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log('LoopyLighthouse');
  } else if (num % 4 === 0) {
    console.log('Lighthouse');
  } else if (num % 3 === 0) {
    console.log('Loopy');
  } else {
    console.log(num);
  }
}

for (const num of nums) {
  let output = '';

  if (num % 3 === 0) {
    output += 'Loopy';
  }
  if (num % 4 === 0) {
    output += 'Lighthouse';
  }
  console.log(output === '' ? num : output);
}
