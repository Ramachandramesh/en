function call()
{
    console.log("I am printed inside funcvvvvvtion")
}
function jall()
{
    console.log("Ramachandra Rammeshh")
}
function add (n1,n2, ram, jk)
{
    console.log(n1+n2)
    ram()
    jk()

}
let a=1;
let b=5;

add(a,b, call, jall);
let c=8;
let d=2;
add(c,d, call, jall);
add(b,d,jall,call);