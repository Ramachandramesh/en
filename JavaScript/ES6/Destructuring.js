console.log("Hi From app2")
// Normal Function
/*let arr = [1,2,3,4]

let ele1 = arr[0]
let ele2 = arr[1]
let ele3 = arr[2]
let ele4 = arr[3]
console.log(ele1, ele2, ele3, ele4)
*/
// ES6 Destructuring functions

/*let arr = [1,2,3,4]

let [ele1, ele2, ele3, ele4] = arr
console.log(ele1, ele2, ele3, ele4)
*/

// Normal Function

let arr = [1,2,3,4]

let ele1 = arr[0]
let ele2 = arr[1]
let ele3 = arr[2]
let ele4 = arr[3]
console.log(ele1, ele2, ele3, ele4)

// ES6 Destructuring Arry

let brr = [56,25,89,99]

let [dle1, dle2, dle3, dle4] = brr
console.log(dle1, dle2, dle3, dle4)

// Normal Destructuring Object
let course ={
    'topic1' : 'html',
    'topic2' : 'CSS',
    'topic3' : 'JS',

}
console.log(course);

// ES6 Destructuring object

let {topic1,topic2,topic3} = course
console.log(topic1,topic2,topic3)
// (Key and Variables are same is accepted)