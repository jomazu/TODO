/* Loop through an Array */

// Array data
var prodArray = ['product 1', 'product 2', 'product 3'];

/*
// FOR LOOP creation
for (var i = 0; i < prodArray.length; i++) {
  console.log(`Product index: (${i}), Product Name: ${prodArray[i]}`);
}
*/

// FUNCTION with FOR LOOP inside
function productForLoop() {
  for (var i = 0; i < prodArray.length; i++) {
    console.log(`Product index: (${i}), Product Name: ${prodArray[i]}`);
  }
};

// Call the function
productForLoop();
