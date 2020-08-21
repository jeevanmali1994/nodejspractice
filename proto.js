function One(a,b,) {
    this.a = a;
    this.b = b;

}

function Two(c,d) {
    this.c = c;
    this.d = d;
}

One.prototype.func = new Two(1,2);

function Three(e,f) {
    this.e = e;
    this.f = f;
}

Three.prototype.functwo = new One(3,4);

let object = new Three(5,6);
console.log(object.functwo.func.c);

