function isleadyear(year){
    return (year%100===0) ? (year%400===0):(year%4===0);
}

console.log(isleadyear(2016));
console.log(isleadyear(2022));






