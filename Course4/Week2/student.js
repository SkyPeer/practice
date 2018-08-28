

function Students(){
    this.students = [];

}

Students.from = function (arg) {
    this.students = arg;
    Object.setPrototypeOf(this, Students.prototype);
    return this;
};

Students.prototype.add = function (newstudent) {

    //console.log('Array.isArray:  ', Array.isArray(newstudent));

    if (newstudent instanceof  Students){
       console.log('это Students');
        for (var i=0; i<newstudent.students.length; i++)
        {
            this.students.push(newstudent.students[i])
        }
    }
    else
    {
     //   console.log('это НЕ массив');
        this.students.push(newstudent);
    }


};
Students.prototype.all = function () {
    return this.students;
};


a = new Students();
a.add('ivan');
a.add('peter');
console.log('*A*  instance:',a instanceof Students,'| a.all: ',a.all());
b = Students.from([3,2]);
console.log('*B*  instance:',b instanceof Students,'| b.all: ',b.all());
c = new Students();
c.add(a);
c.add(b);
console.log('* C: *',c.all());
