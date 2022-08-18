const array1 = [1,2,3,"abc",4,5];
const array3 = [5,8,9,10,11,12];
const array4 = [20,10,9,8,4,2,1];
const array2 = [10,2,13,4,25];

array1.forEach(element => console.log(element));

const myCities = ["London", "New York", "Singapore"];

const arrayInfo = (element, index) => console.log(element + " is located at index " + index);

for(let i = 0; i < myCities.length; i++){
    arrayInfo(myCities[i], i);
};

myCities.forEach((element, index) => arrayInfo(element, index));

const newArr = array2.map(element => element * element);

console.log(newArr);

console.log(myCities.includes("London"));

const fil = array3.filter(num => num > 10);
console.log(fil)

//.find() to check element methods based on there type

// const num = element => typeof element === "number";
// const str = element => typeof element ==="string";
 
// const test1 = array2.every(num);
// const test2 = array1.some(str);
// console.log(test1);
// console.log(test2);

const arrayCheck = inputArray => {
    if(inputArray.some(element => typeof element !== "number")){
        return "Some elements are not numbers";
    }
    
    if(inputArray.every((element, index, initialArray) => index > 0 ? element >= initialArray[index - 1] : true
    )){
        return "Element's are in ascending order";
    }

    if(inputArray.every((element, index, array) => index > 0 ? element <= array[index - 1] : true)){
        return "Element's in descending order";
    }

    return "Not sorted"
};

console.log(arrayCheck(array1) + "\n" + arrayCheck(array3) + "\n" + arrayCheck(array4) + "\n" + arrayCheck(array2));
