function StudentConstructor (name, lastname) {
    //this: StudentConstructor {}
    this.name = name;
    this.lastname = lastname;
    //console.log(this);
    //this: StudentConstructor { name: 'ivan', lastname: 'ivanov' }
    //this указывает на вновь создаваемый объект
    return {name: 'NewStudentName: ' + this.name, lastname: this.lastname}
}

var ivan = new StudentConstructor('ivan', 'ivanov');

//ivan.constructor.name: Studentconstructor
// Object.getPrototypeOf(ivan): StudentConstructor {}
//ivan: { name: 'NewStudentName: ivan', lastname: 'ivanov' }