"use strict";
//   task one
class Product {
    constructor(id, productName, price, description) {
        this.id = id;
        this.productName = productName;
        this.price = price;
        this.description = description;
    }
    hasDiscount(a) {
        return a;
    }
    discount(hasDiscount) {
        if (hasDiscount) {
            return (this.price - this.price * 0.1);
        }
        else {
            return this.price;
        }
    }
    show() {
        return `id : ${this.id} , productName: ${this.productName} ,price : ${this.price} ,description : ${this.description}`;
    }
}
//   task two
let firstProduct = new Product(1, "iphone", 8000, "good");
let secondProduct = new Product(1, "samsung", 10000, "good");
let thirdProduct = new Product(1, "oppo", 5000, "good");
let arr = [];
arr.push(firstProduct);
arr.push(secondProduct);
arr.push(thirdProduct);
// console.log(arr);
let showDetails = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`index : ${i} , object :{ ${arr[i].id} , ${arr[i].productName} , ${arr[i].price} , ${arr[i].description}}`);
    }
};
showDetails(arr);
//   task three word
let array = [];
array.push(234, 24, 6, 7);
console.log(array);
// task four 
let array2 = [];
array2.push(234, "mano", 10);
console.log(array2);
// task five 
let mohamed;
mohamed = 10;
mohamed = true;
// task six
let func = (a, b) => {
    console.log(a + b);
};
func("3", 3);
class Employee {
    // readonly id:number ;
    // readonly username:string;
    constructor(id, name, username, email, address) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        // this.username = _username
        // this.id = _id
    }
}
// let mano = new Employee(1,"mohmaed","mano","mmano321@gmail.com",{street:"tokhy",suite:"cairo",city:"cairo",zipcode:"234",geo:{lat:"234",lng:"23423"}})
class Manager extends Employee {
    view() {
        return `address : {street : ${this.address.street} , suite : ${this.address.suite} , city : ${this.address.city} , zipcode : ${this.address.zipcode} , geo :{lat: ${this.address.geo.lat} , lng : ${this.address.geo.lng}}`;
    }
}
let mano = new Manager(1, "mohmaed", "mano", "mmano321@gmail.com", { street: "tokhy", suite: "cairo", city: "cairo", zipcode: "234", geo: { lat: "234", lng: "23423" } });
console.log(mano.view());
