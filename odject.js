let riyal={

name : "NURE ALAM RIYAL",
roll:2034,
male:true,
adderse: {
    country:"bangladesh",
    divison:"rangpur",
    zill:{
        name:"dinajpur",
        'upzilla-name':"birganj",
        present:["jahangirnagar","university","savar","dhaka",1340],
    }

}


}
let NewName="name";
console.log(riyal)
// console.log(riyal.adderse)
// console.log(riyal.adderse.country)
// console.log(riyal.adderse.zill)
// console.log(riyal.adderse.zill['upzilla-name'])
// console.log(riyal.adderse.zill.present)
// console.log(riyal.adderse.zill.present[riyal.adderse.zill.present.length-1])
riyal.roll=2040
console.log(riyal)
let n1=0;
for(const n in riyal){
    console.log(n+" :"+riyal[n])
    n1++;
}
console.log(n1)
console.log(riyal.NewName)
let key=Object.keys(riyal);
console.log(key)
let key1=Object.values(riyal);
console.log(key1)