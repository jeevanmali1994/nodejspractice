let Testevent = require("events");

let e = new Testevent();

e.on("type1",function(){
    console.log("type1 is done");
});

e.emit("type1");