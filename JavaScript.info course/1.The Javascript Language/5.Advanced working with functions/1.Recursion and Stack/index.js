function pow(x, y){
    if(y === 0) return 1
    return x * pow(x, y -1)
}
console.log(pow(2, 3))

let company = { // the same object, compressed for brevity
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}],
        more: {
            users: [{name: "fucked", salary: 300}]
        }
    }
};

function sumSalary(obj){
    if(Array.isArray(obj)) return obj.reduce((acc, curr) => acc + curr.salary, 0)
    else{
        let sum = 0
        for(let value of Object.values(obj)){
            sum += sumSalary(value)
        }
        return sum
    }
}
console.log(sumSalary(company))

// Big 0 = O(n)
function sumTo(n){
    if(n === 0) return n
    return n + sumTo(n - 1)
}
// console.log(sumTo(1000000000)) // RangeError

function sumTo1(n){
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum += i
    }
    return sum
}
// console.log(sumTo1(1000000000)) // working

// Big O = O(1)
function sumTo2(n){
    return n * (n + 1) / 2
}
console.log(sumTo2(1000000000)) // working


function factorial(n){
    return n <= 1 ? n : n * factorial(n - 1)
}
console.log(factorial(5))

// Big O = O(2^n)
function fibonacci(n){
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

// Big O = O(n)
function fibonacci2(n){
    let first = 1
    let second = 1
    for(let i = 3; i <= n; i++){
        let third = first + second
        first = second
        second = third
    }
    return second
}
// console.log(fibonacci(99))
// console.log(fibonacci2(99))

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList1(list){
    if(!list.next) return list.value
    return list.value + " " + printList1(list.next)
}
function printList2(list){
    let string = ""
    while(list){
        string += list.value + " "
        list = list.next
    }
    return string
}
console.log(printList1(list))
console.log(printList2(list))

function print1(list){
    if(list.next) return print1(list.next) + " " + list.value
    return list.value
}
console.log(print1(list))