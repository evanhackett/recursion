// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
){
  // your code here
  var elements = [];

  if (node === undefined) {
    node = document.body;
    if (node.classList.contains(className)) elements.push(node);
  }

  var children = node.childNodes;

  for(var i = 0; i < children.length; i++) {
    if (children[i].classList) {
      if (children[i].classList.contains(className)) elements.push(children[i]);
    }

    if (children[i].hasChildNodes()) getElementsByClassName(className, children[i]);
  }

  return elements;
};
