/*-------------Завдання №1-------------*/
// let car = {
//     type: 'electric',
//     wheels: 4,
// }

// let sportCar = {
//     doors: 2,
// }

// Object.setPrototypeOf(sportCar, car);

// let passengerCar = Object.create(car);
// passengerCar.doors = 4;

// let toyCar = Object.create(car);
// toyCar.type = 'toy';
// Object.setPrototypeOf(toyCar, sportCar);
// console.log(toyCar.doors);

/*-------------Завдання №2-------------*/
// let employees = {
//     wallet: {},
//     pay(month, sum){
//         this.wallet[month] = sum;
//     }
// }

// let frontendDeveloper = {
//     name: 'Mike',
//     wallet: {},
// }
// Object.setPrototypeOf(frontendDeveloper, employees);

// let backendDeveloper = {
//     name: 'Bob',
// }
// Object.setPrototypeOf(backendDeveloper, employees);

// backendDeveloper.pay('june', 1500);
// frontendDeveloper.pay('june', 1700);

// console.log(backendDeveloper.wallet.june);
// console.log(frontendDeveloper.wallet.june);

/*-------------Завдання №3-------------*/
// function User(name, age){
//     this.name = name;
//     this.age = age;
// }
// let user_1 = new User('Mike', 18);
// let user_2 = new user_1.constructor('Bob', 25);

// console.log(user_1);
// console.log(user_2);

/*-------------Завдання №4-------------*/
// function UserType(name){
//     for(let i = 0; i < name.length; ++i){
//         this[i] = name[i];
//         if(i + 1 == name.length){
//             Object.defineProperty(this, 'length', {
//                 enumerable: true,
//                 writable: false,
//                 configurable: true,
//                 value: i + 1
//             });
//         }
//     }
// }

// let admins = new UserType(['Mike', 'Bob', 'Nikola']);
// admins.join = Array.prototype.join;
// console.log(admins.join('; '));