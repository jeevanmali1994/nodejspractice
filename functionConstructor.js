function ConstructorDeno(param1, param2) {
    this.one = param1;
    this.two = param2;
}

let obj = new ConstructorDeno("Jeevan", "Mali");
console.log(obj.one +" "+ obj.two);