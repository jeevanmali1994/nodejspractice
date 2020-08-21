//demo of treatign a function as variable i.e assigning it to a variable

//function whose object is made
function toBeObject(){
    console.log("Called a function as object");
}

function callingTheObject(funct){
    toBeObject();
}

callingTheObject();

// trying the parametrised function
function newFunction(fn,a,b){
    console.log(fn(a,b));
    }
    
    function result(a, b){
    return a+b
    }
    
newFunction(result,1,2)

//declaring a function at place of parameter

function test(fn){
    fn();

}

test(function tes2(){
    console.log("It works");
});
