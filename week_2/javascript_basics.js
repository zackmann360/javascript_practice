// what are the types of variables
// 1. string     
// 2. number
// 4. function
// 3. object
// 5. array (we will get there)


//-------------------------------------------------------

// what is a string
// a string is a set of words/character in qoutes 'string'
// example :
'this is a string'



// -------------------------------------------------------

// what is a number
// a number is just a plain ass number without qoutes
// example :
200


// -------------------------------------------------------

// what is a function
// a function is a key to the code you want to run. A function can be called.
// A function is written function key() { the code to run }
// example :
function myFunction(){
    var cats = 'meow'
    console.log(cats)
}

// how do you call a function
// you call a function by using the function name/key with () 
// example :
myFunction()

// -------------------------------------------------------
// what is an object
// an object is a set of multiple key value pairs
// an object is defined like var key = {}
// an objects key value pairs are set like key: value
// you split the pairs up by commas
// example :

var myObject = {
    cat: 'meow',
    car: 'bmw',
    house: '2 story',
}

// how do i log a key of an object
// i get a value from an object by writting it key.key
console.log(myObject.house)


// -----------------------------------------------------
// how to define a variable
// variable is a key value pair, var key = value
// example :
var table = 'kitchen'
var number = 100

// how to read an input to get the value of it

<input Id="num1"/>
    // this is how you read the value for the input
    var number1 = document.querySelector('#num1').value