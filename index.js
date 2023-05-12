function writeCards(array, event){
    
    const messages = []
for (let a = 0; a < array.length; a++)
{console.log(`Thank you, ${array[a]}, for the wonderful ${event} gift!`)
messages.push(`Thank you, ${array[a]}, for the wonderful ${event} gift!`)
}
return (messages)
}
writeCards(["Charlie", "Samip", "Ali"], "birthday");



function countDown(number){
while(number > -1){
    //what we want to happen
    console.log(number)
    number--
}
}
countDown(10)