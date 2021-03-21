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

console.log(" --- arr:", arr);

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

console.log("MAAAP name", _.map(productsFilterTask, "name"));

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

const popularUsers = [
  {
    id: 1,
    name: "Amanda",
    isActive: true,
    likes: 110,
  },
  {
    id: 2,
    name: "Charlie",
    isActive: false,
    likes: 30,
  },
  {
    id: 3,
    name: "Bill",
    isActive: true,
    likes: 90,
  },
];

const getPopularUser = function (users) {
  // tryStep 1
  //   const activeUsers = _.reject(users, ["isActive", false]);
  //   return _.filter(activeUsers, function (user) {
  //     return user.likes > 100;
  //   });
  // tryStep 2
  //   return _.reject(popularUsers, function (user) {
  //     return !user.isActive || user.likes < 100;
  //   });

  //tryStep 3
  return _.filter(users, function (user) {
    return user.isActive && user.likes > 100;
  });
};

const popularUsersResult = getPopularUser(popularUsers);
console.log("popularUsersResult", popularUsersResult);

///***************  */ _.some _.every

// var isSomeActive = _.some(popularUsers, function (user) {
//   return user.isActive === true;
// });

var isSomeActive = _.some(popularUsers, { isActive: true, likes: 110 });
console.log("isSomeActive", isSomeActive);

var isAllActive = _.every(popularUsers, function (user) {
  return user.isActive === true;
});
console.log("isAllActive", isAllActive);

//   ---- ORDERBY

var orderResult = _.orderBy(popularUsers, ["likes", "name"], ["asc", "desc"]);
console.log("orderResult", orderResult);

const groupBy = function (list, prop) {
  return list.reduce(function (aggregator, element) {
    (aggregator[element[prop]] = aggregator[element[prop]] || []).push(element);
    return aggregator;
  }, {});
};

const groupByResult = groupBy(popularUsers, "isActive");
console.log("groupByResult", groupByResult);


var array = [1,2,3,4];
var anotherOne = [2,4];
var filteredArray = [];

const obj1 = {
	a:'testRule1',
	b:37
}
const obj2 = {
	a:'testRule2',
  b:44
}


const obj22 = {
	a:'testRule2',
  b:44
}

const obj11 = {
	a:'testRule1',
	b:35
}



const arr111 = [{...obj1}, {...obj2}]
const arr222 = [{...obj11}, {...obj22}]

const ttt = _.differenceBy(arr222, arr111, 'b')
console.log('ttt', ttt)
/* 
filteredArray = _.difference(array, anotherOne);
console.log(filteredArray) */