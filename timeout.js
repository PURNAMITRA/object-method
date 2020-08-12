function doSomething(){
    console.log(3333);
}
console.log(2222);
//setTimeout(doSomething,1000);

// setTimeout(function(){
//     console.log('lazy and waiting')
// },4000);


setTimeout(()=>{
    console.log('lazy and waiting')
},4000);

console.log(4444);

setInterval(function(){
    console.log('doing it')
},1000);