function person(first, name) {
  this.first = first;
  this.name = name;
}

person.prototype.getname = function(mr) {
  return mr + " " + this.name + " " + this.first;
};

var myPerson = new person("oleg", "petrov");

console.log(myPerson.getname("111"));
