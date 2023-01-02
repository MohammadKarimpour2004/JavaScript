let Name = 'mohammad';
let family = 'karimpour';

//methods:
console.log(Name[2]);//=>h : با استفاده از ایندکس حرف را برمیگرداند

console.log(family.length);//=>9 : طول رشته را برمیگرداند

console.log(Name.concat(family));//=> mohammad karimpour

console.log('  m  '.trim());//=> اسپیس ها را پاک میکند

console.log('MOHAMMAD'.toLowerCase());//=> mohammad

console.log('mohammad'.toUpperCase());//=> MOHAMMAD

console.log(Name.search("mm"));//=> 4

console.log(family.includes('pour'));//=> true

console.log(Name.slice(4,8));//=> mmad

console.log(family.substring(1,5));//=> arim

console.log('mohammad-karimpour-18'.split('-'));//=> ['mohammad','karimpour','18']

console.log(eval('12 * 30'));//=> 360

console.log(Name.replace('m','s'));//=> sohammad

