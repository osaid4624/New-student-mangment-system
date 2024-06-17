// Student Mangment Sysytem 
// main class
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//Student 
class student extends person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.coures = [];
        this.name = name;
        this.age = age;
        this.rollNumber = rollNumber;
    }
    setInstercter(coures) {
        this.coures.push(coures);
    }
}
// Instructer
class Instruter extends person {
    constructor(name, age, salary, coures) {
        super(name, age);
        this.coures = [];
        this.assingCoures = [];
        this.salary = salary;
    }
    setAssingCoures(assingCoures) {
        this.assingCoures.push(assingCoures);
    }
}
class coures {
    constructor(name, id, instrutor, student) {
        this.student = [];
        this.instrutor = [];
        this.id = id;
        this.name = name;
    }
    addStudent(std) {
        this.student.push(std);
    }
    setInstructor(instrutor) {
        this.instrutor.push(instrutor);
    }
}
// Coures
const coures1 = new coures('Typescript', 1, 'Sir Hamza', ['Usaid']);
const coures2 = new coures('Java', 2, 'Sir Usama', ['Hamza']);
const coures3 = new coures('Python', 3, 'Sir Moaz', ['Talha']);
// student 
const name = new student('usaid', 24, 1);
const name2 = new student('Hamza', 23, 2);
const name3 = new student('Talha', 22, 3);
// Instruter
const instruterName = new Instruter('Sir Hamza', 30, 25000, ['Typescript']);
const instruterName2 = new Instruter('Sir Usama', 35, 35000, ['Java']);
const instruterName3 = new Instruter('Sir Moaz', 40, 45000, ['Python']);
// set coures for student
coures1.addStudent(name);
coures2.addStudent(name);
coures3.addStudent(name2);
coures2.addStudent(name3);
coures1.setInstructor(instruterName);
coures2.setInstructor(instruterName2);
// Department Statment 
class Department {
    constructor(name) {
        this.coures = [];
        this.name = name;
    }
    addCoures(coures) {
        this.coures.push(coures);
    }
}
const d1 = new Department('computer scince');
const d2 = new Department('Information Technology');
d2.addCoures(coures2);
console.log(d2.coures[0]);
export {};
