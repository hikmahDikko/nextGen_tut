exports.MulTable = ((start, end) => {
    for(let i = start; i <= end; i++){
        for(let j = 1; j <= 12; j++){
        mul = j * i;
    
        console.log(`${j} * ${i} = ${mul}`);
        }
    }
});

// var mul;

// function multiply(start, end){
//     for(let i = start; i <= end; i++){
//         for(let j = 1; j <= 12; j++){
//             mul = j * i;
        
//             console.log(`${j} * ${i} = ${mul}`);
//         }
//     }

// }

// multiply(2, 4);