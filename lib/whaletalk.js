let input = 'Turpentine and turtles';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (inputIndex = 0; inputIndex < input.length; inputIndex++) {

  for (vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
    if (input[inputIndex] === vowels[vowelsIndex]) {

      resultArray.push(input[inputIndex]);
    }
  }
  if (input[inputIndex] === vowels[1]) {
    resultArray.push(input[inputIndex]);
  } else if (input[inputIndex] === vowels[4]) {
    resultArray.push(input[inputIndex]);
  }
}

console.log(resultArray.join('').toUpperCase());