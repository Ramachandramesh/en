const arr = [1,6,8,4,2]
function abc(val){
    console.log(val)
}
let average_value = 0
function average(ele)
{
average_value = average_value + ele
}
function avg(ele)
{
    average(ele)
}
arr.forEach(abc)
arr.forEach(avg)
console.log(average_value/5)

//anonymus function

//const arr = [1,6,8,4,5,2]
//arr.forEach(function(val)
//{
  //  console.log(val)
//})