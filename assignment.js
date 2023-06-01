const days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // getDay() method returns the number of days Sunday as 0 to Saturday as 6, so this list is made so that on being using it with days it returns the name of the day
const d = new Date();// created an instance of Date and stored it in variable d
let day = d.getDay();// used getDate method to access today
console.log("Today is : " + days[day] + "."); //to get the output on the console 

let hours = d.getHours();
let mins = d.getMinutes();
let sec = d.getSeconds();
let ampm = (hours >= 12)? "PM" : "AM"; //used ternary operator to find out whether it's AM or PM
hours = (hours>=12)? hours-12: hours; // to get time in the 12 hour time format
if(hours===0 && ampm ==='PM'){// So that time would be accurate in the noon when the AM changes to PM
  if(mins===0 && sec==0) {
    hours = 12;
    ampm = "Noon";
  }
  else{
    hours = 12;
    ampm = "PM";
  }
}
if(hours===0 && ampm ==='AM'){// So that time would be accurate in the midnight when the PM changes to AM
  if(mins===0 && sec==0) {
    hours = 12;
    ampm = "Midnight";
  }
  else{
    hours = 12;
    ampm = "AM";
  }
}

console.log("Current Time " + hours + ampm + ":" + mins + ":" + sec);





