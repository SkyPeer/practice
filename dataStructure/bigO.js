// O(n)
function printItems(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

printItems(10);
/// -------

// n+n = O(2n)
function printItems2(n) {
  for (let i = 0; i < n; i++) {
    console.log("i =", i);
  }

  for (let j = 0; j < n; j++) {
    console.log("j =", j);
  }
}

printItems2(10);

// n * n = O(n^2)
function printItemsSqrN(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log("i=", i," j=", j);
    }
  }
}

printItemsSqrN(10);
