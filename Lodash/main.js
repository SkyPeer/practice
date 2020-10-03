// import _ from "lodash";

// const { first } = require("lodash");

// check methods https://caniuse.com/
console.log("Hello lodash", _.isEmpty([]));

const products = {
  1: {
    name: "Product1",
  },
  2: {
    name: "Product2",
  },
};

const arr = [];

// [(1, 2)].forEach(function (item) {
//   console.log(item);
// });

_.each([11, 22, 33, 44, 55], function (item, index) {
  console.log(item, "index:", index);
});

_.each(products, function (item, key) {
  console.log(item, "key:", key);
  arr.push(item.name);
});

console.log("arr:", arr);

/********************/

const usersArr = [
  {
    id: 1,
    name: "User1",
  },
  {
    id: 2,
    name: "User2",
  },
  {
    id: 3,
    name: "User3",
  },
];

const usersOjbs = {
  1: {
    name: "User1#",
  },
  2: {
    name: "User2#",
  },
  3: {
    name: "User3#",
  },
};

const newArr = [1, 2, 3].map(function (item) {
  return item;
});

const newLodashArr = _.map([11, 22, 33], function (item) {
  return item;
});
console.log("newArr", newArr);
console.log("newLodashArr", newLodashArr);

// const ids = _.map(usersArr, function (user) {
//   return user.id;
// });
const ids = _.map(usersArr, "id"); /*  <-- sugar*/
const names = _.map(usersArr, "name");

const objIds = _.map(usersOjbs, function (user, key) {
  return Number(key);
});

console.log("ids", ids);
console.log("names", names);
console.log("objIds", objIds);

/// map task ////
const users = [
  {
    id: 1,
    status: "active",
    first_name: "John",
  },
  {
    id: 2,
    status: "inactive",
    first_name: "Mike",
  },
];

const normolizeUsers = function (users) {
  return _.map(users, function (user) {
    return {
      id: user.id,
      status: user.status === "active",
      firstName: user.first_name,
    };
  });
};

const result = normolizeUsers(users);
console.log("result", result);

// FILTER

var productsFilterTask = [
  {
    id: 1,
    name: "milk",
    price: "1$",
  },
  {
    id: 2,
    name: "bread",
    price: "2$",
  },
  {
    id: 3,
    name: "meat",
    price: "3$",
  },
];

var searchProducts = function (products, searchValue) {
  //   return _.filter(products, ["name", searchValue]);
  return _.filter(products, function (product) {
    // return product.name.includes(searchValue);
    return _.includes(product.name, searchValue);
  });
};

var productsResult = searchProducts(productsFilterTask, "mil");

console.log("productsResult", productsResult);

// remove element task

const arr1 = [1, 2, 3];
const arr2 = [11, 22, 33, 44, 55];
const arr3 = [{ id: 111 }, { id: 222 }, { id: 333 }];
const arr4 = [{ id: 111 }, { id: 222 }, { id: 333 }];

const tryRemove1 = _.pull(arr1, 2);
console.log("arr1", arr1); // [1.3]
console.log("tryRemove1", tryRemove1); // [1.3]

const tryRemove2 = _.without(arr2, 33);
console.log("arr2", arr2); // [11, 22, 33, 44, 55]
console.log("tryRemove2", tryRemove2); // [11, 22, 44, 55]

const tryeRemove3 = _.remove(arr3, function (elem) {
  return elem.id === 222;
});

console.log("arr3", arr3); // [{ id: 111 }, { id: 333 }]
console.log("tryRemove3", tryeRemove3); // [{ id: 222 }]

const tryRemove4 = _.reject(arr4, ["id", 222]);
console.log("arr4", arr4); // [{ id: 111 }, { id: 222 }, { id: 333 }]
console.log("tryRemove4", tryRemove4); // [{ id: 111 }, { id: 333 }]
