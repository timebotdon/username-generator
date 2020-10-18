const randExp = require('randexp');
const fs = require('fs');

const filePath = './names.txt'

const data = fs.readFileSync(filePath, {encoding: 'utf8', flag:'r'})
const dic = data.split('\r\n');

// grab random username
function n(){
  const rand = Math.floor(Math.random() * dic.length)
  return rand
}

const sep = new randExp(/(\.|-| |_)/).gen();
const word = new randExp(/[a-z]{0,2}/).gen();
const num = new randExp(/[0-9]{0,2}/).gen();
const aNum = new randExp(/\w{0,2}/).gen();

const format = sep + dic[n()] + dic[n()] + aNum + sep;

console.log(format)