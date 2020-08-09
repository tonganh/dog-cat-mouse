var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat('Tom');
var mouse = new Mouse('Jerry');
var dog = new Dog('Ki');
try {
  cat.eat(dog);
} catch (error) {
  console.log('Error while cat eating!');
}

console.log(cat);