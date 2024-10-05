// const country="bangladesh";
// console.log(country);
// const slice=country.slice(2,6);
// console.log(slice)
const sentense="bangladesh is my  motherland"
// console.log(sentense.split("l"))
console.log(sentense)
let letter="";
for(const word of sentense){
    letter=word+letter;
}
console.log(letter)
// string or array use to includes function to find a word and letter . and return true and false.
const reve=sentense.split('').reverse().join("")
console.log(reve)