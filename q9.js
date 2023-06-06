today = new Date();
var chri = new Date(today.getFullYear(),11,25);
if(today.getMonth()==11 && today.getDate()>25){
    chri.setFullYear(chri.getFullYear()+1);
}

const one_day = 1000*60*60*24;
console.log(Math.ceil((chri.getTime()-today.getTime())/(one_day))+ " Days left till Christmas");