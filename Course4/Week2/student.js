
function Students(){
    this.students = [];
}

Students.from = function (arg) {
    this.students = arg;
    Object.setPrototypeOf(this, Students.prototype);
    return this;
};




Students.prototype.count = function ()
{
  return this.students.length;
};


Students.prototype.at = function(atArg) {
    if (atArg > this.students.length || atArg <= 0 )
    {
        return null;
    }
    else
    {
        return this.students[--atArg];
    }

};
Students.prototype.add = function (newstudent) {

    //console.log('Array.isArray:  ', Array.isArray(newstudent));

    if (newstudent instanceof  Students)
    {
       console.log('это Students');
        for (var i=0; i<newstudent.students.length; i++)
        {
            this.students.push(newstudent.students[i])
        }
    }
        else {
     //   console.log('это НЕ массив');
            this.students.push(newstudent);
        }
};

Students.prototype.all = function () {
    return this.students;
};

Students.prototype.removeAt = function (removeAtArg) {
    
    function studentsFilter(item, index) {
        return index != removeAtArg
    }

    var filteredStudentsArray = this.students.filter(studentsFilter)
    this.students = filteredStudentsArray;
    return this.students;
};


a = new Students();
a.add('ivan');
a.add('peter');
console.log('*A*  instance:',a instanceof Students,'| a.all: ',a.all(), '* COUNT :', a.count());

b = Students.from([3,2]);
console.log('*B*  instance:',b instanceof Students,'| b.all: ',b.all(), '* COUNT :', b.count());

c = new Students();
c.add(a);
c.add(b);
console.log('*C*  instance:',c instanceof Students,'| c.all: ',c.all(), '* COUNT :', c.count());
console.log(c.at(1));
console.log('filtered:', c.removeAt(2));