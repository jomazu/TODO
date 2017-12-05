# V5 Requirements
Version 5 requirements (To Do application):  

- `.displayTodos` should **SHOW** `.todoText`  
- `.displayTodos` should **TELL YOU** if `.todos` is empty  
- `.displayTodos` should **SHOW** `.completed`  

In this section we will use `FOR LOOPS` to fix `.displayTodos` and make them work properly.  


## .displayTodos
We want the `.displayTodos` method to show the `.todoText` property.  

We have to do some processing on each object in our `.todos` array, and that is a perfect task for a `FOR LOOP`, because we want to repeat some code for every item in the array.  

Within Plunker add the following `FOR LOOP`:  

```javascript
for (var i = 0; i < this.todos.length; i++) {
  console.log(this.todos[i].todoText);
}
```

Before...  
```javascript
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log(`My Todos: ${this.todos}`);
  },
```

After...  
```javascript
var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My Todos: '); // Removed ${this.todos}, not needed
    for (var i = 0; i < this.todos.length; i++) {
      console.log(this.todos[i].todoText);
    }
  },
```

Test, by running in the Chrome console:  
```javascript
// Automatically displays after adding
> todoList.addTodo('Product 1');
My Todos:
Product 1

> todoList.addTodo('Product 2');
My Todos:
Product 1
Product 2

// We can also run the displayTodos method separately
> todoList.displayTodos();
My Todos:
Product 1
Product 2
```

Recap...  

Note, we removed `${this.todos}` from the original `console.log` statement, because it was printing out objects to the console and was not very useful. Then we added a `FOR LOOP` to iterate through the todos array in the todoList object, and display the todoText for each index of the array.  


## .displayTodos (if empty)
We want `.displayTodos` to tell us if `.todos` is empty - i.e. no todos in the list.  



## .displayTodos (show completed)
Recall, each todo object has a completed property that is a boolean. We want to have `.displayTodos` show this information as well.  
