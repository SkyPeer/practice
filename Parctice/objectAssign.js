var users = [
  { 120: [{ user: "ivan", pass: "123" }, { user: "peter", pass: "foo" }] },
  { 130: [{ user: "john", pass: "33sa" }, { user: "jack", pass: "zzz" }] },
  {
    100: [{ user: "sara", pass: "bbb" }, { user: "sierra", pass: "rogger" }]
  }
];
var groups = [{ 120: "Users" }, { 100: "Admins" }, { 130: "Rootes" }];

var usersWithGroups = users.map(user => {
  var userHaveGroupFinder = group => {
    return Object.keys(user)[0] == Object.keys(group)[0];
  };

  var userWithEqualGroup = groups.find(userHaveGroupFinder);
  var gorupOjb = userWithEqualGroup;
  console.log("userWithEqualGroup", user, "-:-", gorupOjb);

  return Object.assign({}, user, { group: Object.values(gorupOjb)[0] });
});
console.log("RESULT", usersWithGroups);
