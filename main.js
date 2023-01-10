// console.dir(document);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.title);
// console.log(document.all);

//getElementById
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000'


//getElementsByClassName
// var items = document.getElementsByClassName('list-group-items');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';

// for(var i=0; i<items.length; i++){
  // items[i].style.backgroundColor = 'red';
// }


//getElementByTagName
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello';
// li[1].style.fontWeight = 'bold';

// for(var i=0; i<li.length; i++){
//   li[i].style.backgroundColor = 'red';
// }


/*querySelector
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var lastItem = document.querySelector('.list-group-items:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-items:nth-child(2)');
secondItem.style.color = 'coral'*/


/*querySelectorAll
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i < odd.length; i++){
   odd[i].style.backgroundColor = '#ccc';
}*/

 
//TRAVERSING THE DOM
var itemList = document.querySelector('#items');

/*parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode);


// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement);*/


/*childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';


//firstChild
// console.log(itemList.firstChild)

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1'

//lastChild
//lastElementChild*/

/*nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';*/


//createElement - Create a div
var newDiv = document.createElement('div');
//Add class and id and Attribute
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello Div');

//createTextNode 
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);

newDiv.style.fontSize = '30px';
console.log(newDiv);

