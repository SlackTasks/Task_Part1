const fn_1 = (a,b,c) => {
    if (a === 0 || b === 0 || c === 0){
        return 'YES'
    }
    if ((a === 5 && b !== 5 && c !== 5) || ( b === 5 && a !== 5 && c !== 5) || ( c === 5 && a !== 5 && b !== 5)){
        return 'YES'
    }
    if( a !== b &&  b !== c && c !== a){
        return 'YES'
    }
    if((a === b && (b !== c || a !== c)) || (b === c && (b !== a || c !== a)) || (a === c && (a !== b || c !== b)) ){
        return 'YES'
    }
    if(a === b &&  b === c && c === a){
       return 'YES'
    }
    if( Math.sign(a) === -1 || Math.sign(b) === -1 || Math.sign(c) === -1){
        return 'YES'
    }
    return  'NO'
}

console.log(fn_1(1,-2,3))