
// for (; ;) {
//     console.log(i++);
//     if (i == 10)
//         break;
// }

first: for (let i = 0; i < 5; i++) {
    for(let j = 0 ; j < 5  ; j++) {
        if( i == 1 && j ==1)
            continue first;
        console.log(i , j);
    }    
}


