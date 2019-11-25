const array = [{ user: "123" }, { user: "321" }, { user: "123" }];

const eee = array.find(e => {
  return e.user === "123";
});

console.log(eee, Array.isArray(eee));
