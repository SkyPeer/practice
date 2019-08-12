function StudentConstructor (name, lastname, familyname) {
    this.a = 25;
    this.name = name;
    this.lastname = lastname;
    this.familyname = familyname;
   
}

StudentConstructor.prototype =  {
    sleepFunc: function (){
        console.log('zzzzzZZZZZZZZZ')
    },
    // getName: function () {
    //     return this.name;
    // },

    constructor: StudentConstructor
};
// StudentConstructor.from = function (name2) {

// }


var ivan = new StudentConstructor('ivan', 'ivanov', 'ivanich');

//var peter = StudentConstructor.from('peter')
console.log(ivan.sleepFunc());

