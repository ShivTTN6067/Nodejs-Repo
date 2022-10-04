const fs = require('fs');

 const getNameTestSy =() => {
    console.log("abc");
    // const res = fs.readFile("./index.ts");
    //console.log("qwe",res);
    fs.readFile("./index.ts", (err, res)=>{
        if(err){
            console.log("error",err);
        }
        console.log("dd",res);
    })
    console.log("s");
    setTimeout(()=>{
        console.log("set ")
    },0);
}

//getNameTestSy
function hof(a){ 
    return  function(b){
        return hof(a+b);
    }
}

// const sum = (b) =>{
//     return a+b;
// }
function sum (a){
    return (a+b);
}
console.log(hof(1)(2)())

