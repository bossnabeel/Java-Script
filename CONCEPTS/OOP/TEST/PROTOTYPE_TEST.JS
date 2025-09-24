// ## 📝 Prototype Test

// **Q1. Theory**
// JavaScript me `__proto__` aur `.prototype` me kya difference hai?
// (short & clear likhna)
/**
 * __proto__ inhertance k liye hota hy 
 * .prototype kssi b object ka hota hy iska use kr k hm koi b custom method ya property bna sktya kiun k in tha end har cheez js me object hi hy
 */
// ---

// **Q2. Coding**
// Ek `Person` constructor banao jisme `name` aur `age` ho.
// Aur uske prototype pe ek method `introduce()` likho jo print kare:
// `"Hi, I am <name> and I am <age> years old."`
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.indtoduce = function () {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
}
let person = new Person("Nabeel", 19)
person.indtoduce()
// ---

// **Q3. Coding**
// Ek `Student` constructor banao jo `Person` ko inherit kare.
// Uske andar `grade` property add karo.
// Aur Student ke prototype me ek method `study()` banao jo print kare:
// `"<name> is studying in grade <grade>."`
function Student(name, grade) {
    Person.call(this, name);
    this.grade = grade;
}
Student.prototype.study = function () {
    console.log(`${this.name} is studying in grade ${this.grade}`);
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student
let student = new Student("nabeel", "xi")
student.study()
// ---

// **Q4. Theory**
// Agar tum `Object.create()` use karte ho inheritance ke liye to uska fayda kya hai compare to `__proto__`?
/**
 * dekho mujhy __proto__ ka ziyada nae pta but object.create methods sy hm kssi b constructor function
 *  ka protype copy kr lety apny use k liye yuhn inheritance asaan ho jati hy
 */
// ---

// **Q5. Output Prediction**
// Is code ka output kya hoga?

// ```js
// function Animal(name) {
//   this.name = name;
// }
// Animal.prototype.speak = function () {
//   return this.name + " makes a noise.";
// }
// function Dog(name) {
//   Animal.call(this, name);
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.speak = function () {
//   return this.name + " barks.";
// };

// let d = new Dog("Tommy");
// console.log(d.speak());
// ```
// ans is Tommy barks.
// ---

// ⚡ Chal bro, tu answers likh phir mai marks dunga 🔥
