/*
function funName(وردی ها){
    دستورات
}
*/
//ساختار ساده
function nums(a,b){
    console.log(a + b);
}
//ریختن در یک متغیر
let plus = function(a,b){
     console.log(a+b);
}
//استاندارد ES6

const zarb = (a,b)=>{
      console.log(a*b);
}
//نحوه استفاده

nums(12,23)//=> 35  
plus(80,89)//=> 169
zarb(12,10)//=> 120 


//تعین مقدار دیفالت ورودی ها
 
function vorodi(a=40,b=14) {
    console.log(a+b);
}

vorodi()//=>54
vorodi(10,12)//=>22

//return => برای برگرداندن جواب 
function too(){
    return 45
}

let god = too()//=> 45

