//   task one

interface Iproduct {
    id:number;
    productName:string;
    price:number;
    description:string;
    hasDiscount:(a:boolean)=> boolean;
    discount:(hasDiscount:boolean) => number;
    show:()=>string;
}

class Product implements Iproduct{
    
    constructor(public id:number,public productName:string ,public price:number , public description:string){}
    hasDiscount(a:boolean):boolean {
        return a;
    }
    discount(hasDiscount:boolean):number{
        if(hasDiscount){
            return (this.price - this.price*0.1 );
        }else{
            return this.price
        }
    }
    show():string{
        return `id : ${this.id} , productName: ${this.productName} ,price : ${this.price} ,description : ${this.description}` 
    }

}

//   task two

let firstProduct = new Product(1,"iphone",8000,"good")
let secondProduct = new Product(1,"samsung",10000,"good")
let thirdProduct = new Product(1,"oppo",5000,"good")

// console.log(myProduct);


type obj = {id:number,productName:string,price:number,description:string}
let arr:obj[] = []
arr.push(firstProduct)
arr.push(secondProduct)
arr.push(thirdProduct)
// console.log(arr);

let showDetails = (arr:obj[])=>{
   for (let i = 0; i < arr.length; i++) {
    console.log(`index : ${i} , object :{ ${arr[i].id} , ${arr[i].productName} , ${arr[i].price} , ${arr[i].description}}`)
   }
}

showDetails(arr)


//   task three word

let array:number[] = []
array.push(234,24,6,7)
console.log(array);

// task four 

let array2:(number|string)[] = [] 

array2.push(234,"mano",10)

console.log(array2);


// task five 

let mohamed:(number|boolean) ;

mohamed = 10;
mohamed = true;

// task six

let func = (a:string,b:number)=>{
    console.log(a + b);
}
func("3",3)

// task seven

interface Iemployee {
    readonly id:number;
    name:string;
    readonly username:string;
    email:string;
    address:{street:string,suite:string,city:string,zipcode:string,geo:{lat:string,lng:string}};
 
}

class Employee implements Iemployee{
    // readonly id:number ;
    // readonly username:string;
    constructor(readonly id:number ,public name:string ,readonly username:string, public email:string, public address:{street:string,suite:string,city:string,zipcode:string,geo:{lat:string,lng:string}})
    {
        // this.username = _username
        // this.id = _id
    }
}


// let mano = new Employee(1,"mohmaed","mano","mmano321@gmail.com",{street:"tokhy",suite:"cairo",city:"cairo",zipcode:"234",geo:{lat:"234",lng:"23423"}})

class Manager extends  Employee {
    constructor(readonly id:number ,public name:string ,readonly username:string, public email:string, public address:{street:string,suite:string,city:string,zipcode:string,geo:{lat:string,lng:string}}) {
        super(id,name,username,email,address)
    }
    view():string{
    
        return `address : {street : ${this.address.street} , suite : ${this.address.suite} , city : ${this.address.city} , zipcode : ${this.address.zipcode} , geo :{lat: ${this.address.geo.lat} , lng : ${this.address.geo.lng}}`
    }
    
}

let mano = new Manager(1,"mohmaed","mano","mmano321@gmail.com",{street:"tokhy",suite:"cairo",city:"cairo",zipcode:"234",geo:{lat:"234",lng:"23423"}})

console.log(mano.view());