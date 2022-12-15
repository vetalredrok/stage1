//Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
const str = 'ahb acb aeb aeeb adcb axeb';
const re = /a[a-z]b/gi;
console.log(str.match(re));

//Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const str1 = '2 + 3 223 2223';
const re1 = /2\s\+\s3/;
console.log(str1.match(re1)[0]);

//Get the day, month and year of the current date and output it to the console separately
const date = new Date();
const dd = date.getDate();
const mm = date.getMonth()+1;
const year = date.getFullYear();

console.log(dd);
console.log(mm);
console.log(year);
