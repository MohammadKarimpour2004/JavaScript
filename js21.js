//دقیقا مثل متد انکلود میباشد اما با این میتوان بغیر از جواب بولین المان های مد نظر که در ارایه وجود داشتند را هم برگرداند

//دقیقا مثل فور ایچ نوشته میشود 

let num = [
    {name:'mohammad',age:18},
    {name:'majed',age:12},
    {name:'ali',age:87}
]

let some = num.some((user)=>{
     
    return user.age >= 15   
     
})

console.log(some);