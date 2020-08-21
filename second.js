// Checking for if i assign a function expression to a variable and then assign another variable to it
// and then if i changed orginal variable then what will happen

let orginal = function (){
    console.log("Original");
}

let copy = orginal;
orginal = 1;
copy();
console.log(orginal);

// The above experiment proves that the aissgnment opertor makes a deep copy of the variable