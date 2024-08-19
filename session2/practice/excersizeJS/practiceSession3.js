const numbers = [2, 3, 9, 12, 15, 3, 1];
let max = 0;

for (const num of numbers) {
    if (num > max) {
        max = num;

    }


}
for (const num of numbers) {
    if (num = max) {
        continue;
    } else {
        if (num > max) {
            max = num;
        }
    }
}
console.log(max);

/*
const largest= (arr)=>{
    let large= arr[0];
    for (const num of arr){
        if(num>large){
            large=num;
        }
    }
    return large;
}
const secondLarge=(arr)=>{
    if(!Array.isArray(arr)){
        return null;
    }
    if(arr.length<2){
        return null;
    }
    const large= largest(arr);
    const tempArr=[];
    for(const item of arr){
        if(item !== large){
            tempArr.push(item)
        }
    }
    if(tempArr.length===0){
        return null;
    }
    const secondLarge=largest(tempArr);
    return secondLarge;
}
console.log(largest(1254));
console.log(largest([1,12,11,5]));


*/