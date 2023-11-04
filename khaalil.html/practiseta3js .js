//test1
// Assign 2
/*
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = 'blue';
document.querySelector("h1").style.fontSize = '80px';
document.querySelector("h1").style.fontWeight = 'bold';
document.querySelector("h1").style.textAlign = 'center';
document.querySelector("h1").style.fontFamily = 'arial';

// Assign 3
console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px", "color: green; font-size: 40px; font-weight: bold;", "color: white; font-size: 40px; background-color: blue");

// Assign 4
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();


// Assign 5

console.table(["Elzero", "Mostafa", "Alaa", "Ahmed", "Selim"]);

// Assign 6
// console.log("Iam In Console");
// document.write("Iam In Page");
/* console.log("Iam In Console");
document.write("Iam In Page"); */


/*
===
=== === === === === === === === === === === === === = ==
Variables And Concatenation Challenge ==
    ===
    === === === === === === === === === === === === === =

    [1] Create 3 Variables[Title, Desctiption, Date]
    --All In One Statement
    --Variable Name Must Be Two Words
    --Title Content Is "Elzero"
    --Description Content Is "Elzero Web School"
    --Date Content Is "25/10" [2] Create Variable Contains Div And This Div Contains
    --H3 For Title
    --P For Paragraph
    --Span For Time[3] Add This Card To Page 4 Times[4] Use Template Literals For Concatenate

Extra
    -
    Use ES6 Repeat*/
let The_title = "el zero",
    The_descreption = "Elzero Web School",
    The_date = "25/10";
let nigger = `
    <h1>${The_title}</h1>
    <div class="description">
    <p>${The_descreption}</p>
    <p>${The_date}</p>
    
    
    
    </div>
  `;
document.write(nigger);

//test2

let hoho = 10,
    momo = 20;
console.log(hoho + "" + momo);
console.log(typeof(hoho + "" + momo));
console.log(`${hoho}${momo}`);
console.log(typeof(`${hoho}${momo}`));
console.log(hoho + "\n" + momo);
console.log(`${hoho}
${momo}`);



console.log(`I'm In
\\
Love \\\\\\\\ """ '''
++ With ++
\\"""\\"""
""JavaScript""\`\``);
console.log(`\\\\\\`);
console.log(" `I'm In \n \\\\ \n love \\\\ \"\"\" ' ' ' \n ++ With ++ \n \\ \"\"\"\\\"\"\" \n \"\"JavaScript\"\"``");


let a = 21;
let b = 20;

console.log(a + "_" + b); // _21_2021_2021_2021_20_



let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(num * --num); // 6

// Soultion Three
console.log(true * 3 + ++num); // 6

// Soultion Four
console.log(num * --num); // 6
console.log(num)
    // Solution Five
console.log((++num * ++num) / (true + true));
// Solution Six

//--num ytahsbb


console.log("hoho");



let numm = "10";

// Solution One
console.log(+numm + +numm); // 20
//+num t5rjlk 10
// Solution Two
console.log(++numm - --numm + --numm + ++numm);
// t9dr tdirlo ++ normal
// 20
// Solution Three
console.log((+numm * --numm / ++numm) + ++numm); // 20
// Solution Four
console.log(--numm + numm); // 20



let points = 10;

// Write Your Code Here

console.log(points); // 13

// Write Your Code Here

console.log(points); // 8;





// Examples
//console.log(100 _000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(50000 + 50000); // 100000
console.log(10 ** 5); // 100000
console.log(+"100000"); // 100000
console.log(1e5); // 100000
console.log(Number("100000")); // 100000

console.log(Math.pow(10, 5)); // 100000
console.log(Math.round(99999.8));
// 100000
console.log(Math.trunc(100000.9)); // 100000
console.log(Math.ceil(99999.8)); // 100000
console.log(Math.floor(100000.1));;
console.log(Number(100000.4.toFixed(0)));
// matraj3 walo mor el fassila
console.log(Math.round(parseFloat("100000.400 Mostafa")));
console.log(Number.MAX_SAFE_INTEGER);




let myVar = "100.56789 Views";

console.log(Number(parseFloat(myVar).toFixed(2)));
console.log(typeof(Number(parseFloat(myVar).toFixed(2))));

console.log(parseInt(myVar));
console.log(typeof(parseInt("100.56789 Views"))); // 5 et 3



let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt));
// 10
console.log(Math.trunc(flt)); // 10
console.log(flt.toFixed(0)); // 10
console.log(parseInt(flt)); // 10



const randomNum = Math.floor(Math.random() * 5);
console.log(randomNum);
// 0 || 1 || 2 || 3 || 4

// 3add ar9am
console.log(`${Number.MAX_SAFE_INTEGER}`.length);



/*
  Challenge 1
*/

let aa = 10;
let bb = "20";
let cc = 80;
// a=11

console.log(++aa + +bb++ + +cc++ - +aa++);
// 11! + 20 + 81 - 12
//console.log(++aa + -bb + +cc++ - -aa++ + +aa);
//console.log(--cc + +bb + --aa * +bb++ - +bb * aa + --aa - +true);

/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

let dd = "-100";
let e = "20";
let f = 30;
let gg = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-dd * +e); // 2000
console.log((-dd * true) * (f - +e) + (-dd) * (f - +e - true - true - true) + (f + true + true + true)); // 1733









let userName = "Elzero";
console.log(userName[3]); // e
console.log(userName.charAt(3)); // e
console.log(userName.slice(3, 4));
// 0 1 
console.log(userName.slice(-3, -2)); // -1 0 
console.log(userName.substring(3, 4));; // e
console.log((userName.charAt(3)).repeat(3)); // eee







let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ));
// True
console.log(letterE.toLowerCase())
console.log(word.startsWith(letterE.toUpperCase()));
// True
console.log(word.endsWith(letterO.toLowerCase())); // True






/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let aaaaaaaaaaa = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(aaaaaaaaaaa.charAt(2).toUpperCase() + aaaaaaaaaaa.slice(3, 6)); // Zero

// 8 H
console.log(aaaaaaaaaaa.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(aaaaaaaaaaa.slice(0, 6)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(aaaaaaaaaaa.substr(0, 6) + " " + aaaaaaaaaaa.substr(11, 17)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(aaaaaaaaaaa.charAt(0).toLowerCase() + aaaaaaaaaaa.slice(1, aaaaaaaaaaa.length - 1).toUpperCase() + aaaaaaaaaaa.charAt(aaaaaaaaaaa.length - 1).toLowerCase()); // eLZERO WEB SCHOOl





console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 != 100 != 10 != 20); // true
console.log(-10 == "-10"); // true
console.log(-50 != +"-40"); // true
console.log(10 != -"-40"); // true
console.log("10" == 10); // true
console.log(20 != false); // true*/







let num1 = 10;
let num2 = 20;
console.log("hr")
console.log(num1 != num2); // true
console.log(num1 !== num2); // true
console.log(num1 < num2); // true
console.log(num1 <= num2); // true
console.log(num1 <= num2 && num1 !== num2); // true
console.log(num1 <= num2 || num1 !== num2); // true
console.log(!(num1 == num2))


let aaa = 20;
let bbb = 30;
let c = 10;
console.log("hr")

console.log(aaa < bbb && aaa > c || aaa == bbb); // true
console.log(aaa != bbb >= aaa > c); // true
console.log((aaa < bbb) && !(aaa > bbb) && (aaa > c) && (aaa > c)); // truea// Test Case 1








//let nummm = 9; // "009"

// Test Case 2
//let nummm = 20; // "020"

// Test Case 3
//let nummm = 110; // "110"
/*if (nummm < 10) { console.log("00" + nummm) } else if (nummm >= 10 && nummm < 100) { console.log("0" + nummm) } else {
    console.log(nummm);
}*/


let numm1 = 9;
let str = "9";
let str2 = "20";

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"
if (numm1 == str) {
    console.log("{num1} Is The Same Value As {str}");
}
if (typeof numm1 != typeof str) {
    console.log("{num1} Is The Same Value As {str}");
}
if (numm1 !== str2) { console.log("{num1} Is The Same Value As {str2}") }
if (str != str2) { console.log("{str} Is The Same Value As {str2}") }






let num10 = 10;
let num20 = 30;
let num30 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
//if ((num3 > num10 && num20 !== num10) && (num20 == num3) && (num20 !== num3) && (num20 == num3) && (num20 !== num3)) { console.log("hi") }



// Edit What You Want Here

let num100 = 22;
let num200 = 10;
let num300 = 22;
let num4 = 55;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num100 > num200) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (num100 > num200 && num100 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (num100 > num200 && num100 === num300) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4
//32 23
if ((num100 + num200) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((num100 + num300) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((num100 + num200 + num300) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7
/*let num100 = 22;
let num200 = 10;
let num300 = 22;
let num4 = 55;*/

if (num4 - (num100 + num300) + num200 === 21) {
    console.log("True");
} else {
    console.log("False");
}


/*
    let day = "   friday  ";
    // You Need To Remove Spaces And Make First Letter Capital => Friday

    let day = "Friday";
    let day = "Saturday";
    let day = "Sunday";
    // Output => "No Appointments Available"

    let day = "Monday";
    let day = "Thursday";
    // Output => "From 10:00 AM To 5:00 PM"

    let day = "Tuesday";
    // Output => "From 10:00 AM To 6:00 PM"

    let day = "Wednesday";
    // Output => "From 10:00 AM To 7:00 PM"

    let day = "World";
    // Output => "Its Not A Valid Day"
}*/

let day = "   friday  "
day = day.trim()
day = day.charAt(0).toUpperCase() + day.slice(1)

console.log(day)
switch (day) {
    default: console.log("roh t9wad")
    break;

    case "Friday":
            case "Saturday":
            case "Sunday":
            console.log("No Appointments Available")
        break;

    case "Monday":
            case "Thursday":
            console.log("From 10:00 AM To 5:00 PM")
        break;

    case "Tuesday":
            console.log("From 10:00 AM To 6:00 PM")
        break;

    case "Wednesday":
            console.log("From 10:00 AM To 7:00 PM")
        break;

}







let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let nuem = 3;


myFriends.length = nuem
    // Method 1
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];




let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.length = --friends.length
friends.shift()
console.log(friends); // ["Eman", "Osama"]







let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrOne.concat(arrTwo);

// Write One Single Line Of Code
finalArr = finalArr.sort().reverse()
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]






let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZEROO






let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
if (haystack.includes(needle) === true) { console.log("kayna") }


if (haystack.indexOf(needle) !== -1) { console.log("kayna") }
if (haystack.lastIndexOf(needle) !== -1) { console.log("kayna") }



















let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(allArrs); // fxy
/*arr1.shift();
arr1.shift();
arr2.shift();
arr2.shift();
allArrs = arr1.concat(arr2);
allArrs = allArrs.sort().join("").toLowerCase(); // fxy
console.log(allArrs); // fxy*/





allArrs = arr1.concat(arr2).sort().join("").slice(arr1.indexOf("C") + arr2.indexOf("Y")).toLowerCase();

console.log(allArrs);





let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

/*

my.push("Mostafa");

my = my.reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];
my = my.slice(counter);
console.log(my);*/




//console.log(my.slice(++zero, counter).reverse()); // ["Elham", "Mazero"]

/*console.log(my[--counter].slice(zero, counter) + my[++zero].slice(counter)); // "Elzero"
console.log(counter)*/
console.log(my[++zero].slice(- --counter)); // "rO"







let start = 10;
let end = 100;
let exclude = 40;

// Output
10
20
30
50
60
70
80
90
100


for (let i = start; i < end; i += start) { if (i != 40) { console.log(i); } }



console.log("--------------------------------------------------------------")



let starte = 10;
let ende = 0;
let stope = 3;

// Output
/*10
09
08
07
06
05
04
03*/
for (let ii = starte;; --ii) {
    if (ii == stope) { console.log(`${0}${ii}`); break } else if (ii < 10) {
        console.log("0" + Number(ii));
    } else {
        console.log(`${ii}`)
    }
}
console.log(typeof(`${10}`))

console.log("--------------------------------------------------------------")





let starst = 1;
let ends = 6;
let breaker = 2;

// Output
/*1
--2
--4
2
--2
--4
3
--2
--4
4
--2
--4
5
--2
--4
6
--2
--4*/




for (let j = starst; j <= ends; j++) { console.log(`${j}
${"--"}${breaker}
${"--"}${breaker+breaker}`) }




console.log("--------------------------------------------------------------")


let index = 10;
let jump = 2;

for (;;) {
    console.log(index);
    if (index == jump + jump) {
        break;
    }

    index = index - jump;
}

// Output
10
8
6
4






let frieneds = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
for (let g = letter.length - 1; g < frieneds.length; g++) {
    if (frieneds[g][letter.length - 1].toLowerCase() === letter) { continue; } else { console.log(frieneds[g]) }
}





let steart = 0;
let swappedName = "elZerO";
let coco = ""
for (let p = steart; p < swappedName.length; p++) {
    if (swappedName[p] === swappedName[p].toUpperCase()) {
        coco += swappedName[p].toLowerCase()
    } else if (swappedName[p] === swappedName[p].toLowerCase()) {


        coco += swappedName[p].toUpperCase()

    }
}
console.log(coco);





let startThree = 0;
let swappedNamee = "elZerO";
let result = "";

for (let n = startThree; n < swappedNamee.length; n++) {
    if (swappedNamee[n] === swappedNamee[n].toLowerCase()) {
        result += swappedNamee[n].toUpperCase();
    } else if (swappedNamee[n] === swappedNamee[n].toUpperCase()) {
        result += swappedNamee[n].toLowerCase();
    }
}
console.log(result);







let setart = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Output
2
3
4
console.log(typeof(mix[1]))
for (h = ++setart; h < mix.length; h++) {
    if (typeof(mix[h]) === "number") { console.log(mix[h]) }






}




console.log("--------------------------------------------------------------")
    /*let friendees = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
    let indeex = 0;
    let counteer = 0;

    // Output
    "1 => Sayed"
    "2 => Mahmoud"


    while (counter < friendees.length) {
        if (friendees[counteer][indeex] !== "A" && typeof(friendees[counteer]) === "string") { console.log(friendees[counteer]) }
        ++counteer;
    }*/
let friendxs = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let indexx = 0;
let countexr = 0;

while (index < friendxs.length) {
    if (typeof friendxs[indexx] === "number" || friendxs[indexx].startsWith("A")) {
        indexx++;
        continue;
    }
    console.log(`"${++counter} => ${friendxs[index]}"`);
    index++;

}
console.log("--------------------------------------------------------------")




function sayHello(theNameee, theGender) {
    if (theGender == "Male") { console.log(`Helllo Mr ${theNameee}`) } else if (theGender == "Female") { console.log(`Helllo Miss ${theNameee}`) } else { console.log(`Helllo  ${theNameee}`) }

}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
sayHello("Osama", "nigger");
sayHello();


console.log("--------------------------------------------------------------")



function calculate(firstNum, secondNum, operation) {
    if (operation === undefined && secondNum === undefined) { console.log("secondNum + firstNum") } else if (operation === undefined) { console.log(secondNum + firstNum) } else if (operation === "subtract") { console.log(secondNum - firstNum) } else if (operation === "multiply") { console.log(secondNum * firstNum) } else if (secondNum === undefined || firstNum === undefined) { console.log("roh t9awd") }
}

// Needed Output
//calculate(20); // Second Number Not Found
//calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
/*calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600*/


console.log("--------------------------------------------------------------")


function ageInTime(theAge) {
    if (theAge > 100 || theAge < 10) { console.log("roh t9awd") } else { console.log(` ${theAge*12}
    ${theAge*365} 
    ${theAge*8,784 }`) }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

console.log("--------------------------------------------------------------")



function checkxStatus(ax, bx, cx) {
    let nxame;
    let axge;
    let sxtatus;
    typeof ax === "string" ? nxame = ax : typeof ax === "number" ? axge = ax : ax = sxtatus
    typeof bx === "string" ? nxame = bx : typeof bx === "number" ? axge = bx : bx = sxtatus
    typeof cx === "string" ? nxame = cx : typeof cx === "number" ? axge = cx : cx = sxtatus


    typeof sxtatus === true ? document.write(`Hello ${nxame} , you age ${axge} You Are Available For Hire `) : document.write(`Hello ${nxame} , you age ${axge} You Are not Available For Hire `)




}

// Needed Output
checkxStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkxStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkxStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkxStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
console.log("--------------------------------------------------------------")