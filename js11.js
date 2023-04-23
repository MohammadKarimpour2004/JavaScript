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

//--------------------------------
//استاندارد ارو فانگشن ES6
const zarb = (a,b)=>{
    console.log(a*b);
}
//در ارو فانگشن ها اگر دستور فقط یک خط باشد نیازی به آکلاد نیست
let one = ()=> console.log(1)
//اگر تعداد ورودی های فانگشن فقط یک عدد باشد پرانتز لازم نیست
let no = one_1 => alert(one_1);
num_2.forEach( n => console.log(n *10))
//--------------------------------

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

