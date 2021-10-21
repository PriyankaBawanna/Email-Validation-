console.log("this is regular expression");
let reg = /there$/i; //this is regular expression litteral in javascript
//reg = /welCome/i;
console.log(reg);
console.log(reg.source);

//function to match expression
let stringforsearch = "welcome  to java script world welcome there";
//exec()-this function will returen an array for match  or null for no match
let result = reg.exec(stringforsearch);
console.log(result);
if (reg.test(stringforsearch)) {
  console.log(
    `this string ${stringforsearch} matches the expression ${reg.source}`
  );
} else {
  console.log(
    `this string Does not ${stringforsearch} matches the expression ${reg.source}`
  );
} /*
result = reg.exec(stringforsearch);
console.log(result.input);
console.log(result.index);
//2. test()- return true or false
let result2 = reg.test(stringforsearch);
console.log(result2);
//3. match() = it weill returm an array of result or null
let result3 = stringforsearch.match(reg);
console.log(result3);
// search ()= returen index of first match or return -1
let result4 = stringforsearch.search(reg);
console.log(result4);
5; //replace()= returns now replace string with all the replacements
//if golbal flag is not given then first match would be change
let result5 = stringforsearch.replace(reg, "Monday");
console.log(result5);*/
