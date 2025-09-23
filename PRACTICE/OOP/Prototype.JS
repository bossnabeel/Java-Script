//protype 
//constructor function to create objects
let Person = function (names, age) {
    this.names = names
    this.age = age
}
Object.prototype.greet = function () {
    console.log(this.names, this.age);
}
let p1 = new Person("nabeel", 18)
p1.greet()
//custom method or property of object
//method
Object.prototype.cube = function () {
    return this * this * this
}
console.log((3).cube());
//property
Object.defineProperty(Number.prototype, "square", {
    get: function () {
        return this * this;
    }
})
console.log((4).square);

inheritance

function Student(names, grade, age, roll) {
    // __proto__ use for inherit
    //__proto__: Person 
    Person.call(this, names, age)
    this.grade = grade;
    this.roll = roll;
}
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student
Student.prototype.print = function () {
    console.log(this);
}
let student = new Student('nabeel', 'xi', 19, 212);

console.log(student.print())

