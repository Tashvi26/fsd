// function display()
// {
//     alert("hello js")
// }
// function display() {
//     console.log("hello js",x);
// }
// var x=14;
//  console.log("hello 35",x);
// display();

// let x=12.22;
// let y="hello";
// console.log(typeof y);
// let z=true;
// let obj={
//     'name':'tashvi',
//     id:12,
 
// }
function validate()
{
    let un=document.getElementById('un').value;
    let pass=document.getElementById('pass').value;
    if(un=='admin' && pass=='admin'){
        document.getElementById("res").innerHTML="login success";

    }
    else{
        document.getElementById("res").innerHTML="login failed"
    }
   
    
}