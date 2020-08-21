function ConstructorDemo(param1, param2) {
    this.one = param1;
    this.two = param2;
}

let obj = new ConstructorDemo("Jeevan", "Mali");
console.log(obj.one +" "+ obj.two);

ConstructorDemo.prototype.otherFunction = function(){
    console.log(this.one +" "+ this.two);
}

let otherobject = new ConstructorDemo("TestName", "TestLastname");
console.log(otherobject.otherFunction());