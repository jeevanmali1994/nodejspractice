//demo of treatign a function as variable i.e assigning it to a variable

//function whose object is made
function toBeObject(){
    console.log("Called a function as object");
}

function callingTheObject(funct){
    toBeObject();
}

callingTheObject();
