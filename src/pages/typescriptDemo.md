import { type } from "os"

let testStringOrNumberArray: (string | number) []

testStringOrNumberArray = ["Hi", 45, "Okay"]

// OBJECT

let user = {
    name: "John",
    age: 22,
    isAdmin: false
}

let userObj : {
    username: string,
    age: number
    isAdmin: boolean
}

userObj = {
    username: "john",
    age: 67,
    isAdmin: true
}

// Not Required
let userObj1 : {
    username: string,
    age: number
    isAdmin: boolean
    phone?: string
}

 userObj1 ={
    username: "f",
    age: 34,
    isAdmin: false,
}

// ANY

let testAny;

testAny = ["Effi", 134, true, {name: "What do ou need"}]

// FUNCTIONS

// declare the function with type
const func = ():string => {
    return "deon_dev"
    // typed function must return a value of the specified type
    // else it will flag an error
}

let multiple = (nums: number)=> {
    return nums * 2
}

// Declare a parameter without using it
let sum = (sum1:number, sum2:number, sum3?:any) => {

}
sum(89, 34)

let funct = (user: {username: string, age:number, phone?: number}): => {

}

// Type Aliases 

type userType = {
name: string,
phone: number,
}

const funcType = (user:userType)  => {
    console.log(user.name)
}