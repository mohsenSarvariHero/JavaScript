let var1 = 2;
let var2 = 5;


console.log(var1 > 8 ? var2 > 8 ? 'var1 and var2  are bigger than 8' : 'var1 bigger than 8 and var2 less than 8' : 'var1 less or equal to 8');


if(var1 > 8 ){
    if(var2 > 8)
        console.log('var1 and var2 bigger than 8');
    else 
        console.log('var1 bigger than 8 and var2 less than 8');   
}
else {
    console.log('var1 less or equal to 8');
}
