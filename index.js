
var Cat = require('./Cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');


var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog('Ki');
cat.eat(mouse);
try {
  cat.eat(dog);
} catch (error) {
  console.log('Error while cat eat dog!');
}
console.log(cat);
