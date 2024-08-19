outer: for (let i = 0; i < 5; i++) {
    for(let j = 0 ; j < 5  ; j++) {
        if( i == 1 && j ==1)
            break outer;
        console.log(i , j);
    }    
}


