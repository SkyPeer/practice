console.time("taskTimer");
//const str = 'evypvuudavxdncjpqpuwjbsdvdpcslitqrszcdlmjndnibejyqbkjuxgpakkjaonjhtfesgfwnwflpwoptyczjgwieigreknyixxjiettofzgzpmnkbdtcoqxjizoxqubwhklqqyyxdkeizdfcritzbvzmunpxlokitgtgejvcojudkohixswslucslijpzkozidvalqevypvuudavxdncjpqpuwjbsdvdpcslitqrszcdlmjndnibejyqbkjuxgpakkjaonjhtfesgfwnwflpwoptyczjgwieigreknyixxjiettofzgzpmnkbdtcoqxjizoxqubwhklqqyyxdkeizdfcritzbvzmunpxlokitgtgejvcojudkohixswslucslijpzkozidvalqevypvuudavxdncjpqpuwjbsdvdpcslitqrszcdlmjndnibejyqbkjuxgpakkjaonjhtfesgfwnwflpwoptyczjgwieigreknyixxjiettofzgzpmnkbdtcoqxjizoxqubwhklqqyyxdkeizdfcritzbvzmunpxlokitgtgejvcojudkohixswslucslijpzkozidvalq';
const str = 'ababa'
const resultObj = {};

for (const value of str) {
  const counter = resultObj[value] || 0;
  resultObj[value] = counter + 1;
}
const values = Object.keys(resultObj).map(key => ({key, value: resultObj[key]}))
const sortedValues = values.sort((first, second) => second.value - first.value)
const result = sortedValues[0];
//console.log('result', result)

console.timeEnd("taskTimer");
