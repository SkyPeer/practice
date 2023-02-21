console.time("taskTimer");
const str = 'evypvuudavxdncjpqpuwjbsdvdpcslitqrszcdlmjndnibejyqbkjuxgpakkjaonjhtfesgfwnwflpwoptyczjgwieigreknyixxjiettofzgzpmnkbdtcoqxjizoxqubwhklqqyyxdkeizdfcritzbvzmunpxlokitgtgejvcojudkohixswslucslijpzkozidvalqevypvuudavxdncjpqpuwjbsdvdpcslitqrszcdlmjndnibejyqbkjuxgpakkjaonjhtfesgfwnwflpwoptyczjgwieigreknyixxjiettofzgzpmnkbdtcoqxjizoxqubwhklqqyyxdkeizdfcritzbvzmunpxlokitgtgejvcojudkohixswslucslijpzkozidvalqevypvuudavxdncjpqpuwjbsdvdpcslitqrszcdlmjndnibejyqbkjuxgpakkjaonjhtfesgfwnwflpwoptyczjgwieigreknyixxjiettofzgzpmnkbdtcoqxjizoxqubwhklqqyyxdkeizdfcritzbvzmunpxlokitgtgejvcojudkohixswslucslijpzkozidvalq';

let value = '';
let totalCounter = 0;

for (let i = 0; i < str.length; i++) {

  let counter = 0;

  for (let j = 0; j < str.length; j++) {
    if (str[i] === str[j]) {
      counter++;
    }
  }

  if (counter > totalCounter) {
    totalCounter = counter;
    value = str[i];
  }

}

// console.log('value: ', value)
// console.log('totalCounter: ', totalCounter)
console.timeEnd("taskTimer");
