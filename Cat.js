var mouse = require('./Mouse');
function Cat() {
  this.stomach = [];
}
Cat.prototype.eat = function(animal) {
  if (animal instanceof mouse) {
    this.stomach.push(animal);
  } else {
    throw new Error('Mouse can only eat mouse!');
  }
};
module.exports = Cat;