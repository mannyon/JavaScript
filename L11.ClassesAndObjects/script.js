let Data = "secret information"

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("data =", Data);
  }
}

class student1 extends User {
    work() {
        console.log("homework is pending");
    }
}

class student2 extends User {
    work() {
        console.log("homework is done");
    }
}

class teacher1 extends User {
    work() {
        console.log("scheduled for class 8th");
    }
}

class teacher2 extends User {
    work() {
        console.log("scheduled for class 12th");
    }
}

class Admin extends User {
    editData() {
        Data = "new data";
    }
}

let studentUser1 = new student1("Ashish", "abc@email.com");
let studentUser2 = new student2("Manish", "def@email.com");
let teacherUser1 = new teacher1("Sharadha", "ghi@email.com");
let teacherUser2 = new teacher2("Aman", "jkl@email.com");
let admin1 = new Admin ("admin", "admin@college.com");

// class Person {
//     constructor(name){
//        this.species = "homo sepians";
//        this.name = name;
//     }
//     eat() {
//         console.log("eat");
//     }
//     sleep() {
//         console.log("sleep");
//     }
//     repeat() {
//         console.log("repeat");
//     }
// }

// class Engineer extends Person {

//    constructor(name) {
//     super(name);
//    }
//     work() {
//         super.eat();
//         console.log("Solve problems, build something");
//         super.sleep();
//         super.repeat();
//     }
// }

// let engObj = new Engineer("manish");

// class Parent {
//     hello() {
//         console.log("hello world");
//     }
// }

// class Child extends Parent {
//     bye() {
//         console.log("Good night");
//     }
// };

// let obj = new Child();

// const student = {
//     fullName : "Manish",
//     marks : 95,
//     printMarks : function () {
//         console.log("marks =", this.marks);
//     },
// };

// const employee = {
//     calcTax() {
//         console.log("the rate is 10%");
//     },
// };

// const karanArjun = {
//     salary : 50000,
//     calcTax() {
//         console.log("the rate is 20%");
//     },
// };

// karanArjun.__proto__ = employee;

// class toyotaCar {
//     constructor(brand, mileage, cost) {
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//         this.cost = cost;
//     }

//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }
// }

// let fortuner = new toyotaCar("fotuner", 10, 5000);
// console.log(fortuner);
// let lexus = new toyotaCar("lexus", 12, 4000);
// console.log(lexus);
// fortuner.setBrand("fortuner");
// lexus.setBrand("hyudai");
