// Code your solutions in this file
'use strict'
const majina=["Charlie", "Samip", "Ali"]
const sherehe="birthday"


function writeCards(stringNames,eventName){
    let newEmptyArray=[]
    for (let i=0; i<stringNames.length; i++){
        
        newEmptyArray.push((`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`))
        
        
    }
    return newEmptyArray
}
console.log(writeCards(majina,sherehe))

function countDown(n){
  let hesabu = n+1
  while (hesabu > 0){
    hesabu--;
    console.log(hesabu);
}

}
countDown(10)


