function ctof(celsius){
    let temp1 = celsius;
    let Cfar = temp1 *9/5 + 32;
    let text = temp1 + '\xB0C is '+ Cfar + '\xB0F.'
    console.log(text);

}

function ftoc(Farhenite){
    let temp2= Farhenite;
    let farC = (temp2-32) * 5/9;
    let text2 = temp2 + '\xB0F is '+ farC + '\xB0C.'
    console.log(text2);

}

ctof(60);
ftoc(45);