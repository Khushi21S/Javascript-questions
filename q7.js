console.log("-----------------");
for (var year= 2014; year<= 2050; year++){
    var d = new Date(year, 0, 1);
    if (d.getDay()===0){
        console.log("1st Jan is Sunday " + year);
    }
}
console.log("----------------");



