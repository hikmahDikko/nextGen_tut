//How to create an Array

let hikmahDetails = ["Dikko", "Hikmat", "Yetunde", 18, 0903456];

console.log(hikmahDetails);
console.log(hikmahDetails[0]);
console.log(hikmahDetails[1]);
console.log(hikmahDetails[2]);
console.log(hikmahDetails[3]);
console.log(hikmahDetails[4]);

let details={
    name: "Hikmat Dikko",
    age: 16,
    workDetails: ["Frontend Developer", 
        "Backend Developer", "Node Developer"],
    fullName: function (){
        return this.name;
    }
}

console.log(details.name);
console.log(details.age);
console.log(details.workDetails);
console.log(details.fullName());
