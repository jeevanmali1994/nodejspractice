"use strict";

class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    printing() {
        console.log(`hi ${this.firstname} ${this.lastname}`);
    }
}

let object = new Person("Jeevan", "Mali");
object.printing();