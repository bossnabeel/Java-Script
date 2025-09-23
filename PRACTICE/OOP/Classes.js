class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    print() {
        console.log(this.name, this.age);
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age)
        this.subject = subject
    }
   print(){
        console.log(this.name,this.age);
    }
}
let person = new Person("nabeel", 19)
person.print()
let teacher = new Teacher("nabeel", 19, "js")
teacher.print()
