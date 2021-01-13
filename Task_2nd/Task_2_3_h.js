let z = 10;
let d = 2;
let f = 12;

if(z<d && z<f){
    console.log(z)
}else if(f<z && f<d){
    console.log(f)
}else if(d<z && d<f){ ///Stex karox es miangamic console.log(d) gres, kariq chka avelor payman stugel
    console.log(d)
}

if(z>d && z>f){
    console.log(z)
}else if(f>z && f>d){
    console.log(f)
}else if(d>z && d>f){ //nuynnel stex
    console.log(d)
}


if((z>d && z<f) || (z<d && z>f)){
    console.log(z)
}else if((d>z && d<f) || (d<z && d>f)){
    console.log(d)
}else if((f>z && f<d) || (f<z && f>d)){
    console.log(f)
}