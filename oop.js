// const obj ={
//     name:"mostafa",
//     age:35,
//     hello: function sayhello(){
//         console.log(`hello ${obj.name}`)
//     },
//     arry:[1,2]
// }

// Factory Function
// function employee(n,a){
//     return {
//         name:n,
//         age:a
//     }

// }
// Constructor Function 
// let emp1 = employee("mostafa",25);
//  function Employee(n,a){
//     this.name=n,
//     this.age=a
//  }
//   let emp2 = new Employee("nour",25);
// Using Object.create()
//    let person = {
//     name:"ali",
//     hello: function(){
//         console.log("hello")
//     }
//    }
//     const ali = Object.create(person);

// let x = 'HAMDE'.toLocaleLowerCase();

// function user (n){
//     this.name=n
// }
//  user.prototype.display= function(){
//   console.log(`hello${this.name}`)
//  }
// //  let user1= new user("ali");
// //  user1.display();
// let user2 = Object.create(user.prototype) 
// user2.name="mostafa"
// user2.display();
// function heelo(age){
//     console.log(`hello ${this.name} +" "+${age}`)
// } 
// let prson = {name:"ali"};
// heelo.call(prson,25);
// heelo.apply(prson,[25,"ali"])
// let late = heelo.bind(prson);
// class User {
//   constructor(n, a) {
//     this.name = n;
//     this.age = a;
//   }
//   displayInfo() {
//     console.log(this.name, this.age);
//   }
// }
// let u1 = new User("hamada", 20);
//chiled
// class Employee extends User{
//     constructor(n,a,s){
//         super(n,a);
//         this.salary = s;
//     }
// }
// let e1 = new Employee("ali",25,5000);
// console.log(e1)

// class Student extends User {
//   #grades = 0;
//   constructor(n, a, g) {
//     super(n, a);
//     this.#grades = g;
//   }

//   get getGrades() {
//     return this.#grades;
//   }

//   set setGrades(v) {
//     this.#grades = v;
//   }

//   calcGrades() {
//     console.log(this.#grades);
//     this.#privateMethod();
//   }
//   #privateMethod() {
//     console.log("Hi i am private method");
//   }
// }
// let stu = new Student ("ali",25,200)
// stu.getGrades();
// stu.setGrades(2000);

// class  user {
//     constructor(n,a){
//         if (this.constructor==user){
//             throw "invalied obj";
//         }
//         this.name = n;
//         this.age = a;
//     }
// }
// let rong = new user("ali",25);
// // console.log(rong);
