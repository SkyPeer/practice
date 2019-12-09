let test = {
  a: {
    name: "Вася"
  } /*, toString(){return 'Наташа'}, valueOf(){return this.a}*/
};

console.log(test);
test.a.name = "Петя";
console.log(test);

function foo() {
  return function f(e) {
    console.log("f", e);
  };
}
foo()(2)(4);
