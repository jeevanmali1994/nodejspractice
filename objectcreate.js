let Person = {
    firstname: "b",
    lastname: "",
    getback: function(){
        return this.firstname+" "+this.lastname;

    }
}

let person1 = Object.create(Person);
person1.firstname = "a";
console.log(person1.getback());
console.log(person1.firstname);

