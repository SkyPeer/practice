function PromiseUserFunction(FirstName, LastName, Age, Gender) {
    this.FirstName = FirstName; this.LastName = LastName;this.Gender = Gender;
    if ( Age >= 18 ) {this.AgeResult = "Not Young";} if ( Age < 18) {this.AgeResult = "Young";}
    return new Promise((res, rej) => {setTimeout(() => {res({FirstName,LastName,AgeResult,Gender})}, 1000)})}


async function asyncUserFunc(FirstName, LastName, Age, Gender) {
        let user = await PromiseUserFunction(FirstName, LastName, Age, Gender);
        return(user);
    }

function log(user) {
    console.log("LogResult:", user)
}

PromiseUserFunction('Jack', 'Daniels', 15, 'M').then(log); /* LogResult: { FirstName: 'Jack', LastName: 'Daniels', AgeResult: 'Young', Gender: 'M' } */
asyncUserFunc("Jack", "Daniels", 15, "M").then(log); /* LogResult: { FirstName: 'Jack', LastName: 'Daniels', AgeResult: 'Young', Gender: 'M' } */
let userpromise = PromiseUserFunction('Jack', 'Daniels', 15, 'M'); log(userpromise); /* LogResult: Promise { <pending> } */
let asyncuser = asyncUserFunc("Jack", "Daniels", 15, "M"); log(asyncuser); /*LogResult: Promise { <pending> }*/