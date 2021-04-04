const randExp = require('randexp');
const { readFileSync } = require('fs');
const yargs = require('yargs');
const { exit } = require('process');

const argv = yargs
    .option('import', {
        alias: 'i',
        desc: 'Import a name list file',
        type: 'string',
        demandOption: true
    })
    .option('format', {
        alias: 'f',
        desc: 'Format the output of the username',
        type: 'array',
        demandOption: false
    })
    .option('maxnames', {
        alias: 'm',
        desc: 'max number of usernames to generate',
        type: 'number',
        demandOption: false
    })
    .argv;

const data = readFileSync(argv.import, { encoding: 'utf8', flag: 'r' })
const dic = data.split('\r\n');

// grab random username
function randomName() {
    const name = Math.floor(Math.random() * dic.length);
    return dic[name];
}

function randomSpecialChar() {
    const chars = [".", "-", "_", "+", "!"];
    return chars[Math.floor(Math.random() * chars.length)];
}


function randomLetter() {
    const letter = new randExp(/[a-z]/).gen();
    return letter;
}

function randomNumber() {
    return (Math.floor(Math.random() * 9));
}

function generate() {

    var newName = [];
    if (argv.format != undefined) {
        for (e = 0; e < argv.format.length; e += 1) {
            switch (argv.format[e]) {
                case "name":
                    newName.push(randomName())
                    break
                case "lett":
                    newName.push(randomLetter())
                    break
                case "spec":
                    newName.push(randomSpecialChar())
                    break
                case "num":
                    newName.push(randomNumber())
                    break
                default:
                    newName.push(argv.format[e])
            }
        }
    } else {
        newName.push(randomName());
        newName.push(randomName());
        newName.push(randomSpecialChar());
    }

    const final = newName.join("");
    return final;
}

if (argv.maxnames == undefined) {
    for (i = 0; i < 1; i += 1) {
        console.log(generate());
    }
} else {
    for (i = 0; i < argv.maxnames; i += 1) {
        console.log(generate());
    }
}

exit(0)