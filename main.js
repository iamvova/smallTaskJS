// --------------- Виконав Піндак Володимир ---------------
// Задача 1
function difference(arr){
  arr.sort(function(a, b){return a - b})
  return arr.length <= 1 ? 0 :  arr.pop() - arr[0]
}

console.log("Task 1", difference([1, 2, 3, -4]));

const difference1 = (arr)=> (_.max(arr) - _.min(arr))
console.log("Task 1 (Lodash)", difference1([1, 2, 3, -4]));

//Задача 2
function wordsLen(words, num){
  const wordsArr = words.split(" ")
  let resWordsLen = []

  wordsArr.map((i)=>{
      if(i.length > num){
          resWordsLen.push(i)
      }
  })

  return resWordsLen
}

console.log("Task 2", wordsLen('Напишіть функцію, яка приймає рядок і число.', 3));

function wordsLen1(words, num){
  const wordsArr = _.split(words, ' ')
  let resWordsLen = []

  _.map(wordsArr, function(i){
      if(i.length > num)
          resWordsLen.push(i)
  })

  return resWordsLen
}

console.log("Task 2 (Lodash)", wordsLen1('Напишіть функцію, яка приймає рядок і число.', 3));

// Задача 3
const endWithLetters = (str, end)=> str.endsWith(end) 
console.log("Task 3", endWithLetters("asd", "sd"))

const endWithLetters1 = (str, end) => _.endsWith(str, end)
console.log("Task 3 (Lodash)", endWithLetters1("asd", "sd")); 


// Задача 4

function averagesNum (arr) {
let result = []
for (let i = 0; i < arr.length - 1; i++) 
      result.push((arr[i] + arr[i + 1]) / 2)
return result
}

console.log("Task 4", averagesNum([2, -2, 2, -2, 2])) 
console.log("Task 4", averagesNum([1, 3, 5, 1, -10])) 


// Задача 5

const vowels = ["a", "e", "i", "o", "u"]
const a = 'a'
const b = 'b'
const c = 'c'

function findVowels(str){
  let count = 0;
  for (let letter of str.toLowerCase())
      if (vowels.includes(letter))
          count++
  
  return count
}
function removeABC(str){
  if(str.includes(a) || str.includes(b) || str.includes(c) ){
      for (let letter of str.toLowerCase()){
          if (a.includes(letter)) 
              str = str.replace(a, '')
          
          if(b.includes(letter))
              str = str.replace(b, '')
          
          if(c.includes(letter))
              str = str.replace(c, '')
          
      }
      return str
  }else{
      return null
  }
}
console.log("Task 5", findVowels('Celebration'));
console.log("Task 5", removeABC('This might be a bit hard'));



// Задача 6

function findUniq(arr1, arr2){
  if(arr1.length > 1 || arr2.length > 1){
      let res = [...arr1, ...arr2]
      res = [... new Set(res)]
      return res.sort(function(a, b){return a - b})
  }else{
      return [...arr1, ...arr2]
  }
}
console.log("Task 6", findUniq([1, 2, 3], [100, 2, 1, 10]));


const findUniq1 = (arr1, arr2)=> arr1.length > 1 || arr2.length > 1 ?  _.sortBy(_.union(arr1, arr2)) : _.union(arr1, arr2)
console.log("Task 6 (Lodash)", findUniq1([1, 2, 3], [100, 2, 1, 10]));

// Задача 7
function copyObject (obj) {
const res = {}

for (const i in obj) 
      res[obj[i]] = i
      

return res
}
console.log("Task 7", copyObject({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));



// Задача 8

function calculateDifference (obj, num) {
  if(JSON.stringify(obj) === '{}'){
      return "Object is Empty"
  }else{

      let res = 0
      for (let i in obj) 
          res += obj[i]
      
      return res < num ? undefined : res - num
  }
}
console.log("Task 8", calculateDifference({ "baseball bat": 20 }, 5));
console.log("Task 8", calculateDifference({ skate: 10, painting: 20 }, 19));
console.log("Task 8", calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

// Задача 9

function doesBrickFit (a, b, c, w, h) {
  return a <= w && c <= h ? true : false
} 

console.log("Task 9", doesBrickFit(1, 1, 1, 1, 1));
console.log("Task 9", doesBrickFit(1, 2, 1, 1, 1));
console.log("Task 9", doesBrickFit(1, 2, 2, 1, 1));


// Задача 10

function fileName(file){
  return typeof file === 'string' ? file.split('\\').pop().split('.')[0] : file
}
console.log("Task 10", fileName('c:\\WebServers\\home\\testsite\\www\\myfile.txt'));

// Задача 11

function lineShift(line, num){
  let line1 = ''
  line1 = line.slice(num) + line.slice(0, num)
  return line1
}
console.log("Task 11", lineShift('12345', -2));

function lineShift1(line, num){
  let line1 = ''
  line1 = _.slice(line, num) + _.slice(line, 0, num)
  
  return line1.split(',').join('')
}
console.log("Task 11 (Lodash)", lineShift1('12345', -2));

// Задача 12

function devideArr(arr) {
  arr.sort((a, b) => a - b)
  let n = arr.length
  let b = []
  let c = []

  for (let i = 0; i < n / 2; i++) {
    b.push(arr[i])
    c.push(arr[n - i - 1])
  }

  return [b, c]
}

let aa = [1, 2, 5, 6, 8, 9, 11, 12]
let [bb, cc] = devideArr(aa)
console.log("Task 12", bb)
console.log("Task 12", cc)

// Зaдача 13


let string = "Це Рядок зі Слів з посиланням https://iamvova.com і email vvolodya1110@gmail.com, Що містять числа 123 та 4567";

function reformString(str) {
let words = str.toLowerCase().split(" ")

words = words.map(word => {
  let http = word.includes(".com.ua") || word.includes(".com") || word.includes("http") || word.includes("https") || word.includes("www")
  return http ? "[посилання заборонено]" : word
})
words = words.map(word => (word.includes("@") ? "[контакти заборонені]" : word))
words = words.filter(word => (word.length > 3 && /^\d+$/.test(word) ? false : true))
words[0] = words[0][0].toUpperCase() + words[0].substring(1)

let result = words.join(" ")

if (result.length > str.length) 
  setInterval(() => alert("Зверніться за допомогою до нашого сервісного центру."), 5000)

return result
}

console.log("Task 13", reformString(string))


// Задача 14

const div = document.querySelector('.brackets-task')
function bracketsToHTML(){

const text = 'Some (text)'


function isEqualBrackets(text) {
  const stack = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

if(isEqualBrackets(text)){
  div.innerHTML = text
  div.style.fontSize = '30px'
  div.addEventListener('copy', (e)=>{
    e.preventDefault()
  })
}
}

bracketsToHTML()


// Задача 15

let timeout;
function checkInactivity() {
timeout = setTimeout(()=> confirm("Ви ще тут?") ? checkInactivity() : window.close(), 300000); // Це є 5 хвилин
}
let body = document.querySelector('body')
let btn = document.querySelector('.btn')

body.addEventListener('load', checkInactivity)

function processInput() {
let inputText = document.getElementById("inputText").value;
let words = inputText.split(" ");

let output = "<ul>";
for (let i = 0; i < words.length; i++) {
  if (i == 0) 
    output += `<li>${words[i].toUpperCase()}</li>`
  else if (i == words.length - 1) 
    output += `<li>${words[i].toLowerCase()}</li>`
  else 
    output += `<li>${words[i]}</li>`
  
}
output += "</ul>";

document.getElementById("output").innerHTML = output;

let count = 0;
for (let i = 0; i < inputText.length; i++) {
  if (inputText[i] == "a" || inputText[i] == "A") {
    count++;
  }
}
alert("Кількість літер 'а': " + count);

clearTimeout(timeout);
checkInactivity();
}
btn.addEventListener('click', processInput)

// Задача 16

function createPassword() {
  let password = ''
  const chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_'
  const notValidNum = ['00', '11', '22', '33', '44', '55', '66', '77', '88', '99']

  const randNum = (min, max)=> Math.floor(Math.random() * (max - min + 1)) + min
  const randChar = () => chars.charAt(randNum(0, chars.length - 1))
  const addChar = () => password += randChar();

  function isCorectPassword() {
    if (password.length < 6 || password.length > 20) {
      return false
    }

    let numD = 0
    let numUpper = 0
    let numUnder = 0
    let lastChar = ''

    for (let i = 0; i < password.length; i++) {

      if (password[i] === '_') {
        numUnder++
      }else if (password[i] >= '0' && password[i] <= '9') {
          numD++

        if (lastChar >= '0' && lastChar <= '9') {
          const digitPair = lastChar + password[i]

          if (notValidNum.includes(digitPair)) {
            return false
          }
        }
      }else if (password[i] >= 'A' && password[i] <= 'Z') {
        numUpper++
      }

      lastChar = password[i]
    }

    return numUnder === 1 && numUpper >= 2 && numD <= 5
  }


  while (!isCorectPassword()) {
    password = ''
    for (let i = 0; i < randNum(6, 20); i++) {
      addChar()
    }
  }

  return password
}


console.log("Task 16", createPassword())

// Задача 17

function toMiddleArray(arr) {
  let res = []
  arr.sort(function(a, b){return a - b})
  let reversedArr = arr.reverse()

  for(let i = 0; i < reversedArr.length; i++)
      (i + 1) % 2 !== 0 ? res.unshift(reversedArr[i]) : res.push(reversedArr[i])
  
  return res
}

console.log("Task 17", toMiddleArray([22, 1, 4, 14, 5, 3, 224]))



function toMiddleArray1(arr) {
  let res = []
  let reversedArr = _.sortBy(arr).reverse()

  _.map(reversedArr, function(i, num){(num + 1) % 2 !== 0 ? res.unshift(i) : res.push(i)})
  
  return res
}

console.log("Task 17 (Lodash)", toMiddleArray1([22, 1, 4, 14, 5, 3, 224]))

