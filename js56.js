// JSON
// json  الهام گرفته از آبجکت جاوااسکریپت میباشد برای ارتباط با سرور های مختلف

//ساختار
[
    {
        "id":1,
        "name": "mohammad",
        "job":[
            "programmer",
            "developer"
        ]
    },
    {
        "id":2,
        "name": "sana",
        "job":[
            "Homeer",
            "baby dev"
        ]
    }
]

// تبدیل آبجکت به جسیان
JSON.stringify(users)
// تبدیل جیسان به آبجکت
JSON.parse(users)