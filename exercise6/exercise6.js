// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

array.shift();

// 2. Sort the array in order.
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" from the array.
array.shift();

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();

you should have at the end:
["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
array2[1][1][0];

//array1 has 
//0 = banana 1 = array
//1 is another array that has: 0 apples, 1 =array and 2 Blueberries
//1 is an array with 0 = oranges