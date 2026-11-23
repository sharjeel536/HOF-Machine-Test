const cl = console.log;

//  REDUCE – 30  Tasks

// Array 1 (Numbers)
const numbers1 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Sum of all numbers
let result1 = numbers1.reduce((acc,curr) => acc+=curr);
cl(result1);


// 2. Product of all numbers
let result2 = numbers1.reduce((acc,curr) => acc*=curr);
cl(result2);


// 3. Find the maximum number
let result3 = numbers1.reduce((acc,curr) => Math.max(acc,curr));
cl(result3);


// 4. Find the minimum number
let result4 = numbers1.reduce((acc,curr) => Math.min(acc,curr));
cl(result4);


// 5. Count how many numbers are even
let result5 = numbers1.reduce((acc,curr)=>{
    if(curr % 2 === 0){
        acc++;
    }
    return acc;
},0)
cl(result5);


// 6. Count how many numbers are odd
let result6 = numbers1.reduce((acc, curr)=>{
    if(curr % 2 !== 0){
        acc++;
    }
    return acc;
},0)
cl(result6);


// 7. Find average of numbers
let result7 = numbers1.reduce((acc,curr)=>{
    let length = numbers1.length;
    let avg = acc+=curr;
    return avg/length;
});
cl(result7);


// 8. Find difference between sum of even and odd numbers
let result8a = numbers1.reduce((acc, curr)=>{
    if(curr % 2 === 0){
        acc+=curr;
    }
    return acc;
},0)
let result8b = numbers1.reduce((acc, curr)=>{
    if(curr % 2 !== 0){
        acc+=curr;
    }
    return acc;
})
cl(`sum of Even numbers is ${result8a} and sum of Odd numbers is ${result8b}`);


// 9. Create object { greaterThan50, lessOrEqual50 }
// 10. Convert array into object { index: value }

// Array 2 (Products)
const products1 = [
  { name: "Laptop", price: 1000, qty: 2 },
  { name: "Phone", price: 500, qty: 5 },
  { name: "Tablet", price: 800, qty: 1 },
  { name: "Headphones", price: 200, qty: 10 }
];

// 11. Calculate total cart value
let result11 = products1.reduce((acc, curr)=>{
    acc += curr.price;
    return acc;
},0)
cl(result11);


// 12. Find product with highest price
// 13. Find product with lowest qty
// 14. Group products into { expensive, cheap }
let expensive =[];
let cheap =[];
let result14 = products1.reduce((acc, curr)=>{
    if(curr.price>500){
        expensive.push(curr);
    }else{
        cheap.push(curr);
    }
    acc.expensive = expensive;
    acc.cheap = cheap;
    return acc;
},{})
cl(result14);


// 15. Create object { productName: totalValue }

// Array 3 (Students)
const students1 = [
  { name: "Aman", marks: [80, 70, 90] },
  { name: "Ravi", marks: [60, 75, 85] },
  { name: "Neha", marks: [95, 88, 92] },
  { name: "Simran", marks: [50, 60, 65] }
];

// 16. Calculate total marks of each student
// 17. Find student with highest total marks
// 18. Find student with lowest average marks
// 19. Create object { studentName: averageMarks }
// 20. Count students scored > 250 total

// Array 4 (Words)
const words1 = ["apple", "banana", "mango", "apple", "orange", "banana", "apple"];

// 21. Count frequency of each word
// 22. Find word with maximum occurrence
// 23. Remove duplicates (unique words array)
// 24. Create string of all words joined with "-"
// 25. Find total characters in all words

// Array 5 (Transactions)
const transactions1 = [
  { id: 1, type: "credit", amount: 1000 },
  { id: 2, type: "debit", amount: 200 },
  { id: 3, type: "credit", amount: 500 },
  { id: 4, type: "debit", amount: 300 },
  { id: 5, type: "credit", amount: 200 }
];

// 26. Find net balance (credits - debits)
// 27. Separate total debit and credit in one object
// 28. Find transaction with max amount
// 29. Create object { credit: [ids], debit: [ids] }
// 30. Count transactions with amount > 400


// 🔥 FIND – 30 Medium + Advanced Tasks

// Array 1 (Numbers)
const numbers2 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Find first number > 50
let result31 = numbers2.find(num=> num > 50);
cl(result31);


// 2. Find first even number
let result32 = numbers2.find(num=> num % 2 === 0);
cl(result32);


// 3. Find first odd number
let result33 = numbers2.find( num => num % 2 !== 0);
cl(result33);


// 4. Find first number divisible by 5
let result34 = numbers2.find(num => num % 5 === 0);
cl(result34);


// 5. Find first number which is prime
// 6. Find first number < 10
let result36 = numbers2.find(num => num < 10);
cl(result36);


// 7. Find first number which is multiple of 11
let result37 = numbers2.find(num => num % 11 === 0);
cl(result37);


// 8. Find first number whose square > 100
let result38 = numbers2.find(num => (num*num) > 100);
cl(result38);


// 9. Find first number between 20 and 50
let result39 = numbers2.find(num => num > 20 && num < 50);
cl(result39);


// 10. Find first number not divisible by 2 or 3
let result40 = numbers2.find(num => num % 2 !== 0 && num % 3 !== 0);
cl(result40);


// Array 2 (Products)
const products2 = [
  { name: "Laptop", price: 1000, qty: 2 },
  { name: "Phone", price: 500, qty: 5 },
  { name: "Tablet", price: 800, qty: 1 },
  { name: "Headphones", price: 200, qty: 10 }
];

// 11. Find first product with price > 700
let result41 = products2.find(prod => prod.price > 700);
cl(result41);


// 12. Find first product with qty > 5
let result42 = products2.find(prod => prod.qty > 5);
cl(result42);


// 13. Find first product with name starting with "P"
let result43 = products2.find((prod) => {
    let res = prod.name ;
    return res[0] === "P";
});
cl(result43);


// 14. Find first product with total value (price*qty) > 1000
let result44 = products2.find(prod => (prod.price*prod.qty) > 1000);
cl(result44);


// 15. Find first product with name length > 6
let result45 = products2.find((prod) => {
    let len = prod.name.length;
    return len > 6;
})
cl(result45);


// Array 3 (Students)
const students2 = [
  { name: "Aman", marks: [80, 70, 90] },
  { name: "Ravi", marks: [60, 75, 85] },
  { name: "Neha", marks: [95, 88, 92] },
  { name: "Simran", marks: [50, 60, 65] }
];

// 16. Find first student with total marks > 250
let result46 = students2.find((std) => {
    let score = 0;
    for(let i = 0; i < std.marks.length; i++){
        score += std.marks[i];
    }
    return score > 250;
})
cl(result46);


// 17. Find first student with average marks < 70
let result47 = students2.find((std)=>{
    let avg = 0;
    let sco = 0;
    for(let i = 0; i < std.marks.length; i++){
        sco += std.marks[i];
        
    }
    avg =sco / std.marks.length;
    return avg < 70;
})
cl(result47);


// 18. Find first student whose name starts with "N"
let result48 = students2.find((std)=>{
   let name = std.name;
   return name[0] === "N"
})
cl(result48);


// 19. Find first student who has scored 90 or more in any subject
let result49 = students2.find((std)=>{
    for(let i = 0; i < std.marks.length; i++){
        if(std.marks[i] === 90){
            return std;
        }
    }
})
cl(result49);


// 20. Find first student whose total marks are even
let result50 = students2.find((std)=>{
    let sco = 0;
    for(let i = 0; i < std.marks.length; i++){
        sco += std.marks[i]; 
    }
    return sco % 2 === 0;
})
cl(result50);


// Array 4 (Words)
const words2 = ["apple", "banana", "mango", "apple", "orange", "banana", "apple"];

// 21. Find first word with length > 5
let result51 = words2.find((fru)=>{
    let len = fru.length;
    return len > 5;
})
cl(result51);


// 22. Find first word starting with "b"
let result52 = words2.find(fru => fru[0] == "b");
cl(result52); 


// 23. Find first duplicate word
// 24. Find first word containing letter "n"
let result54 = words2.find((fru)=>{
    for(let i = 0; i < fru.length; i++){
        if(fru.includes("n")){
            return fru;
        }
    }
})
cl(result54);


// 25. Find first word ending with "e"
let result55 = words2.find(fru => fru[fru.length-1] == "e");
cl(result55);


// Array 5 (Transactions)
const transactions2 = [
  { id: 1, type: "credit", amount: 1000 },
  { id: 2, type: "debit", amount: 200 },
  { id: 3, type: "credit", amount: 500 },
  { id: 4, type: "debit", amount: 300 },
  { id: 5, type: "credit", amount: 200 }
];

// 26. Find first credit transaction > 400
let result56 = transactions2.find(trans => (trans.type == "credit" && trans.amount > 400));
cl(result56);


// 27. Find first debit transaction < 300
let result57 = transactions2.find(trans => (trans.type == "debit" && trans.amount < 300));
cl(result57);


// 28. Find first transaction with id > 3
let result58 = transactions2.find(trans => trans.id > 3);
cl(result58);


// 29. Find first transaction of type "debit"
let result59 = transactions2.find(trans => trans.type === "debit");
cl(result59);


// 30. Find first transaction with amount exactly 200
let result60 = transactions2.find(trans => trans.amount === 200);
cl(result60);


// FINDINDEX – 30 Tasks

// Array 1 (Numbers)
const numbers3 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Find index of first number > 50
let result61 = numbers3.findIndex(num => num > 50);
cl(result61);


// 2. Find index of first even number
let result62 = numbers3.findIndex(num => num % 2 === 0);
cl(result62);


// 3. Find index of first odd number
let result63 = numbers3.findIndex(num => num % 2 !== 0);
cl(result63);


// 4. Find index of first number divisible by 5
let result64 = numbers3.findIndex(num => num % 5 === 0);
cl(result64);


// 5. Find index of first number which is prime
// 6. Find index of first number < 10
let result66 = numbers3.findIndex(num => num < 10);
cl(result66);


// 7. Find index of first number multiple of 11
let result67 = numbers3.findIndex(num => num % 11 === 0);
cl(result67);


// 8. Find index of first number whose square > 100
let result68 = numbers3.findIndex(num => (num * num) > 100);
cl(result68);


// 9. Find index of first number between 20 and 50
let result69 = numbers3.findIndex(num => (num > 20 && num < 50));
cl(result69);


// 10. Find index of first number not divisible by 2 or 3
let result70 = numbers3.findIndex(num => (num % 2 !== 0 && num % 3 !== 0));
cl(result70);


// Array 2 (Products)
const products3 = [
  { name: "Laptop", price: 1000, qty: 2 },
  { name: "Phone", price: 500, qty: 5 },
  { name: "Tablet", price: 800, qty: 1 },
  { name: "Headphones", price: 200, qty: 10 }
];

// 11. Find index of first product with price > 700
let result71 = products3.findIndex(prod => prod.price > 700);
cl(result71);


// 12. Find index of first product with qty > 5
let result72 = products3.findIndex(prod => prod.qty > 5);
cl(result72);


// 13. Find index of first product with name starting with "P"
let result73 = products3.findIndex(prod => (prod.name[0] === 'P'))
cl(result73);


// 14. Find index of first product with total value (price*qty) > 1000
let result74 = products3.findIndex(prod => (prod.price * prod.qty) > 1000);
cl(result74);


// 15. Find index of first product with name length > 6
let result75 = products3.findIndex(prod => prod.name.length > 6);
cl(result75);


// Array 3 (Students)
const students3 = [
  { name: "Aman", marks: [80, 70, 90] },
  { name: "Ravi", marks: [60, 75, 85] },
  { name: "Neha", marks: [95, 88, 92] },
  { name: "Simran", marks: [50, 60, 65] }
];

// 16. Find index of first student with total marks > 250
let result76 = students3.findIndex((std) => {
    let scor = 0;
    for(let i = 0; i < std.marks.length; i++){
        scor += std.marks[i];
    }
    return scor > 250;
})
cl(result76);


// 17. Find index of first student with average marks < 70
let result77 = students3.findIndex((std) => {
    let avg = 0;
    let scor = 0;
    for(let i = 0; i < std.marks.length; i++){
        scor += std.marks[i];
    }
    avg = scor / std.marks.length;
    return avg < 70 ;
})
cl(result77);


// 18. Find index of first student whose name starts with "N"
let result78 = students3.findIndex((std) => {
    let name = std.name;
    return name[0] === "N";
})
cl(result78);


// 19. Find index of first student who scored 90 or more in any subject
let result79 = students3.findIndex((std) => std.marks.includes(90))
cl(result79);


// 20. Find index of first student whose total marks are even
let result80 = students3.findIndex((std) => {
    let scor = 0;
    for(let i = 0; i < std.marks.length; i++){
        scor += std.marks[i];
    }
    return scor % 2 == 0;
})
cl(result80);


// Array 4 (Words)
const words3 = ["apple", "banana", "mango", "apple", "orange", "banana", "apple"];

// 21. Find index of first word with length > 5
let result81 = words3.findIndex(fru => (fru.length > 5));
cl(result81);

// 22. Find index of first word starting with "b"
let result82 = words3.findIndex(fru => (fru[0] == "b"));
cl(result82);


// 23. Find index of first duplicate word
// 24. Find index of first word containing letter "n"
let result84 = words3.findIndex(fru => fru.includes("n"));
cl(result84);


// 25. Find index of first word ending with "e"
let result85 = words3.findIndex(fru => fru[fru.length-1] == "e");
cl(result85);


// Array 5 (Transactions)
const transactions3 = [
  { id: 1, type: "credit", amount: 1000 },
  { id: 2, type: "debit", amount: 200 },
  { id: 3, type: "credit", amount: 500 },
  { id: 4, type: "debit", amount: 300 },
  { id: 5, type: "credit", amount: 200 }
];

// 26. Find index of first credit transaction > 400
let result86 = transactions3.findIndex(trans => (trans.type === "credit" && trans.amount > 200));
cl(result86);


// 27. Find index of first debit transaction < 300
let result87 = transactions3.findIndex(trans => (trans.type === "debit" && trans.amount < 300));
cl(result87);


// 28. Find index of first transaction with id > 3
let result88 = transactions3.findIndex(trans => trans.id > 3);
cl(result88);


// 29. Find index of first transaction of type "debit"
let result89 = transactions3.findIndex(trans => trans.type === "debit");
cl(result89);


// 30. Find index of first transaction with amount exactly 200
let result90 = transactions3.findIndex(trans => trans.amount == 200);
cl(result90);


// SOME  Tasks

// Array 1 (Numbers)
const numbers4 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Check if there is any number > 100
let result91 = numbers4.some(num => num > 100);
cl(result91);


// 2. Check if there is any even number
let result92 = numbers4.some(num => num % 2 === 0);
cl(result92);


// 3. Check if there is any odd number
let result93 = numbers4.some(num => num % 2 !== 0);
cl(result93);


// 4. Check if there is any number divisible by 7
let result94 = numbers4.some(num => num % 7 === 0);
cl(result94);


// 5. Check if there is any prime number
// 6. Check if there is any number < 10
let result96 = numbers4.some(num => num < 10);
cl(result96);


// 7. Check if there is any number multiple of 11
let result97 = numbers4.some(num => num % 11 === 0);
cl(result97);


// 8. Check if there is any number whose square > 150
let result98 = numbers4.some(num => (num * num) > 100);
cl(result98);


// 9. Check if there is any number between 20 and 50
let result99 = numbers4.some(num => (num > 20 && num < 50));
cl(result99);


// 10. Check if there is any number not divisible by 2 or 3
let result100 = numbers4.some(num => (num % 2 !== 2 && num % 3 !== 3));
cl(result100);


// Array 2 (Products)
const products4 = [
  { name: "Laptop", price: 1000, qty: 2 },
  { name: "Phone", price: 500, qty: 5 },
  { name: "Tablet", price: 800, qty: 1 },
  { name: "Headphones", price: 200, qty: 10 }
];

// 11. Check if there is any product with price > 700
let result101 = products4.some(prod => prod.price > 700);
cl(result101);


// 12. Check if there is any product with qty > 5
let result102 = products4.some(prod => prod.qty > 5);
cl(result102);


// 13. Check if there is any product with name starting with "P"
let result103 = products4.some(prod => prod.name[0] === "P");
cl(result103);


// 14. Check if there is any product with total value (price*qty) > 1000
let result104 = products4.some(prod => (prod.price * prod.qty) > 1000);
cl(result104);


// 15. Check if there is any product with name length > 6
let result105 = products4.some(prod => prod.name.length > 6);
cl(result105);


// Array 3 (Students)
const students4 = [
  { name: "Aman", marks: [80, 70, 90] },
  { name: "Ravi", marks: [60, 75, 85] },
  { name: "Neha", marks: [95, 88, 92] },
  { name: "Simran", marks: [50, 60, 65] }
];

// 16. Check if any student has total marks > 250
let result106 = students4.some((std) => {
    let scor = 0;
    for(let i = 0; i < std.marks.length; i++){
        scor += std.marks[i];
    }
    return scor > 250;
});
cl(result106);


// 17. Check if any student has average marks < 70
let result107 = students4.some((std) => {
    let avg = 0;
    let scor = 0;
    for(let i = 0; i < std.marks.length; i++){
        scor += std.marks[i];
    }
    avg = scor / std.marks.length;
    return avg < 70;
});
cl(result107);


// 18. Check if any student name starts with "N"
let result108 = students4.some(std => std.name[0] == "N");
cl(result108);


// 19. Check if any student scored 90 or more in any subject
let result109 = students4.some((std) => {
    let scor = std.marks;
    return scor.includes(90);
});
cl(result109);


// 20. Check if any student has total marks even
let result110 = students4.some((std) => {
    let scor = 0;
    for(let i = 0; i < std.marks.length; i++){
        scor += std.marks[i];
    }
    return scor % 2 === 0;
});
cl(result110);

// Array 4 (Words)
const words4 = ["apple", "banana", "mango", "apple", "orange", "banana", "apple"];

// 21. Check if there is any word with length > 5
let result111 = words4.some(fru => fru.length > 5);
cl(result111);


// 22. Check if there is any word starting with "b"
let result112 = words4.some(fru => fru[0] === "b");
cl(result112);


// 23. Check if there is any duplicate word
// 24. Check if there is any word containing letter "n"
let result114 = words4.some(fru => fru.includes("n"));
cl(result114);


// 25. Check if there is any word ending with "e"
let result115 = words4.some(fru => fru[fru.length-1] ==="e");
cl(result115);


// Array 5 (Transactions)
const transactions4 = [
  { id: 1, type: "credit", amount: 1000 },
  { id: 2, type: "debit", amount: 200 },
  { id: 3, type: "credit", amount: 500 },
  { id: 4, type: "debit", amount: 300 },
  { id: 5, type: "credit", amount: 200 }
];

// 26. Check if there is any credit transaction > 400
let result116 = transactions4.some(trans => (trans.type == "credit" && trans.amount > 400));
cl(result116);


// 27. Check if there is any debit transaction < 300
let result117 = transactions4.some(trans => (trans.type == "debit" && trans.amount < 300));
cl(result117);


// 28. Check if there is any transaction with id > 3
let result118 = transactions4.some(trans => trans.id > 3);
cl(result118);


// 29. Check if there is any transaction of type "debit"
let result119 = transactions4.some(trans => trans.type == "debit" );
cl(result119);


// 30. Check if there is any transaction with amount exactly 200
let result120 = transactions4.some(trans => trans.amount == 200);
cl(result120);


//EVERY – 30 Tasks

// Array 1 (Numbers)
const numbers5 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Check if every number > 0
// 2. Check if every number is even
// 3. Check if every number is odd
// 4. Check if every number < 150
// 5. Check if every number divisible by 5
// 6. Check if every number < 200
// 7. Check if every number is prime
// 8. Check if every number > 10
// 9. Check if every number < 100
// 10. Check if every number not divisible by 3

// Array 2 (Products)
const products5 = [
  { name: "Laptop", price: 1000, qty: 2 },
  { name: "Phone", price: 500, qty: 5 },
  { name: "Tablet", price: 800, qty: 1 },
  { name: "Headphones", price: 200, qty: 10 }
];

// 11. Check if every product price > 100
// 12. Check if every product qty > 0
// 13. Check if every product name length > 3
// 14. Check if every product total value (price*qty) > 100
// 15. Check if every product price < 1500

// Array 3 (Students)
const students5 = [
  { name: "Aman", marks: [80, 70, 90] },
  { name: "Ravi", marks: [60, 75, 85] },
  { name: "Neha", marks: [95, 88, 92] },
  { name: "Simran", marks: [50, 60, 65] }
];

// 16. Check if every student total marks > 200
// 17. Check if every student average marks > 60
// 18. Check if every student name length > 3
// 19. Check if every student scored < 100 in all subjects
// 20. Check if every student total marks even

// Array 4 (Words)
const words5 = ["apple", "banana", "mango", "apple", "orange", "banana", "apple"];

// 21. Check if every word length > 3
// 22. Check if every word contains letter "a"
// 23. Check if every word starts with a lowercase letter
// 24. Check if every word ends with a vowel
// 25. Check if every word is unique (true/false)

// Array 5 (Transactions)
const transactions5 = [
  { id: 1, type: "credit", amount: 1000 },
  { id: 2, type: "debit", amount: 200 },
  { id: 3, type: "credit", amount: 500 },
  { id: 4, type: "debit", amount: 300 },
  { id: 5, type: "credit", amount: 200 }
];

// 26. Check if every transaction amount > 0
// 27. Check if every credit transaction amount > 100
// 28. Check if every debit transaction amount < 500
// 29. Check if every transaction type is string
// 30. Check if every transaction id < 10


// FILL – 30 Tasks

// Array 1 (Numbers)
const numbers6 = [12, 5, 8, 130, 44, 22, 99, 7, 15];

// 1. Fill all elements with 0
// 2. Fill first 3 elements with 100
// 3. Fill last 2 elements with -1
// 4. Fill elements from index 2 to 5 with 50
// 5. Fill elements from index 0 to 4 with 9
// 6. Fill elements greater than 50 with 500
// 7. Fill even index elements with 0
// 8. Fill odd index elements with -1
// 9. Fill middle 3 elements with 999
// 10. Fill all numbers divisible by 5 with 555

// Array 2 (Products)
const products6 = ["Laptop", "Phone", "Tablet", "Headphones"];

// 11. Fill all product names with "Unknown"
// 12. Fill first 2 products with "Gadget"
// 13. Fill last product with "Accessory"
// 14. Fill products from index 1 to 3 with "Device"
// 15. Fill product names starting with "P" with "PhoneItem"

// Array 3 (Students)
const students6 = ["Aman", "Ravi", "Neha", "Simran"];

// 16. Fill all student names with "Anonymous"
// 17. Fill first student name with "Student1"
// 18. Fill last student name with "Student4"
// 19. Fill middle 2 student names with "TempName"
// 20. Fill student names starting with "N" with "NStudent"

// Array 4 (Boolean Array)
const flags6 = [true, false, true, false, true];

// 21. Fill all elements with false
// 22. Fill first 2 elements with true
// 23. Fill last 2 elements with true
// 24. Fill middle element with false
// 25. Fill elements at even index with false

// Array 5 (Mixed Array)
const mixed6 = [1, "a", true, 5, "b", false, 10];

// 26. Fill all numbers with 0
// 27. Fill all strings with "x"
// 28. Fill all booleans with true
// 29. Fill first 3 elements with null
// 30. Fill last 3 elements with undefined
