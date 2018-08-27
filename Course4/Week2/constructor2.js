function StudentConstructor (name, lastname, familyname) {
    //this: StudentConstructor {}
    var a = 25;
    this.name = name;
    this.lastname = lastname;
    this.familyname = familyname;
    /*console.log(this); */
    //this: StudentConstructor { name: 'ivan', lastname: 'ivanov' }
    //this указывает на вновь создаваемый объект
    //return {name: 'NewStudentName: ' + this.name, lastname: this.lastname, familyname: familyname};
}

StudentConstructor.prototype =  {
    sleepFunc: function (){
        console.log('zzzzzZZZZZZZZZ....')
    },
    getName: function () {
        return this.name;
    },

    constructor: StudentConstructor
};
StudentConstructor.from = function (name2) {


}


/* StudentConstructor.prototype.sleepFunc = function (){console.log('zzzzzZZZZZZZZZ....')}; */


var ivan = new StudentConstructor('ivan', 'ivanov', 'ivanich');

//ivan.constructor.name: Studentconstructor
// Object.getPrototypeOf(ivan): StudentConstructor {}
//ivan: { name: ': ivan', lastname: 'ivanov',familyname: 'ivanich' }
//ivan.sleepFunc(); zzzzzZZZZZZZZZ....

/*console.log(StudentConstructor.prototype.constructor.name === 'StudentConstructor');*/ /* true */

/*console.log(ivan.getName())*/


var peter = StudentConstructor.from('peter')
console.log(peter.getName());

/* for (var keys in StudentConstructor.prototype){console.log(keys)} */  // sleepFunc constructor