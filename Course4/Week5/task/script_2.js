//'use strict';
var tree = document.getElementsByTagName("body")[0].innerHTML;

console.log("tree as text:", tree.length);
var treeText = tree.trim();
console.log("text", treeText.indexOf("Моя") !== -1);
