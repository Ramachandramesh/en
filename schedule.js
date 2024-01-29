//function abc(){
//    console.log("I am inside abc")
//}
//console.log("Hello")
//console.log("Hi")
//console.log("Hii")
//console.log("Hiii")
//setTimeout(abc,5000)

function abc(){
    console.log("I am inside of abc")
}
console.log("Hello")
let intervel = setInterval(abc, 1000)
console.log("Hi")
function clear(){
    clearInterval(interval)
}
let timeout = setTimeout(clear, 5000)