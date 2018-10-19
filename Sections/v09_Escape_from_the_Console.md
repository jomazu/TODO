# V9 Requirements
Version 9 requirements (To Do application):  

- There should be an `li` element for **every todo**  
- Each `li` element should **contain** `.todoText`  
- Each `li` element should **show** `.completed`   

## Escape From The Console
In our app, we do not know how many items will be in the **unordered list**. Additionally, the items can change over time - i.e. delete and item or add an item etc. Thus, we need to dynamically add items to the list and delete items from the list.  

But, first we need to know how to insert list items into the DOM. To do this, we will use JavaScript to dynamically insert list elements into the unordered list.  

Console examples below...  

Use a JS variable to dynamically create a LIST item:  
- [document.createElement()](https://www.w3schools.com/jsref/met_document_createelement.asp)  
```javascript
> var todoLi = document.createElement('li');

> todoLi;
    <li></li>
```  

Create a variable to grab or reference an element, in this case, the UNORDERED list element:  
- [document.querySelector()](https://www.w3schools.com/jsref/met_document_queryselector.asp)  
```javascript
> var todosUl = document.querySelector('ul');

> todosUl;
    <ul>
        </ul>
```

To append a node as the last child of a node, we use the following:  
- [appendChild()](https://www.w3schools.com/jsref/met_node_appendchild.asp)  
```javascript
> todosUl.appendChild(todoLi);
    <li></li>
```

## myTestApp
See the `index.html` and `script.js` files for code changes/additions...  

---
# setTimeout

After 8 seconds (8000 milliseconds) have passed, the `console.log` message will print in the console.  

Example...  
```javascript
setTimeout(() => {
    console.log('8 seconds have passed.');
}, 8000);
```

---
# forEach

Run `logName` over each student in the array.  

Example...  
```javascript
var students = ['Tom', 'Joe', 'Karen'];

function logName(name) {
    console.log(name);
}

// This works
for (var i = 0; i < students.length; i++) {
    logName(students[i]);
}

// Result
Tom 
Joe
Karen

// Best practice using forEach
students.forEach(logName)

// Result
Tom
Joe
Karen
```