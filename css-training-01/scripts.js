function sayHi() {
  console.log("hello");
}

function printName() {
  console.log("Jerry Bony");
}

printName();

sayHi();

let nameOfPerson = "Jerry Bony";
function sum(a, b) {
  console.log(a + b);
}

sum(3, 4);

function personName(name) {
  return "Hello " + name;
}

let s = personName(nameOfPerson);
console.log(s);

// pass functions into functions
function printVariable(variable) {
  console.log(variable);
}

function func(x) {
  x("Hello World");
}

func(printVariable);

function someCallBack(a, b, callback) {
  callback(a + b);
}

function handleSum(sum) {
  console.log(sum);
}

someCallBack(1, 2, handleSum);

function nameCallBack(name, callback) {
  callback(name);
}

function printName(name) {
  console.log("Hello " + name);
}

nameCallBack("Jerry is the man", function (variable) {
  console.log(variable);
});
