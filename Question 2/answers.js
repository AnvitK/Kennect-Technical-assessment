// To see all the document.body properties
console.log(document.body);                                 
console.dir(document.body);

// using standard getElementById
const h1 = document.getElementById("heading");
console.log(h1);
const h2 = document.querySelector("#heading");  // using query selector
console.log(h2);

const parent = document.getElementById("parent");
console.log(parent);

const child1 = document.getElementById("child1");
console.log(child1);

const child2 = document.getElementById("child2");
console.log(child2);

// Get all elements that have id property
const getAllIdElements = function () {
  const res = [];                                      // arr to store all the id elements

  const getEachIdElement = function (node) {
    if (node.id !== "") {                              // checking if the element has id or not, observed that non id elements' nodes have empty id
      res.push(node.id);                               // added that element that has id to the arr
    }
    for(let i = 0; i < node.children.length; i++) {    // obeserved that node children has the required elements
      getEachIdElement(node.children[i]);              // recursively call getEachIdElement function for all the elements, as one element can also have children nodes
    }
  }
  
  getEachIdElement(document.body);                     // called getEachIdElement on document.body as document.body is the starting point
  return res;
}
console.log(getAllIdElements());                       

// Get the specific element that has the given id
const getElementById2 = function (id) {
  let matchNode = null;                                                       

  const findIdElement = function (node) {
    if (!matchNode && node.id === id) matchNode = node;               // if matchNode is null and the node's id === given id, then matchNode becomes the required node element
    if (!matchNode) return [...node.children].find(findIdElement);    // if matchNode is null and the node's id !== given id, then first get current node children and find the required match by recursively call findIdElement
  }

  findIdElement(document.body);                                       // called findIdElement on document.body as document.body is the starting point
  return matchNode;
};

console.log(getElementById2("heading"));      // works identical to document.getElementById
console.log(getElementById2("subchild2"));
console.log(getElementById2("child2"));
console.log(getElementById2("parent"));
console.log(getElementById2("child1"));   