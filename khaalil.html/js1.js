// Wait The Window To Load
window.onload = function() {
    // Single Line Comment
    document.querySelector("h1").style.color = "Blue"; // Single Line Comment
};

// Single Line Comment
// Single Line Comment
// Single Line Comment

/* Single Line Comment */

/*
  1
  2
  3
  4
  5
*/

// Ctrl + /
/*
  Output To Screen
  - window.alert()
  - document.write()
  - console.log()

  Syntax
*/

window.alert("Hello From JS File");

document.write("<h1>Hello <span>Page</span></h1>");
//tktb contenue da5l la page
console.log("Hello From JS File");
// tktb f console
window.alert("vv");








/*
  Console Methods
  - log
  - error
  - table

  Web API

  Styling Console
  - Directive %c
*/

console.log("Log");
console.error("Error");
//bach tbayin error
console.table(["Osama", "Ahmed", "Sayed"]);
//ybano f console f tableau
console.log("Hello From %cJS %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px");
console.log("%choho %cbobo", "color:red;", "color:green;")
    //ydir print w tdirlo css mais ya3rfbli css ta3 js file brk b %c
    //%c ll js w zawja ll file/*










/*
ES6
    */

var myName = "Osama";

console.log("Hello " + myName);
console.log(`Hello ${myName}`);













/*
Data Types Intro
- String
- Number
- Array => Object
- Object
- Boolean
*/
// typeof ta3rf biha naw3 data
console.log("Osama Mohamed");
console.log(typeof "Osama Mohamed");
console.log(typeof "5000");
//hada string
console.log(typeof 5000);
//mais hada num
console.log(typeof 5000.99);
// hada number mam ykon bel fasilla
console.log(typeof [10, 15, 17]);
console.log(typeof { name: "Osama", age: 17, country: "Eg" });
//tji key m3a value
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);


/*
  Variables Intro
  - What Is Variable ?
  - Why We Use Variables ?
  - Declare A Variable And Use
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  - Variable Without Var
  - Multiple Variables In The Same Line
  - Id And Global Variable
  ki tdir div fih id ywali global var t9dr tsta3mlo
  - Loosely Typed vs Strongly Typed
*/

var user = "Sayed";
// machi lazm tbtk var
// lazm declaration bach l instruction 
console.log(user);








/*
Identifiers
- Name Conventions And Rules
- Reserved Words
*/
//mat5alich vid , matbdahch b number , capitale letter ybadel var ,
// 
var userName = "Sayed";

console.log(userName);


/*
  Var
  - Redeclare (Yes)
  t9dr tdiclarih chhhal mn la5r
  - Access Before Declare (Undefined)
   mat9drch declarer mor console.log
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  tban error ma diclarihch deux foit
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
    tban error ma diclarihch deux foit
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/





/*
  String Syntax + Character Escape Sequences
  \ Escape + Line Continue tkml str
  \n
*/

console.log('Elzero Web "School"');
// string t9dr tkatbo bin " " wla ''
// bach yban "" da5l l ktiba f la fichage  lazm tdriha da5l '"'wla "''"
console.log("Elzero Web 'School'");
console.log("Elzero Web \"School\"");
// i tdir \ "" ybano
console.log('Elzero \\ Web \'School\'');
// f had  exemple bach tktb \ tdirlha zoul \\
console.log("Elzero \
Web \
School");
// hna bach mat5lich l vid chrl rak t9olo eskiper l enter mat5lfch str 
console.log("Elzero\nWeb\nSchool");
//\n kima f ctrlf str



/*
  Concatenation
*/
/*
let a = "We Love";
let b = "JavaScript";
*/
document.write(a + " " + b);
// hadi tba f la page
console.log(a, b);
/* hadi f console*/



/*
  Template Literals (Template Strings)
*/

// First Example

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(a = " \"\" " + b +
    "\n" + c + " " + d);
// new methode
console.log(`${a} "" '' \\ ${b}
${c} ${d}`);
// ki traj3o llstr f l programme yrj3 ll str f console
//bach yban "" dirlhom direct '' dirhom direct mais bach tban \ dir \\
// Second Example

let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

document.write(markup);




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


var The_title = "el zero",
    The_descreption = "Elzero Web School",
    The_date = "25 / 10 ";

let nigger = `
  <h1>${The_title}</h1>
  <div class="description">
  <p>${The_descreption}</p>
  <p>${The_date}</p>
  
  
  
  </div>
`;
document.write(nigger);






















/*
  Arithmetic Operators
  + Addition
  - Subtraction
  * Multiplication
  / Division
  ** Exponentiation (ES7)
  % Modulus (Division Remainder)
  ++ Increment [ Post / Pre ]
  //post yhat era9m amba3d ybda yzid w l + yji mor l var
  //pre yzid era9m amba3d y printih w l + yji 9bl l var
  -- Decrement [ Post / Pre ]
*/

console.log(10 + 20);
console.log(10 + "Osama");
// hna 10 ytahssb string
console.log(10 - 20);
console.log(10 - "Osama"); // NaN
console.log(typeof NaN);
//
console.log(10 * 20);
console.log(10 * -20);

console.log(20 / 5);
console.log(20 / 3);

console.log(2 ** 4);
// hada puissance **
console.log(2 * 2 * 2 * 2);

console.log(10 % 2);
// modulo
console.log(11 % 2); // Remove 1












/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]


  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/

console.log(+100);
console.log(+"100");
// ywali num
console.log(+"-100");
console.log(+"Osama");
// nan
console.log(+"15.5");
console.log(+0xff);
// bel hex w affichage b dicimal
console.log(+null);
console.log(+false);
// yraj3 0
console.log(+true);
// yraj3 1
console.log(-100);
console.log(-"100");
// -100
console.log(-"-100");
console.log(-"Osama");
// nan
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
//-0
console.log(-false);
// -0
console.log(-true);
// -1
console.log(Number("100"));
// traj3 num












/*
  Type Coercion (Type Casting)
  - +
  - -
  - "" - 2
  - false - true
*/

let g = "100";
let n = 20;
let m = true;

console.log(g + n + m);
// t5rj 1020trueconsole.log(g + n + m);
console.log(+g + n + m);
// hadi ki dirlo + ywali num
//"10" -20 = -10 t5rjlk normal
//""- 2= -2 t5rjlk equivalant ta3 0-2=2
//false -true=




/*
  Assignment Operators
*/

let k = 10;

k = k + 20;

k = k + 70;

k += 100; // a = a + 100

k -= 50; // a = a - 50

k /= 50; // a = a / 50
console.log(k);






/*
  Challenge 1
*/

let aa = 10;
let bb = "20";
let cc = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

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

console.log(); // 2000
console.log(); // 173


















/*
  Number
  - Double Precision
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/

console.log(1000000);
//console.log(1 _000_000);
// bach yban era9m
console.log(1e6);
// e6 ma3nah 6 zero
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);
console.log(Number.MAX_SAFE_INTEGER);
//a3la ra9m t9dr tdiro w may5ljlkch num ralt
console.log(Number.MAX_VALUE);
// akbr ra9m f js
console.log(Number.MAX_VALUE + 23434343434);
//y5rj kima console.log(Number.MAX_VALUE);




/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

console.log((100).toString());
//thawl ra9m ila string
console.log(100.10.toString());
console.log(100.554555.toFixed(2));
// traj3 string
// ydi ra9mayn b tadwir
console.log(Number("100 Osama"));
console.log(+"100 Osama");
// trj3 nan
console.log(parseInt("100 Osama"));
// traj3 100  num
console.log(parseInt("Osama 100 Osama"));
// hna nan
console.log(parseInt("100.500 Osama"));
// trj3 100 tadich fassila 
console.log(parseFloat("100.500 Osama"));
// trj3 ra9m kaml
console.log(Number.isInteger("100"));
// machi 3add sahih w raj3 false
console.log(Number.isInteger(100.500));
// false
console.log(Number.isInteger(100));
// true
console.log(Number.isNaN("Osama" / 20));
// true






/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]
*/

console.log(Math.round(99.2));
console.log(Math.round(99.5));
// eta9rib ll wihda lwla 99 w zawja 100
console.log(Math.ceil(99.2));
// ll fo9 wyali 100 mahma kant el fassila
console.log(Math.floor(99.9));
// ll taht wyali 99 mahma kant el fassila

console.log(Math.min(10, 20, 100, -100, 90));
// ydi min
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));
console.log(Math.random());
// ra9m 3achwai
console.log(Math.trunc(99.5));
//yraj3 ll 3dd esahih




/*
  Number Challenge
*/

let aaa = 100;
//let bbbb = 2 _00 .5;
let ccc = 1e2;
let ddd = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log();

// Use Variables a + d One Time To Get The Needed Output
console.log(); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log();
console.log();
console.log();
console.log();

// Use Variables b + d To Get This Valus
console.log(); // 66.67 => String
console.log(); // 67 => Number



/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]);
// y5rj h 
console.log(theName[5]);
// t5rjlk indifind
console.log(theName.charAt(1));
// kifkif kima lwla 
//.charAt(1)=theName[1]
console.log(theName.charAt(5));
// t5j3 vid
console.log(theName.length);
// yhsb les carcther mais ybda bl wahd
console.log(theName.trim());
// tnahi l vid yli f the name psq vid ytahsb caracthere
console.log(theName.toUpperCase());
//ga3 el nom ywali majuscule
console.log(theName.toLowerCase());
//ga3 el nom ywali miniscule

console.log(theName.trim().charAt(2).toUpperCase());
//klch f str wahd



/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
  mand lazm opt kima thab
*/

let aaaa = "Elzero Web School";
// yhawss 3la string w ki mayl9ahch ymdlk -1
console.log(aaaa.indexOf("Web")); //7
console.log(aaaa.indexOf("Web", 8)); //-1
// ybda mn l index 8
console.log(aaaa.indexOf("o")); // 5
// yhawss mn lwl
console.log(aaaa.lastIndexOf("o")); // 15
// yhawss mn la5r mais ybda yhassb mn lwl!!!
console.log(aaaa.slice(2, 6));
// mnin ybda w win ykml lokan matktbch 6 ykaml hta l5r
// l index 6 mayydihch ydi yli 9ablo
console.log(aaaa.slice(-5, -3));
// yssab mn l5r 
// ybda mn -1
// maydihach ydi yli moraha
console.log(aaaa.repeat(5));
// t3awdd 5 foit
console.log(aaaa.split("", 6));
//string ywalli arey wya9ssmhom
//console.log(aaaa.split("")); y9samhomlhorof
//console.log(aaaa.split(" ")); y9smhom mnl vid
//6 howa chhal mn carachter y9assmo





/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let aaaaa = "Elzero Web School";

console.log(aaaaa.length);

console.log(aaaaa.substring(2, 6));
console.log(aaaaa.substring(6, 2));
// hado ymado nfss natija ezero
console.log(aaaaa.substring(-10, 6)); // 0 - 6 kif kif -num howa 0
console.log(aaaaa.substring(aaaaa.length - 5, aaaaa.length - 3));
// ch tbanlk 
console.log(aaaaa.substr(0, 6)); // el zero
// tmdlo  l index  w chhal mn caracther morah ybda yahssb mn
console.log(aaaaa.substr(17));
console.log(aaaaa.substr(-3));
// yhassb mn la5r
console.log(aaaaa.substr(-5, 2)); // yban ch 
// ydi -5  2 string morah
console.log(aaaaa.includes("Web"));
// ida fih web wla lala yraj3 true wla false
console.log(aaaaa.includes("Web", 8)); // false

console.log(aaaaa.startsWith("E"));
// ida ybda b E wla lala 
console.log(aaaaa.startsWith("E", 2));
//  position 2 ybda b E
console.log(aaaaa.startsWith("zero", 2));
// t9dr tdirha bklma kamlt
console.log(aaaaa.endsWith("l"));
// ida t5lass kelma kaml b l
console.log(aaaaa.endsWith("l", 6));
//ida kalma1 yli fiha 6 caracheret5lass b l
// 6 mn 


//substring bda (mn 0 w yadi 3)
//subster tmdlo l index w yadi yli morah(mn -1 ki ykon salb)

/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let aaaaaaaaaaa = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(); // Zero

// 8 H
console.log(); // HHHHHHHH

// Return Array
console.log(); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(); // eLZERO WEB SCHOOl





/*
  Comparison Operators
  - == Equal
  - != Not Equal

  - === Identical
  - !== Not Identical

  - > Larger Than
  - >= Larger Than Or Equal

  - < Smaller Than
  - <= Smaller Than Or Equal
*/
//hado 
console.log(10 == "10");
// Compare Value Only bel ar9am brk mayhamch string wla value
console.log(-100 == "-100"); // Compare Value Only

console.log(10 != "10"); // Compare Value Only kima lwla

console.log(10 === "10"); // Compare Value + Type t9arn mabin no3 wl 9ima
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

console.log(typeof "Osama" === typeof "Ahmed");











/*
Logical Operators
- ! Not
- && And
- || Or
*/

console.log(true);
// ! hadi ta3kss biha
console.log(!true);

console.log(!(10 == "10"));
// false 
console.log(10 == "10" && 10 > 8 && 10 > 50);

console.log(10 == "10" || 10 > 80 || 10 > 50);












/*
  Control Flow
  - if
  - else if
  - else

  if (Condition) {
    // Block Of Code
  }

*/

let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";

if (discount === true) {
    price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
    price -= 40;
} else if (country === "Syria") {
    price -= 50;
} else { //kimaytha9och ga3
    price -= 10;
}

console.log(price);











/*
  Nested If
*/

let pricee = 100;
let discounte = false;
let discountAmounet = 30;
let countrey = "Egypt";
let student = true;

if (discount === true) {

    price -= discountAmount;

} else if (country === "Egypt") {

    if (student === true) {

        price -= discountAmount + 30;

    } else {

        price -= discountAmount + 10;

    }

} else {

    price -= 10;

}

console.log(price);






/*
  Nested If
*/

let priceee = 100;
let discouneet = false;
let discountAmounte = 30;
let countrye = "Egypt";
let studente = true;

if (discount === true) {

    price -= discountAmount;

} else if (country === "Egypt") {

    if (student === true) {

        price -= discountAmount + 30;

    } else {

        price -= discountAmount + 10;

    }

} else {

    price -= 10;

}

console.log(price);








/*
  Conditional (Ternary) Operator
*/

let theNamee = "Mona";
let theGender = "Female";
let theAge = 30;

if (theGender === "Male") {
    console.log("Mr");
} else {
    console.log("Mrs");
}

// Condition ? If True : If False
// hada howa i5tissar ta3 if condition
// ? hadi if : else :xxxxxxxxx? else if
theGender === "Male" ? console.log("Mr") : console.log("Mrs");

let result = theGender === "Male" ? "Mr" : "Mrs";

document.write(result);

console.log(theGender === "Male" ? "Mr" : "Mrs");

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

theAge < 20 ?
    console.log(20) :
    theAge > 20 && theAge < 60 ?
    console.log("20 To 60") :
    theAge > 60 ?
    console.log("Larger Than 60") :
    console.log("Unknown");


















/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

console.log(Boolean(100));
console.log(Boolean(-100));
//true
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
// false
let priceeee = 0;

console.log(`The Price Is ${price || 200}`);
// data tji ki ykon var 0 wla null wla indifind tban 200
// y5dm b ga3 les falser var
console.log(`The Price Is ${price ?? 200}`);
// ydir null w indifend















/*
  If Condition Challenge
*/

let aaaaaa = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

// W Position May Change
if ("????" === "w") {
    console.log("Good");
}

if ("????" !== "string") {
    console.log("Good");
}

if ("????" === "number") {
    console.log("Good");
}

if ("????" === "ElzeroElzero") {
    console.log("Good");
}














/*
  Switch Statement
  switch(expression) {
    Case 1:
      // Code Block
      break;
    Case 2:
      // Code Block
      break;
    Default:
      // Code Block
  }
  - Default Ordering
  - Multiple Match
  - ===
*/

let day = "A";

switch (day) {
    default: console.log("Unknown Day"); // ki driha mn l5r matssha9ch breack
    break;
    case 0:
            console.log("Saturday");
        break;
    case 1:
            console.log("Sunday");
        break;
    case 2:
            case 3: //case2 case 3 nfss natija
            console.log("Monday");
        break;
}


























/*
  Switch Challenge
*/ //dirha if

let job = "Manager";
let salary = 0;

if (job === "Manager") {
    salary = 8000;
} else if (job === "IT" || job === "Support") {
    salary = 6000;
} else if (job === "Developer" || job === "Designer") {
    salary = 7000;
} else {
    salary = 4000;
}

/*
  If Challenge
*/ // hawlha switch

let holidays = 0;
let money = 0;

switch (holidays) {
    case 0:
        money = 5000;
        console.log(`My Money is ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
        console.log(`My Money is ${money}`);
        break;
    case 3:
        money = 2000;
        console.log(`My Money is ${money}`);
        break;
    case 4:
        money = 1000;
        console.log(`My Money is ${money}`);
        break;
    case 5:
        money = 0;
        console.log(`My Money is ${money}`);
        break;
    default:
        money = 0;
        console.log(`My Money is ${money}`);
}





/*
  Arrays
  - Create Arrays [Two Methods] new Array() + []
  - Access Arrays Elements
  - Nested Arrays
  - Change Arrays Elements
  - Check For Array Array.isArray(arr);
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriends[0]}`);
// td5l l lelm lwl 
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
// tjib el harf 3 mn ism zawj
console.log(`Hello ${myFriends[3][1]}`);
// aray el zayda index ta3ha 3 amba3d td5l da5lha tdi elm zawj
console.log(`${myFriends[3][1][2]}`);
// aray el zayda index ta3ha 3 amba3d td5l da5lha tdi elm zawj w tjib harf
console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);
// tzid elm
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);
// tbdl eray da5l eray
console.log(Array.isArray(myFriends));
// bach ta3rf ida arey wla lala





/*
  Array Methods
  - Length
*/

// Index Start From 0 [ 0, 1, 2, 3, 4 ]

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

myFriends.length = 2;
// 3add les elm w ybda index mn 0
//myFriends[6] = "hh"
// myFriends[4] tzid elm mn l5r yli howa lenght 
//myFriends[myFriends.length] = myFriends[4]
// yzido  2 lace vid amba3d hh w lenght 7
console.log(myFriends);







/*
  Arrays Methods [Adding And Removing]
  - unshift("", "") Add Element To The First
  - push("", "") Add Element To The End
  - shift() Remove First Element From Array
  - pop() Remove Last Element From Array
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriends);

myFriends.unshift("Osama", "Nabil");
// tzidha f deux ta3 arrey
console.log(myFriends);
//
myFriends.push("Samah", "Eman");
// hadi f la fin
console.log(myFriends);

let first = myFriends.shift();
// ynah awl elm w yraj3o f var
console.log(myFriends);

console.log(`First Name Is ${first}`);

let last = myFriends.pop();
// ynahi last elm w ydiro f var
console.log(myFriends);

console.log(`Last Name Is ${last}`);





/*
  Arrays Methods [Search]
  - indexOf(Search Element, From Index [Opt])
  - lastIndexOf(Search Element, From Index [Opt])
  - includes(valueToFind, fromIndex [Opt]) [ES7]
*/

let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends);
// ki t4rj -1 tsma makach
console.log(myFriends.indexOf("Ahmed"));
// yraj3 awl ahmed f arrey
console.log(myFriends.indexOf("Ahmed", 2));
// ybda yhawss mn index 2
console.log(myFriends.lastIndexOf("Ahmed"));
// hawss mn la5r ll lwl mais yhassb index normal
console.log(myFriends.lastIndexOf("Ahmed", -2));
// ybda yhassb index mn -1 
console.log(myFriends.includes("Ahmed"));
// bach tchof ida kayn elm wla lala
console.log(myFriends.includes("Ahmed", 2));

if (myFriends.lastIndexOf("Osama") === -1) {
    console.log("Not Found");
}

console.log(myFriends.indexOf("Osama"));
console.log(myFriends.lastIndexOf("Osama"));




/*
  Arrays Methods [Sort]
  - sort(Function [Opt])
  - reverse
*/

let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends);
console.log(myFriends.sort().reverse());
//sort yratb elm
//reverse t9lb les elm






/*
  Arrays Methods [Slicing]
  - slice(Start [Opt], End [Opt] Not Including End)
  --- slice() => All Array
  --- If Start Is Undefined => 0
  --- Negative Count From End
  --- If End Is Undefined || > Indexes => Slice To The End Array.length
  --- Return New Array
  - splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriends);
console.log(myFriends.slice());
//diha kaml
console.log(myFriends.slice(1));
// mn index 1 ll5r
console.log(myFriends.slice(1, 3));
//ydi mn 1 w maydich elm 3
console.log(myFriends.slice(-3));
// mn -3 ydiha w ykaml ll 5r
console.log(myFriends.slice(1, -2));
// -2 maydihch ot include the end
console.log(myFriends.slice(-4, -2));
console.log(myFriends);

myFriends.splice(1, 2, "Sameer", "Samara");
// mn index 1 y nahi 2 elm w ydir Sameer", "Samara
console.log(myFriends);






/*
  Arrays Methods [Joining]
  - concat(array, array) => Return A New Array
  - join(Separator)
*/

let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];

let allFriends = myFriends.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);
// tzid arrey jdida my friends tzidla  myNewFriends w yhatha f var w t9dr tzid wach thab 
console.log(allFriends);

console.log(allFriends.join());
// y5jlk str string binathom ,
console.log(allFriends.join(""));
//las9in
console.log(allFriends.join(" @ "));
// tdir binathom @
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());









/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice("????")); // ["Elham", "Mazero"]

console.log(); // "Elzero"

console.log(); // "rO"





/*
  Loop
  - For
  for ([1] [2] [3]) {
    // Block Of Code
  }
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}




/*
  Loop
  - Loop On Sequences
*/

let myFriends = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];

let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
    if (typeof myFriends[i] === "string") {
        onlyNames.push(myFriends[i]);
    }
}
// ki ykon compture kbir 3la les elm y5arl indifiend
console.log(onlyNames);

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }












/*
  Loop
  - Nested Loops
*/

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
    console.log("#".repeat(15));
    console.log(`# ${products[i]}`);
    console.log("#".repeat(15));
    console.log("Colors: ");
    for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
    }
    console.log("Models: ");
    for (let k = 0; k < models.length; k++) {
        console.log(`- ${models[k]}`);
    }
}






/*
  Loop Control
  - Break
  - Continue
  - Label
*/

let productss = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colorss = ["Red", "Green", "Black"];
// break thabss
//continue t nahhih w ykaml
//mainLoop mn nested loop t9dr t5rj mn loop ga3 tdir  break mainLoop;
mainLoop: for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
    nestedLoop: for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
        if (colors[j] === "Green") {
            break mainLoop;
        }
    }
}




/*
  Loop For Advanced Example
*/

let productsss = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let i = 0;

for (;;) {
    console.log(products[i]);
    i++;
    if (i === products.length) break;
}








/*
  Products Practice
*/

let productssss = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colorsss = ["Red", "Green", "Blue"];
let showCount = 3;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
    document.write(`<div>`);
    document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
    for (let j = 0; j < colors.length; j++) {
        document.write(`<p>${colors[j]}</p>`);
    }
    document.write(`<p>${colors.join(" | ")}</p>`);
    //tdirhom one line
    document.write(`</div>`);
}









/*
  Loop
  - While
*/

let productes = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let index = 0;

while (index < products.length) {
    console.log(products[index]);
    index += 1;
}






/*
  Loop
  - Do / While
*/

let productees = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let ie = 0;

do {
    console.log(ie);
    ie++;
} while (false);

console.log(ie);






/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

document.write(`<div>We Have X Admins</div>`);







/*
  Function
  - What Is Function ?
  - User-Defined vs Built In
  - Syntax + Basic Usage
  - Example From Real Life
  - Parameter + Argument
  - Practical Example
*/

function sayHello(userName) {
    console.log(`Hi ${userName}`);
}

sayHello("Osama");
sayHello("Sayed");
sayHello("Ali");






/*
  Function Advanced Examples
*/

function sayHello(userName, age) {
    if (age < 20) {
        console.log(`App is Not Suitable For You`);
    } else {
        console.log(`Hello ${userName} Your Age is ${age}`);
    }
}

sayHello("Osama", 38);
//lazm td5l nom w l age
sayHello("Sayed", 40);
sayHello("Ali", 18);

function generateYears(start, end, exclude) {
    for (let i = start; i <= end; i++) {
        if (i === exclude) {
            continue;
        }
        console.log(i);
    }
}

generateYears(1982, 2021, 2020);









/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

function generate(start, end) {
    for (let i = start; i <= end; i++) {
        if (i === 15) {
            return `Interrupting`;
            //tmdlo wach traj3 output
            // hna ma tafichich
            // mat9drch tktb moraha hta code
        }
        console.log(i);
    }
}

generate(10, 20);





/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

function sayHello(username = "Unknown", age = "Unknown") {
    // tmdlha defaut value ki matktbhach t5rj unknown
    // if (age === undefined) {
    //ki mayktbch age t5rj hadi
    //   age = "Unknown";
    // }
    // age = age || "Unknown";
    return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayHello());









/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

function calc(...numbers) {
    //tsta3ml wahd brk w ykon l5r
    // td5l chhal thab mn entrer w type ta3ha errey
    // console.log(Array.isArray(numbers));
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]; // result = result + numbers[i]
        //  numbers[i] bach td5l ll errey
    }
    return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));








/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
    document.write(`<div>`);
    document.write(`<h2>Welcome, ${us}</h2>`);
    document.write(`<p>Age: ${ag}</p>`);
    document.write(`<p>Hour Rate: $${rt}</p>`);
    if (show === "Yes") {
        if (sk.length > 0) {
            document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
            // sk hiya errey
        } else {
            document.write(`<p>Skills: No Skills</p>`);
        }
    } else {
        document.write(`<p>Skills Is Hidden</p>`);
    }
    document.write(`</div>`);
}

showInfo("Osama", 38, 20, "No", "Html", "CSS");









/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"













/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/
// function t9dr tst3mla amba3d declariha

let calculator = function(num1, num2) {
    return num1 + num2;
};
// tari9a wa5do5ra ll declaration ta3 fonction
// hna mat9drch t9dr tst3mla amba3d declariha
console.log(calculator(10, 20));

function sayHello() {
    console.log("Hello Osama");
}
// nsa3mlo had function ki nsta3mloha mra wahda brk tsma manseha9ohach
//nsta3mloha ki mansha9och nsmiwha
document.getElementById("show").onclick = sayHello;
// ki t quiliqer 3la button yban fonct sayhello
setTimeout(function elzero() {
    console.log("Good");
}, 2000);





/*
  Function
  - Function Inside Function
  - Return Function
*/

// Example 1

function sayMessage(fName, lName) {
    let message = `Hello`;
    // Nested Function
    function concatMsg() {
        message = `${message} ${fName} ${lName}`;
    }
    concatMsg();
    return message;
}

console.log(sayMessage("Osama", "Mohamed"));

// Example 2

function sayMessage(fName, lName) {
    let message = `Hello`;
    // Nested Function
    function concatMsg() {
        return `${message} ${fName} ${lName}`;
    }
    return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));

// Example 3

function sayMessage(fName, lName) {
    let message = `Hello`;
    // Nested Function
    function concatMsg() {
        function getFullName() {
            return `${fName} ${lName}`;
        }
        return `${message} ${getFullName()}`;
    }
    return concatMsg();
}

console.log(sayMessage("Osama", "Mohamed"));








/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

let print = function() {
    return 10;
};

let printtt = () => 10;
//ki ykon one line brk t9dr tdirha one return
let printttt = function(num) {
    return num;
};

let printtttt = num => num;
// one argument t9dr tnahi l9oss
let printtttttttttttt = function(num1, num2) {
    return num1 + num2;
};

let printttttttttttttttttttt = (num1, num2) => num1 + num2;
console.log(print(100, 50));





/*
  Scope
  - Global And Local Scope
*/

var ea = 1;
let eb = 2;
//td5lha mnin thab mam 9dr tst3mlhom da5l fuction
function showText() {
    var a = 10;
    let b = 20;
    //nsta3mloh da5l function brk
    console.log(`Function - From Local ${a}`);
    console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();

















/*
  Scope
  - Block Scope [If, Switch, For]
*/

var x = 10;

if (10 === 10) {
    let x = 50;
    //tst3mlha da5l if br mais ki dir var x==50 let tsta3mlha da5l if brk
    // let x = 50;
    //lokan ndiroha haka t9ra x yli bra
    //

    console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`);





/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/
//parent may9drch ysta3ml fonction ta3 child

function parent() {
    let a = 10;

    function child() {
        console.log(a);
        console.log(`From Child ${b}`);

        function grand() {
            let b = 100;
            console.log(`From Grand ${a}`);
            console.log(`From Grand ${b}`);
        }
        grand();
    }
    child();
}
parent();






/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

let names = function() {
    // Parameter ?
    return "???";
};

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => "???";

console.log(calc(10, "???", "???")); // 80











/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
    newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With Map

// let addSelf = myNums.map(function (element, index, arr) {
//   // console.log(`Current Element => ${element}`);
//   // console.log(`Current Index => ${index}`);
//   // console.log(`Array => ${arr}`);
//   // console.log(`This => ${this}`);
//   return element + element;
// }, 10);

// let addSelf = myNums.map((a) => a + a);

// console.log(addSelf);

function addition(ele) {
    return ele + ele;
}

let add = myNums.map(addition);

console.log(add);
//maps fonctio tmchi farrey w t5dm errey jdida wlazm tdirla
//f enter (function (element, index, arr)









/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases
//   .split("")
//   .map(function (ele) {
//     // Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
//   })
//   .join("");

// Arrow Function Version

let sw = swappingCases
    .split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");

console.log(sw);


let inv = invertedNumbers.map(function(ele) {
    return -ele;
});

console.log(inv);

let ign = ignoreNumbers
    .split("")
    .map(function(ele) {
        return isNaN(parseInt(ele)) ? ele : "";
    })
    .join("");

console.log(ign);








/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFriends = friends.filter(function(el) {
    return el.startsWith("A") ? true : false;
});

console.log(filterdFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function(el) {
    return el % 2 === 0;
    //add zawji ydiro f errey w ykatbo
});

console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);
//filterndiro biha testida true tzid ferrey sinon matrj3hach
//kima map tmchi f ga3 errey







/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
    .split(" ")
    .filter(function(ele) {
        return ele.length <= 4;
    })
    .join(" ");

console.log(smallWords);

// Ignore Numbers
let ignoreNumberss = "Elz123er4o";

let igns = ignoreNumbers
    .split("")
    .filter(function(ele) {
        return isNaN(parseInt(ele));
    })
    .join("");

console.log(ign);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent = mix
    .split("")
    .filter(function(ele) {
        return !isNaN(parseInt(ele));
    })
    .map(function(ele) {
        return ele * ele;
    })
    .join("");

console.log(mixedContent);








/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

let nums = [10, 20, 15, 30];

let addd = nums.reduce(function(acc, current, index, arr) {
    console.log(`Acc => ${acc}`);
    //acc elm lwl 
    //current elm zawj
    console.log(`Current Element => ${current}`);
    console.log(`Current Element Index => ${index}`);
    console.log(`Array => ${arr}`);
    console.log(acc + current);
    console.log(`#############`);
    return acc + current;
}, 5);
// hiya la valer yli ybda yahssb biha acc==5 ybda biha
//amba3d yjma3ha m3a wahd sma index mn 0 w roh
console.log(add);
//tjm3 ga3 les elm lazmlha call back function w initialisatin
//koul zouj elm yhssabhom w yhathom f acc
//w index ybda mn 1 wroh
//chaque etape acc=acc+current







/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

let check = theBiggest.reduce(function(acc, current) {
    console.log(`Acc => ${acc}`);
    console.log(`Current Element => ${current}`);
    console.log(acc.length > current.length ? acc : current);
    console.log(`#############`);
    return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
    .filter(function(ele) {
        return ele !== "@";
    })
    .reduce(function(acc, current) {
        return `${acc}${current}`;
    });

console.log(finalString);







/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function(ele) {
    ele.onclick = function() {
        // Remove Active Class From All Elements
        allLis.forEach(function(ele) {
            ele.classList.remove("active");
        });
        // Add Active Class To This Element
        this.classList.add("active");
        // Hide All Divs
        allDivs.forEach(function(ele) {
            ele.style.display = "none";
        });
    };
});
//f l clique tjoz 3la ga3 elm w tbadlhom
// matdirch errey jdida
//tsha9 call back fuction w arggument





/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = '?????';

console.log(solution); // Elzero Web School








/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let user = {
    // Properties
    theName: "Osama",
    theAge: 38,
    // Methods
    sayHello: function() {
        return `Hello`;
    },
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());







/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

let myVar = "countryof";

let user = {
    theName: "Osama",
    country: "Egypt",
    "contryof": "egypte"
};
console.log(user["contryof"])
    // t9ra contryof hta lokan ykon maktob ralt
console.log(user.theName);
console.log(user.country); // user.country
console.log(user.myVar); // indified psq myVar machi ma3rof f object
console.log(user[myVar]); // user.country
















/*
  Object
  - Nested Object And Trainings
*/

let available = true;

let user = {
    name: "Osama",
    age: 38,
    skills: ["HTML", "CSS", "JS"],
    available: false,
    addresses: {
        ksa: "Riyadh",
        egypt: {
            one: "Cairo",
            two: "Giza",
        },
    },
    checkAv: function() {
        if (user.available === true) {
            return `Free For Work`;
        } else {
            return `Not Free`;
        }
    },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
//skills arrey
console.log(user.skills[2]); // Access With Index
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"]);
console.log(user["addresses"]["egypt"]["one"]);

console.log(user.checkAv());






/*
  Object
  - Create With New Keyword new Object();
*/

let user = new Object({
    age: 20,
});
//tdir erray jdida

console.log(user);

user.age = 38;
user["country"] = "Egypt";

user.sayHello = function() {
    return `Hello`;
};
//bhad la methode tzid elm

console.log(user);
console.log(user.age);
console.log(user.country);
console.log(user.sayHello());








/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(this);
console.log(this === window);
// true this hiya l window
myVar = 100;

console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
    console.log(this);
    return this;
}
sayHello();

console.log(sayHello() === window);
//true
document.getElementById("cl").onclick = function() {
    console.log(this);
    //lhna this twali 3la function tsma button
};

let user = {
    age: 38,
    ageInDays: function() {
        console.log(this);
        return this.age * 365;
        //lhna twali 3la user
    },
};

console.log(user.age);
console.log(user.ageInDays());









/*
  Object
  - Create Object With Create Method
*/

let user = {
    age: 20,
    doubleAge: function() {
        return this.age * 2;
    },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let obj = Object.create({});
//hadi vid w nta tzidlha
obj.a = 100;

console.log(obj);

let copyObj = Object.create(user);
//ndiro object jdida b isti3mal object comme une exemple
copyObj.age = 50;
//hadi 30 ma3nha hta ma3na ll double age tdi ta3 l user
//tsma ay changement ndiroh ma3do hta ma3na psq dert user.age
//ki ndiro this.age this twali f exemple 3la user mais fi taht twali 
//3la copyobj
console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());







/*
  Object
  - Create Object With Assign Method
*/

let obj1 = {
    prop1: 1,
    meth1: function() {
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2,
    meth2: function() {
        return this.prop2;
    },
};

let targetObject = {
    prop1: 100,
    prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);
//ydir copier coller prop1 f targetObject ydirlha valu ta3 l prp a3 obj1
//prop 3 myl9ach yli ytchabhlha tsma yzidha jdida
finalObject.prop1 = 200;
//prop1 l9dima twali 200
finalObject.prop4 = 4;
//hadi jdida

console.log(finalObject);

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });
//{}hadi ma3naha vid nzidoha object w t9dr tzid elm mn 3andk { prop5: 5, prop6: 6 }
//lazm wach tzidlo ykon object
console.log(newObject);










/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
//twasllo b asmo
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".my-span");
//tbt fiha wach thab bach twasslo
//hna yjiblk lawla brk
let myQueryAllElement = document.querySelectorAll(".my-span");
//hna yraja3homlk kaml

console.log(myIdElement);
console.log(myTagElements[1]);
//troh l p2 kima arrey
console.log(myClassElement[1]);
console.log(myQueryElement);
//
console.log(myQueryAllElement[1]);

console.log(document.title);
//yjiblk tilte ta3 l page
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);





let object = Object.assign({}, myFavGames);
let objectLength = Object.keys(object).length;
console.log(Object.keys(myFavGames)[1])
console.log(objectLength)
    //.keys bach t9dr ttdkl l elm ta3 object




if (Object.hasOwn(myFavGames[game[i]], "bestThree")) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"]["one"]}`);
    console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"]["two"]}`);
    console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]]["bestThree"]["three"]}`);
}
console.log("#".repeat(20));
//hasown ida fihawlal lala yraj3 boolean


console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]][ "publisher"]} `); //hna bach td5ol ll publisher







/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);
//yraj3lk l instruction ta3 html
console.log(myElement.textContent);
//yral3lk txt 
myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";
//ydirha txt
document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";
//izid property
let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));
//ymdlk l class ta3 link
myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");
//ybdl propertyw ida makanch yzidha


/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/

console.log(document.getElementsByTagName("p")[0].attributes);
//ymdlk ga3 attribute
let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) { //hasAttribute yraj3 true wla false
    if (myP.getAttribute("data-src") === "") {
        myP.removeAttribute("data-src");
        //nahi attribute
    } else {
        myP.setAttribute("data-src", "New Value");
        //bdl value ta3 property
    }
} else {
    console.log(`Not Found`);
}

if (myP.hasAttributes()) {
    console.log(`Has Attributes`);
}

if (document.getElementsByTagName("div")[0].hasAttributes()) { //hasAttributes() ida 3ando aya attribute wla lala
    console.log(`Has Attributes`);
} else {
    console.log(`Div Has No Attributes`);
}






/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
//tdir elm Attribute
let myText = document.createTextNode("Product One");
//tdur txt div
let myComment = document.createComment("This Is Div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);
//tzid attribute mn 3anddk
myElement.setAttribute("data-test", "Testing");
//tdir attribute w tmadlo 9ima
// Append Comment To Element
myElement.appendChild(myComment);
// zid comment 
//ida rana habin comm yji mor txt badl l playss ta3 l code
// Append Text To Element
myElement.appendChild(myText);
//hna tdiro da5ll elm txt da5l elm
// Append Element To Body
document.body.appendChild(myElement);
//mo9bil dernzh f console drka yban f web





/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

let myElement = document.querySelector("div");

console.log(myElement);
console.log(myElement.children);
//na traj3 elm brk span w div txt lal
console.log(myElement.children[0]);
//ttd5l ll p
console.log(myElement.childNodes);
//hna traj3 klch mam txt w comment wspace yraj3o b txt
console.log(myElement.childNodes[0]);

console.log(myElement.firstChild);
//yraja3lk awl elm mahma kan naw3 taw3o
console.log(myElement.lastChild);
//la5r mahma      kan no3o
console.log(myElement.firstElementChild);
console.log(myElement.lastElementChild);
//hna awl w l5r elm txt w elm lala





/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  tcliqher mn yamna
  --- onmouseenter
  hadi hover
  --- onmouseleave
  ki tnahillo hover

  --- onload
  --- onscroll
  ki tscroller f page
  --- onresize
ki tresizer l page

hadoma ll forme
  --- onfocus
  --- onblur
  --- onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onmouseleave = function() {
    console.log("Clicked");
};

window.onresize = function() {
    console.log("Scroll");
};






/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function(e) {
    let userValid = false;
    let ageValid = false;

    if (userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
    }

    if (ageInput.value !== "") {
        ageValid = true;
    }

    if (userValid === false || ageValid === false) {
        e.preventDefault();
        //  maytb3atch form
    }
};

document.links[0].onclick = function(event) {
    console.log(event);

    event.preventDefault();
    //t anuler  event
};




/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
  hna blure machi nta tdiro wahdha tji as natija
*/

let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function() {
    two.focus();
    //hna tji auto
};

one.onblur = function() {
    document.links[0].click();
};







/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
//yraj3 true wla false ydir y virifier ida kayn osama wla lala
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));
//yjiblk elme mn class nta tmadlo l index
element.onclick = function() {
    element.classList.toggle("show");
    //ki yl9ah ynahih w ki maykonch yzido
};



let elm = document.getElementById("mydiv")
elm.style.cssText = "font-weight:bold; color:green"
elm.style.removeProperty("color")
    //tnahi l color
elm.style.setProperty("color", "40px", "important")
document.styleSheets[0].rules[0].style.removeProperty("line-height")
    //td5ll l cssw tbadlo



/*
  DOM [Deal With Elements]
  - before [Element || String]
  tzid txt 9ble div
  - after [Element || String]
  hna morah
  f elm ki nhabo ndiro p document.createElement("p");
  - append [Element || String]
  diro da5l elm mais da5ll div
  - prepend [Element || String]
  - remove

*/

let element = document.getElementById("my-div");
let createdP = document.createElement("p");

// element.remove();ynahi ga3 elm



/*
  DOM [Traversing]
  - nextSibling
  yli ji morah mahma kan no3o
  - previousSibling
  hna yli 9ablo
  - nextElementSibling
  hna yjib elm yli morah
  - previousElementSibling
    hna elm yli 9ablo

  - parentElement
  yjib parent ta3 elm
*/

let span = document.querySelector(".two");

console.log(span.parentElement);

span.onclick = function() {
    span.parentElement.remove();
}




/*
  DOM [Cloning]
  - cloneNode(Deep)
*/

let myPp = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myPp.id = `${myPp.id}-clone`;
// hna tbdl l id

myDiv.appendChild(myPp);
//cloneNode()ki tdir vide y copier elm maisbla elmyli yjo da5l fih



/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

let myPp = document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama";

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });hadi function ki t cliquer t5ar cinsole.log

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);
//hna l event ynadro f nafss l w9t 
// myP.addEventListener("click", "String"); // Error

myP.onclick = function() {
    let newP = myP.cloneNode(true);
    newP.className = "clone";
    document.body.appendChild(newP);
};

// let cloned = document.querySelector(".clone"); // Error
//hna errour psq mazal mat5dmch
// cloned.onclick = function () {
//   console.log("Iam Cloned");
// };

document.addEventListener("click", function(e) {
    if (e.target.className === "clone") {
        console.log("Iam Cloned");
    }
});




/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

window.document.title = "Hello JS";


/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// alert("Test");
//lazm tdir ok ll alert bach yroh w mat9drch t manupiler la page
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);
// confirm trj3 true wla false w tabn f la page kima alert
// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

console.log(promptMsg);
//hna ta9olkch true wla false ta3tik placeholder tktb fiha wach thab
//Write Day With To You txt yban f place holder amba3d y5rjlk ok
//wach tktb f place holder w tb3t yban f console
///good day tban fo9 placeholder


/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

//tmchi function more 3s



// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);
//argument ll say msg matrich() tdir , w tktb
// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }
/**z */
let btn = document.querySelector("button");

btn.onclick = function() {
    clearTimeout(counter);
    //3akss settime thabssha w da5ll clear dir id ta3 settme 
};

function sayMsg(user, age) {
    console.log(`Iam Message For ${user} Age Is : ${age}`);
}

let counterx = setTimeout(sayMsg, 3000, "Osama", 38);














/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);
//ste interv y3atlha kol 1s chi khatra wahda kima set time out
// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

let div = document.querySelector("div");

function countdown() {
    div.innerHTML -= 1;
    if (div.innerHTML === "0") {
        clearInterval(counter);
    }
}

let counterxx = setInterval(countdown, 1000);




/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  //tdi kl web jdid mais ynahi la page yli roht mnha l history
  --- assign()
  //ydik l page jdida 
*/

console.log(location);
//les info ta3 web urll
console.log(location.href);
//ybaynlk link ta3 html
// location.href = "https://google.com";
// location.href = "/#sec02";
//tdih l html link
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";
//ydik l ay site
// console.log(location.host);
//
// console.log(location.hostname);

// console.log(location.protocol);
//yrjlk http wla https
// console.log(location.hash);
//ydlk la page html yli 5dmt biha web




/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

setTimeout(function() {
    window.open("", "_self", "", false);
}, 2000);

setTimeout(function() {
    window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
}, 2000);



/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  chhal mn page f history
  --- Methods
  ------ back()
  trj3k page yli fl lore
  ------ forward()
  ydi kll 9dam
  ------ go(Delta) => Position In History ydik ll page 9dam wla llore
  //

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

console.log(history);


/*
  BOM [Browser Object Model]
  - stop()
  - print()
  t imprimer l page
  - focus()
  yjiblk elm fih wjhk
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
  ydna yscroller x mra 3la x w y mra 3la y fi koul mra dirha
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
//yscroller smoothly
// });



/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  tjiblk chhal scroll 3la x
  - scrollY [Alias => PageYOffset]
    tjiblk chhal scroll 3la y

*/

// console.log(window.scrollX === window.pageXOffset);

let btn = document.querySelector("button");

window.onscroll = function() {
    if (window.scrollY >= 600) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};










/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
window.localStorage.setItem("color", "#F00");
//tmedlo key w value
window.localStorage.fontWeight = "bold";
//window.localStorage.key=value
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Remove One
// window.localStorage.removeItem("color");
//tnahi elment
// Remove All
// window.localStorage.clear();
//tnahihom kaml
// Get Key
console.log(window.localStorage.key(0));
// t selectioner keyes
// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");
//tbdl l background ta3 l page hta lokan tftha w trlo9ha t93d
console.log(window.localStorage);
console.log(typeof window.localStorage);





/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/
//sessionStorage kima localStorage brk session maygardich property ki trl9 page
// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function() {
    // console.log(this.value);
    window.localStorage.setItem("input-name", this.value);

};





/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

let ax = 1;
let bx = 2;
let cx = 3;
let dx = 4;

let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Osama"] = myFriends;
//tserbi data ta3 l erray w tdirlhom variable
//ma3noch 3la b 3dd l itmes
//hna a = "A" maydirhach ydir ahmed
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// console.log(myFriends[4]);

let [, y, , z] = myFriends;
//lvide hadak ysciper asmm
console.log(y);
console.log(z);



//3andk 2 challenge lazm tdirhom






/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// console.log(myFriends[3][2][1]);

// let [, , , [a, , [, b]]] = myFriends;

let [, , , [cca, , [, ccb]]] = myFriends;

console.log(a); // Shady
console.log(b); // Gamal




/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

[book, video] = [video, book];
//ybadl book w video
console.log(book);
console.log(video);



/*
  Destructuring
  - Destructuring Object
*/

const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
};

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);
const { theNameee, theAege, theCountry } = user;
//hna t utiliser les var b asmamha
console.log(theName);
console.log(theAge);
console.log(theCountry);














/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const user = {
    theName: "Osama",
    theAge: 39,
    theTitle: "Developer",
    theCountry: "Egypt",
    theColor: "Black",
    skills: {
        html: 70,
        css: 80,
    },
};

const {
    theName: xn,
    theAge: xxa,
    theCountxxry,
    theColor: co = "Red",
    skills: { html: h, css },
} = user;

console.log(n);
console.log(a);
console.log(theCountry);
console.log(co);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

const { html: skillOne, css: skillTwo } = user.skills;
//tdir copt ll nested object
console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);



















/*
  Destructuring
  - Destructuring Function Parameters
*/

const user = {
    theName: "Osama",
    theAge: 39,
    skills: {
        html: 70,
        css: 80,
    },
};

showDetails(user);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
    console.log(`Your Name Is ${n}`);
    console.log(`Your Age Is ${a}`);
    console.log(`Your CSS Skill Progress Is ${c}`);
}



/*
  Destructuring
  - Destructuring Mixed Content
*/

const user = {
    theName: "Osama",
    theAge: 39,
    skills: ["HTML", "CSS", "JavaScript"],
    addresses: {
        egypt: "Cairo",
        ksa: "Riyadh",
    },
};

const {
    theName: ncc,
    theAge: acc,
    skills: [, , three],
    addresses: { egypt: ecc },
} = user;
//t9dr t utiliser yli bl zro9a brk
console.log(`Your Name Is: ${n}`);
console.log(`Your Age Is: ${a}`);
console.log(`Your Last Skill Is: ${three}`);
console.log(`Your Live In: ${e}`);




/*
  Destructuring
  - Challenge
*/

let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];