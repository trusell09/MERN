//GLOBAL SCOPE - if the variable or function is defined inside the file, but not defined inside of any function or loop, 
//then it is global scope. Global scope means that the variable or function is available and "visible" from all areas of the file


// var beatles = ['Paul', 'George', 'John', 'Ringo'];

// console.log(beatles)

// function xo(){
//     console.log("beatles from inside a function -->", beatles)
// }

// xo()




// LOCAL SCOPE -  If a variable is created within a function or a loop then it is local scope. (functional (within a function) or blocked scope (within a loop or conditional))
// function xo(){
//     var beatles = ['Paul', 'George', 'John', 'Ringo'];
//     console.log("beatles from inside a function -->", beatles)
// }

// xo()


// Blocked Scope, local scope
// for(var i = 0 ; i<10; i++){
//     console.log("i is-->", i)
// }

// console.log("var i outside the for loop -->", i)


var beatles = ['Paul', 'George', 'John', 'Ringo'];

beatles.push("Murph")

function printNames(names) {
function actuallyPrintingNames() {
    let index;
    let name;
    for (index = 0; index < names.length; index++) {
    name = names[index];

    console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}

actuallyPrintingNames();
}

printNames(beatles)


//Difference between let and var:

//var is functional scoped (meaning that if var is defined within a function, its only available within that function or any function within that function. If the var is declared within a loop or a conditional, its available outide of the loop and conditional)

//let  and const is block scoped (meaning that if var is defined within a function, its only available within that function or any function within that function and If the let is declared within a loop or a conditional, its ONLY available INSIDE the loop/conditional)

//const is used like let, however its only for variables that you want to keep the same or prevent reassignment of the variables
