                                  // Student Mangment System  
// Main class
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// Student class
class Student extends Person {
    rollNumber: number;
    courses: string[] = [];
    registerForCourse: string[] = [];

    constructor(name: string, age: number, rollNumber: number) {
        super(name, age);
        this.rollNumber = rollNumber;
    }

    setInstructor(course: string) {
        this.courses.push(course);
    }
}

// Instructor class
class Instructor extends Person {
    salary: number;
    coursesTeaching: string[] = [];
    assignedCourses: string[] = [];

    constructor(name: string, age: number, salary: number, coursesTeaching: string[]) {
        super(name, age);
        this.salary = salary;
        this.coursesTeaching = coursesTeaching;
    }

    assignCourse(course: string) {
        this.assignedCourses.push(course);
    }
}

// Course class
class Course {
    name: string;
    id: number;
    students: Student[] = [];
    instructors: Instructor[] = [];

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    addStudent(student: Student) {
        this.students.push(student);
        student.registerForCourse.push(this.name); // Corrected property name
    }

    setInstructor(instructor: Instructor) {
        this.instructors.push(instructor);
    }
}

// Department class
class Department {
    name: string;
    courses: Course[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addCourse(course: Course) {
        this.courses.push(course);
    }
}

// Create courses
const course1 = new Course('Typescript', 1);
const course2 = new Course('Java', 2);
const course3 = new Course('Python', 3);

// Create students
const student1 = new Student('Usaid', 24, 1);
const student2 = new Student('Hamza', 23, 2);
const student3 = new Student('Talha', 22, 3);

// Create instructors
const instructor1 = new Instructor('Sir Hamza', 30, 25000, ['Typescript']);
const instructor2 = new Instructor('Sir Usama', 35, 35000, ['Java']);
const instructor3 = new Instructor('Sir Moaz', 40, 45000, ['Python']);

// Assign students to courses
course1.addStudent(student1);
course2.addStudent(student1);
course3.addStudent(student2);
course2.addStudent(student3);

// Assign instructors to courses
course1.setInstructor(instructor1);
course2.setInstructor(instructor2);

// Create departments
const department1 = new Department('Computer Science');
const department2 = new Department('Information Technology');

// Add courses to departments
department1.addCourse(course2);
console.log(department2.courses[0]); // Output the first course in department2

