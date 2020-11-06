let objA = {
    name: "Dan",
    age: 18,
    greeting: function() {
        console.log("Hello!");
    }
};

const objB = Object.create(objA);
objB.name = "Sam";
objB.age = 20;
objB.greeting = function() {
    console.log("Salut!");
};

const objC = Object.create(objB);
objC.name = "John";
objC.age = 25;
objC.greeting = function() {
    console.log("Salam!");
};

objB.__proto__ = objA;
objC.__proto__ = objB;

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

function ObjA(name, age) {
    this.name = name;
    this.age = age;
}

function ObjB(name, age){
    ObjA.apply(arguments);
}

function ObjC(name, age){
    ObjB.apply(arguments);
}

ObjA.prototype.greeting = function() {
    console.log("Hello!");
};

ObjB.prototype.meeting = function() {
    console.log("Salut!");
};

objC.prototype.heating = function() {
    console.log("Salam!");
};

ObjB.prototype = Object.create(ObjA.prototype);
ObjC.prototype = Object.create(ObjB.prototype);

const obja = new ObjA("Dan", 18);
console.log(obja);
obja.greeting();

const objb = new ObjB("Sam", 20);
console.log(objb);
objb.meeting();

const objc = new ObjC("John", 25);
console.log(objc);
objc.heating();

// --------------

function ObjA (name, age) {
	this.name = name;
	this.age = age;
}

ObjA.prototype.greeting = function () {
	console.log("Hello!");	
};

const obja = new ObjA ("Dan", 18);

function ObjB (name, age, kill) {
	ObjA.call(this, name, age);
	this.kill = kill;
}

ObjB.prototype = Object.create(ObjA.prototype);

ObjB.prototype.meeting = function () {
	console.log ("Salut!");
};

const objb = new ObjB ("Sam", 20, "Me");

function ObjC (name, age, kill, please) {
	ObjB.apply(this, arguments);
	this.please = please;
}

ObjC.prototype = Object.create(ObjB.prototype);

ObjC.prototype.saySalam = function () {
	console.log("Salam!");
};

let objc = new ObjC ("John", 25, "Me", "Please");
ObjC.greeting();
ObjC.meeting();
ObjC.saySalam();

