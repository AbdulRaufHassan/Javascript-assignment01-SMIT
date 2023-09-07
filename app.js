// ****************************** Chapter 01 : Alerts ******************************

// ============== Answer to question 1 ==============
alert('Welcome to Our Website!');

// ============== Answer to question 2 ==============
alert('Error! Please enter a valid password.');

// ============== Answer to question 3 ==============
alert('Welcome to JS Land...\nHappy Coding!');

// ============== Answer to question 5 ==============
console.log('Hello... I can run JS through my web browser console');



// ****************************** Chapter 02 : Variable for strings ******************************

// ============== Answer to question 1 ==============
let userName;

// ============== Answer to question 2 ==============
let myName = 'Rauf Hassan';

// ============== Answer to question 3 ==============
let message = 'Hello World';
alert(message);

// ============== Answer to question 4 ==============
let studentName = 'John Doe';
let studentAge = '15 years old';
let studentBio = 'Certified Mobile Application Development';
alert(studentName + '\n' + studentAge + '\n' + studentBio);

// ============== Answer to question 5 ==============
let pizzaName = 'PIZZA\nPIZZ\nPIZ\nPI\nP';
alert(pizzaName);

// ============== Answer to question 6 ==============
let email = 'raufh1093@gmail.com';
alert('My email address is ' + email);

// ============== Answer to question 7 ==============
let book = 'Javascript from beginner to professional';
alert('I am trying to learn from the Book: ' + book)

// ============== Answer to question 8 ==============
document.write('Yah! I can write HTML content through javascript </br></br>');

// ============== Answer to question 9 ==============
var myString = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
alert(myString);
document.write(myString + '</br></br>');



// ****************************** Chapter 03 : Variable for numbers ******************************

// ============== Answer to question 1 ==============
let myAge = 17;
alert('I am ' + myAge + ' years old');

// ============== Answer to question 2 ==============
let vistCount = 14;
alert('You have visited this site ' + vistCount + ' times');

// ============== Answer to question 3 ==============
var myBirthYear = 2007;
document.write('My birth year is ' + myBirthYear + '</br></br>');

// ============== Answer to question 4 ==============
var visitorName = 'john Doe';
var quantity = 5;
var product = 'T-Shirts';
document.write(`<b>${visitorName}</b>` + ' ordered ' + `<b>${quantity + ' ' + product}</b>` + ' on XYZ clothing store' + '</br></br>');



// ****************************** Chapter 05 : Math Expressions ******************************

// ============== Answer to question 1 ==============
let value1 = 20;
let value2 = 5;
let finalvalOfAdd = value1 + value2;
document.write(finalvalOfAdd + '</br></br>');

// ============== Answer to question 2 ==============
let finalvalOfSub = value1 - value2;
document.write(finalvalOfSub + '</br>');
let finalvalOfMulti = value1 * value2;
document.write(finalvalOfMulti + '</br>');
let finalvalOfDivi = value1 / value2;
document.write(finalvalOfDivi + '</br>');
let finalvalOfModuls = value1 % value2;
document.write(finalvalOfModuls + '</br></br>');

// ============== Answer to question 3 ==============
let myValue;
document.write('Value after variable declaration is: ' + myValue + '</br>');
myValue = 5;
document.write('Initial value: ' + myValue + '</br>');
myValue++;
document.write('Value after increment is: ' + myValue + '</br>');
myValue += 7;
document.write('Value after addition is: ' + myValue + '</br>');
myValue--;
document.write('Value after decrement is: ' + myValue + '</br>');
myValue %= 3;
document.write('This remainder is: ' + myValue + '</br></br>');

// ============== Answer to question 4 ==============
let MovieTicketPrice = 600;
MovieTicketPrice *= 5;
document.write('Total cost to buy 5 tickets to a movie is ' + MovieTicketPrice + 'Rs' + '</br></br>')

// ============== Answer to question 5 ==============
document.write('2 * 1 = ' + 2 * 1 + '</br>')
document.write('2 * 2 = ' + 2 * 2 + '</br>')
document.write('2 * 3 = ' + 2 * 3 + '</br>')
document.write('2 * 4 = ' + 2 * 4 + '</br>')
document.write('2 * 5 = ' + 2 * 5 + '</br>')
document.write('2 * 6 = ' + 2 * 6 + '</br>')
document.write('2 * 7 = ' + 2 * 7 + '</br>')
document.write('2 * 8 = ' + 2 * 8 + '</br>')
document.write('2 * 9 = ' + 2 * 9 + '</br>')
document.write('2 * 10 = ' + 2 * 10 + '</br></br>')

// ============== Answer to question 6 ==============
let celciusTemp = 27;
let celToFahrenTemp = (celciusTemp * 9 / 5) + 32;
document.write('27°C is ' + celToFahrenTemp + '°F' + '</br>');
let fahrenheitTemp = 81;
let FahrenTocelTemp = (fahrenheitTemp - 32) * 5 / 9;
document.write('81°C is ' + FahrenTocelTemp + '°C' + '</br></br>');

// ============== Answer to question 7 ==============
let item1Price = 650;
let item2Price = 100;
let quantityItem1 = 3;
let quantityItem2 = 7;
let shippingCharges = 100;
let item1Total = item1Price * quantityItem1;
let item2Total = item2Price * quantityItem2;
let totalCost = item1Total + item2Total + shippingCharges;
document.write(`Price of item 1 is ${item1Price}` + '</br>' + `Quantity of item 1 is ${quantityItem1}` + '</br>' + `Price of item 2 is ${item2Price}` + '</br>' + `Quantity of item 2 is ${quantityItem2}` + '</br>' + `Shipping Charges is ${shippingCharges}` + '</br>' + `Total cost of your order is ${totalCost}` + '</br></br>')

// ============== Answer to question 8 ==============
let totalMarks = 980;
let obtainedMarks = 804;
let PerCalulate = obtainedMarks / totalMarks * 100;
document.write(`Total marks: ${totalMarks}` + '</br>' + `Obtained marks: ${obtainedMarks}` + '</br>' + `Percentage: ${PerCalulate}%` + '</br></br>');

// ============== Answer to question 9 ==============
let oneDollarToPkr = 104.80;
let oneRiyalToPkr = 28;
let dollarQuantity = 10;
let riyalQuantity = 25;
let totalCurrencyPKR = (dollarQuantity * oneDollarToPkr) + (oneRiyalToPkr * riyalQuantity);
document.write(`Total currency in PKR : ${totalCurrencyPKR}` + '</br></br>');

// ============== Answer to question 10 ==============
let myNumber = 50;
myNumber = (myNumber + 5 * 10) / 2;
document.write(myNumber + '</br></br>');

// ============== Answer to question 11 ==============
let currentYear = 2023;
let birthYear = 2007;
let ageCalculate = currentYear - birthYear;
document.write(`Current Year : ${currentYear}` + '</br>' + `Birth Year : ${birthYear}` + '</br>' + `Your age is : ${ageCalculate}` + '</br></br>');

// ============== Answer to question 12 ==============
let radiusOfCircle = 20;
let valueOfπ = 3.142;
let circumOfCircle = 2 * valueOfπ * radiusOfCircle;
let areaOfCircle = valueOfπ * (radiusOfCircle ** 2);
document.write(`Radius of a circle: ${radiusOfCircle}` + '</br>');
document.write(`The circumference is: ${circumOfCircle}` + '</br>');
document.write(`The area is: ${areaOfCircle}` + '</br></br>');

// ============== Answer to question 13 ==============
let myFavSnack = 'Chocolate Chip';
let myCurrentAge = 17;
let myOldestAge = 80;
let perDaySnacksQuantity = 3;
let snacksNeed = (myOldestAge - myCurrentAge) * perDaySnacksQuantity;
document.write(`Favourite snack: ${myFavSnack}` + '</br>');
document.write(`Current age: ${myCurrentAge}` + '</br>');
document.write(`Estimated maximum age: ${myOldestAge}` + '</br>');
document.write(`Amount of snack per day: ${perDaySnacksQuantity}` + '</br>');
document.write(`You will need ${snacksNeed} ${myFavSnack} to last you until the ripe old age of ${myOldestAge}` + '</br></br>');



// ****************************** Chapter 06 to 09 : Math Expressions ******************************

// ============== Answer to question 1 ==============
let xyz = 30;
document.write(`The value of xyz is: ${xyz}` + '</br>')
document.write(`The value of ++xyz is: ${++xyz}` + '</br>');
document.write(`Now the value of xyz is: ${xyz}` + '</br>');
document.write(`The value of xyz++ is: ${xyz++}` + '</br>')
document.write(`Now the value of xyz is: ${xyz}` + '</br>');
document.write(`The value of --xyz is: ${--xyz}` + '</br>');
document.write(`Now the value of xyz is: ${xyz}` + '</br>');
document.write(`The value of xyz-- is: ${xyz--}` + '</br>')
document.write(`Now the value of xyz is: ${xyz}` + '</br></br>');

// ============== Answer to question 3 ==============
let user_name = prompt('Please enter your name: ', 'rauf');
console.log(`Hello,${user_name}! welcome`);

// ============== Answer to question 5 ==============
let userFavTable = +prompt('Enter a number for the multiplication table:', 5)
document.write('<h1>Table of ' + userFavTable + '</h1>')
document.write(userFavTable + ' * 1 = ' + userFavTable * 1 + '</br>')
document.write(userFavTable + ' * 2 = ' + userFavTable * 2 + '</br>')
document.write(userFavTable + ' * 3 = ' + userFavTable * 3 + '</br>')
document.write(userFavTable + ' * 4 = ' + userFavTable * 4 + '</br>')
document.write(userFavTable + ' * 5 = ' + userFavTable * 5 + '</br>')
document.write(userFavTable + ' * 6 = ' + userFavTable * 6 + '</br>')
document.write(userFavTable + ' * 7 = ' + userFavTable * 7 + '</br>')
document.write(userFavTable + ' * 8 = ' + userFavTable * 8 + '</br>')
document.write(userFavTable + ' * 9 = ' + userFavTable * 9 + '</br>')
document.write(userFavTable + ' * 10 = ' + userFavTable * 10 + '</br>')

// ============== Answer to question 6 ==============
let userSub1 = String(prompt('Enter the name of subject 1:', 'math'));
let userSub2 = String(prompt('Enter the name of subject 2:', 'physics'));
let userSub3 = String(prompt('Enter the name of subject 3:', 'Chemistry'));
let userTotalMarkPerSub = 100;
let userMarks_Sub1 = Number(prompt('Enter obtained marks for Subject 1:', 70));
let userMarks_Sub2 = Number(prompt('Enter obtained marks for Subject 2:', 80));
let userMarks_Sub3 = Number(prompt('Enter obtained marks for Subject 3:', 60));
let userObtainedMarks = userMarks_Sub1 + userMarks_Sub2 + userMarks_Sub3;
var userTotalMarks = userTotalMarkPerSub * 3;
let userPercentage = (userObtainedMarks / userTotalMarks) * 100;
document.write('<h1>User Result</h1>');
document.write('<table border="1px"><tr><th>Subjects</th><th>TotalMarks</th><th>ObtainesMarks</th></tr>');
document.write('<tr><td>' + userSub1 + '</td><td>' + userTotalMarkPerSub + '</td><td>' + userMarks_Sub1 + '</td></tr><tr><td>' + userSub2 + '</td><td>' + userTotalMarkPerSub + '</td><td>' + userMarks_Sub2 + '</td></tr>')
document.write('<tr><td>' + userSub3 + '</td><td>' + userTotalMarkPerSub + '</td><td>' + userMarks_Sub3 + '</td></tr>')
document.write('<tr><td></td><td>' + userTotalMarks + '</td><td>' + userObtainedMarks + '</td></tr><tr><td>Percentage</td><td colspan="2" style="text-align: center;">' + userPercentage + '%</td></tr></table></br></br>')



// ****************************** Chapter 09 to 11 : User Input & Conditional Statement ******************************

// ============== Answer to question 1 ==============
let userCity = String(prompt('Enter your city name:', 'karachi'));
if (userCity === 'karachi') {
    document.write('Welcome to city of lights' + '</br></br>');
} else { }

// ============== Answer to question 2 ==============
let userGender = String(prompt('Enter your gender;', 'male'));
document.write(userGender === 'male' ? 'Good Morning Sir' : userGender === 'female' ? 'Good Morning Ma’am' : 'Invalid input');
document.write('</br></br>');

// ============== Answer to question 3 ==============
let TrafficSignalColor = String(prompt('Enter a road traffic signal color:', 'yellow'));
if (TrafficSignalColor === 'red') {
    document.write('Must Stop')
} else if (TrafficSignalColor === 'yellow') {
    document.write('Ready To Move');
} else if (TrafficSignalColor === 'green') {
    document.write('Move Now');
} else {
    document.write('Invalid input, please enter only red, yellow, or green');
}
document.write('</br></br>');

// ============== Answer to question 4 ==============
let userFuel = +prompt('Enter the remaining fuel in your car (in litres):', 0.20);
if (userFuel < 0.25) {
    document.write('Please refill the fuel in your car')
} else {
    document.write('Petrol level is sufficient. Drive safely!');
}
document.write('</br></br>');

// ============== Answer to question 6 ==============
let totalMarksOfUser = +(prompt('Enter your total marks:', 300));
let obtMarksOfUser = +(prompt('Enter your obtained marks:', 220));
let calculateuserPer = Math.round((obtMarksOfUser / totalMarksOfUser) * 100);
let userGrade;
let userRemarks;
document.write(`Total marks: ${totalMarksOfUser}` + '</br>');
document.write(`Marks obtained: ${obtMarksOfUser}` + '</br>');
document.write(`Percentage: ${calculateuserPer}%` + '</br>')
if (calculateuserPer <= 80) {
    userGrade = 'A-one';
    userRemarks = 'Excellent'
} else if (calculateuserPer <= 70) {
    userGrade = 'A';
    userRemarks = 'Good';
} else if (calculateuserPer <= 60) {
    userGrade = 'B';
    userRemarks = 'You need to improve';
} else {
    userGrade = 'Fail';
    userRemarks = 'Sorry';
}
document.write(`Grade: ${userGrade}` + '</br>');
document.write(`Remarks: ${userRemarks}` + '</br></br>');

// ============== Answer to question 7 ==============
let secretNum = Math.floor(Math.random() * 10);
let userGuessNum = +prompt('Guess the secret number (between 1 and 10):', 3);
switch (true) {
    case userGuessNum === secretNum:
        document.write('Bingo! Correct answer');
        break;
    case userGuessNum === secretNum + 1:
        document.write('Close enough to the correct answer');
        break;
    default:
        document.write("Sorry, the correct answer is " + secretNum);
        break;
}
document.write('</br></br>');

// ============== Answer to question 8 ==============
let userNum = +prompt('Enter a number:', 10);
document.write(userNum % 3 === 0 ? 'Number is divisible by 3' : 'Number is not divisible by 3' + '</br></br>');

// ============== Answer to question 9 ==============
let numEvenOrOdd = +prompt('Enter a number:', 6);
document.write(numEvenOrOdd % 2 === 0 ? `${numEvenOrOdd} is an even number` : `${numEvenOrOdd} is an odd number` + '</br></br>');

// ============== Answer to question 10 ==============
let UserTemp = +prompt('Enter a temperature in number:', 30);
switch (true) {
    case UserTemp > 40:
        document.write('It is too hot outside');
        break;
    case UserTemp > 30:
        document.write('The Weather today is Normal');
        break;
    case UserTemp > 20:
        document.write('Today’s Weather is cool');
        break;
    case UserTemp > 10:
        document.write('OMG! Today’s weather is so Cool');
        break;
    default:
        document.write('The weather is extremely cold');
        break;
}
document.write('</br></br>');

// ============== Answer to question 11 ==============
let firstNum = +prompt('Enter a first number:', 20);
let secondNum = +prompt('Enter a second number:', 10);
let numOperation = String(prompt('Enter the operation (+, -, *, /, %):', '-'));
let calculatorResult;
if (numOperation === '+') {
    calculatorResult = firstNum + secondNum;
} else if (numOperation === '-') {
    calculatorResult = firstNum - secondNum;
} else if (numOperation === '*') {
    calculatorResult = firstNum * secondNum;
} else if (numOperation === '/') {
    if (secondNum !== 0) {
        calculatorResult = firstNum / secondNum;
    } else {
        calculatorResult = 'Cannot divide by zero';
    }
} else if (numOperation === '%') {
    if (secondNum !== 0) {
        calculatorResult = firstNum % secondNum;
    } else {
        calculatorResult = 'Cannot find remainder when dividing by zero';
    }
} else {
    calculatorResult = 'Invalid operation!';
}
document.write(`Calculator result: ${calculatorResult}` + '</br></br>');



// ********************** Chapter 12 to 13 : if...else & else if statement, Testing set of condition ************************

// ============== Answer to question 1 ==============
let userInputNumorStr = prompt('Enter a character (number or string):', 'z');
let asciiCode = userInputNumorStr.charCodeAt();
console.log(asciiCode)
if (asciiCode >= 48 && asciiCode <= 57) {
    document.write('Input is a Number')
} else if (asciiCode >= 65 && asciiCode <= 90) {
    document.write('Input is an uppercase letter');
} else if (asciiCode >= 97 && asciiCode <= 122) {
    document.write('Input is a lowercase letter');
} else {
    document.write('invalid Input');
}
document.write('</br></br>')

// ============== Answer to question 2 ==============
let userFirstNum = +prompt('Enter a first integer:', 60);
let userSecondNum = +prompt('Enter a second integer:', 60);
if (userFirstNum > userSecondNum) {
    document.write('The larger integer is ' + userFirstNum + '</br>');
} else if (userSecondNum > userFirstNum) {
    document.write('The larger Number is ' + userSecondNum + '</br>');
} else {
    document.write('Both number are equal');
}
document.write('</br></br>');

// ============== Answer to question 3 ==============
let numInput = +prompt('Enter a number:', 0);
if (numInput < 0) {
    document.write('your input number is negative');
} else if (numInput === 0) {
    document.write('your input number is Zero');
} else {
    document.write('your input number is positive');
}
document.write('</br></br>');

// ============== Answer to question 4 ==============
let vowelOrNot = String(prompt('Enter a single letter', 'a').toLowerCase());
if (vowelOrNot === 'a' || vowelOrNot === 'e' || vowelOrNot === 'i' || vowelOrNot === 'o' || vowelOrNot === 'u') {
    document.write('true');
} else {
    document.write('false');
}
document.write('</br></br>');

// ============== Answer to question 5 ==============
let correctPassword = 'uniquepassword';
let userPasswordInput = prompt('Enter your password:', 'password');
document.write(userPasswordInput === '' ?
    'Please enter your password' :
    userPasswordInput === correctPassword ?
        'Correct! The password youentered matches the original password' :
        'Incorrect password');
document.write('</br></br>');

// ============== Answer to question 6 ==============
let greeting;
let hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.write(greeting + '</br></br>');

// ============== Answer to question 7 ==============
let timeInput = +prompt('Enter the time in 24-hour clock format (e.g., 1900 for 7:00 PM):', 1100);
let msg;
if (timeInput >= 0 && timeInput < 1200) {
    msg = 'Good morning!';
} else if (timeInput >= 1200 && timeInput < 1700) {
    msg = 'Good afternoon!';
} else if (timeInput >= 1700 && timeInput < 2100) {
    msg = 'Good evening!';
} else if (timeInput >= 2100 && timeInput <= 2359) {
    msg = 'Good night!';
} else {
    msg = 'Invalid input. Please enter a valid 24-hour time';
}
document.write(msg + '</br></br>');



// ****************************** Chapter 14 to 16 : Arrays ******************************

// ============== Answer to question 1 ==============
let literalNotationArray = [];

// ============== Answer to question 2 ==============
let objectNotationArray = new Array();

// ============== Answer to question 3 ==============
let stringTypeArray = ['index0', 'index1', 'index2', 'index3'];

// ============== Answer to question 4 ==============
let numTypeArray = [0, 1, 2, 3, 4, 5];

// ============== Answer to question 5 ==============
let boolTypeArray = [true, false, true, true];

// ============== Answer to question 6 ==============
let mixDataTypeArray = ['string1', 100, true, 'string2', 200, false];

// ============== Answer to question 7 ==============
let qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PHD'];
document.write('Qualifications' + '</br>');
document.write(`1)${qualifications[0]}` + '</br>');
document.write(`2)${qualifications[1]}` + '</br>');
document.write(`3)${qualifications[2]}` + '</br>');
document.write(`4)${qualifications[3]}` + '</br>');
document.write(`5)${qualifications[4]}` + '</br>');
document.write(`6)${qualifications[5]}` + '</br>');
document.write(`7)${qualifications[6]}` + '</br>');
document.write(`8)${qualifications[7]}` + '</br></br>');

// ============== Answer to question 8 ==============
let studentsName = ['Michael', 'Johny', 'Tony'];
let studentsObtMarks = [320, 230, 480];
let studentsTotalMarks = 500;
let student1Per = Math.round((studentsObtMarks[0] / studentsTotalMarks) * 100);
let student2Per = Math.round((studentsObtMarks[1] / studentsTotalMarks) * 100);
let student3Per = Math.round((studentsObtMarks[2] / studentsTotalMarks) * 100);
document.write(`Score of ${studentsName[0]} is ${studentsObtMarks[0]}. Percentage: ${student1Per}%` + '</br>');
document.write(`Score of ${studentsName[1]} is ${studentsObtMarks[1]}. Percentage: ${student2Per}%` + '</br>');
document.write(`Score of ${studentsName[2]} is ${studentsObtMarks[2]}. Percentage: ${student3Per}%` + '</br></br>')

// ============== Answer to question 9 ==============
let colorsName = ['red', 'black', 'orange'];
let colorAddFirst = String(prompt('Enter a color to add to the beginning:', 'blue'));
colorsName.unshift(colorAddFirst);
document.write(colorsName + '</br>');
let colorAddLast = String(prompt('Enter a color to add to the end:', 'green'));
colorsName.push(colorAddLast);
document.write(colorsName + '</br>');
colorsName.unshift('grey', 'brown');
document.write(colorsName + '</br>');
colorsName.shift();
document.write(colorsName + '</br>');
colorsName.pop();
document.write(colorsName + '</br>');
let indexToAddColr = +prompt("Enter the index to add the color:", 3);
let colorNameToAdd = String(prompt("Enter the color name to add:", 'purple'));
colorsName.splice(indexToAddColr, 0, colorNameToAdd);
document.write(colorsName + '</br>');
let indexToDeletecolr = +prompt("Enter the index to delete color(s):", 0);
let numberOfColorsToDelete = +prompt("Enter the number of colors to delete:", 3);
colorsName.splice(indexToDeletecolr, numberOfColorsToDelete);
document.write(colorsName + '</br></br>');

// ============== Answer to question 10 ==============
let unsortedMarks = [320, 230, 480, 120];
document.write(`Scores of students: ${unsortedMarks}` + '</br>');
let sortedMarks = unsortedMarks.sort();
document.write(`Ordered scores of students: ${unsortedMarks}` + '</br></br>');

// ============== Answer to question 11 ==============
let citiesName = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
let selectedCities = citiesName.slice(2, 4);
document.write('Cities List:' + '</br>');
document.write(citiesName + '</br>');
document.write('Selected cities List:' + '</br>');
document.write(selectedCities + '</br></br>');

// ============== Answer to question 12 ==============
let arr = ["This", " is", " my", " cat"];
let joinString = arr.join('');
document.write('Array:</br>' + arr + '</br>');
document.write('String:</br>' + joinString + '</br></br>');

// ============== Answer to question 15 ==============
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
document.write('<select><option>' + phoneManufacturers[0] + '</option><option>' + phoneManufacturers[1] + '</option>');
document.write('<option>' + phoneManufacturers[2] + '</option><option>' + phoneManufacturers[3] + '</option>');
document.write('<option>' + phoneManufacturers[4] + '</option><option>' + phoneManufacturers[5] + '</option></select>');

