# Data Types and Comparisons
## JavaScript Data Types
- **OBJECTS** `{ }` - can be as complex as you want  

Example:  
```javascript
var todoList = { 
  todos: [], 
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  } 
};
```  

- **PRIMITIVES** - building blocks  
  - String - `This is a string!`  
  - Number - `1, 2, 3, 4 ...`  
  - Boolean - `true` or `false`  
  - Undefined - a value that hasn't been set  
  - Null - `Nothing`  

## Comparisons with PRIMITIVES (Values)
Strings  
```javascript
> 'john' === 'john';
true

> 'john1' === 'john';
false
```

Numbers  
```javascript
> 1 === 1;
true

> 1 === 2;
false

> 36 === '36';
false
```

Booleans  
```javascript
> true === true;
true

> true === false;
false

> false === false;
true
```

Undefined and Null  
```javascript
> undefined === undefined;
true

> null === null;
true
```

## Comparisons of OBJECTS (References)
The following examples are FALSE, because the **REFERENCES** (addresses in memory) differ for each object.  

```javascript
> {} === {}
false

> [1, 2, 3] === [1, 2, 3]
false
```
The examples below are TRUE, because the **REFERENCES** (addresses in memory) for the VARIABLES are the same.  

```javascript
> var arrayOne = [1, 2, 3];

> arrayOne;
[1, 2, 3]

// arrayOne (reference) === arrayOne (reference)
> arrayOne === arrayOne;
true

> var objectOne = {};

// objectOne (reference) === objectOne (reference)
> objectOne === objectOne;
true
```
