const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let firstPasswordEl = document.getElementById("first-password")
let secondPasswordEl = document.getElementById("second-password")

function randomChar() {
    let char = characters[(Math.floor(Math.random() * characters.length))]
    return char
}

let password1 = []
let password2 = []

for (let i = 0; i < 15; i++) {
    password1.push(randomChar(characters[i]))
}

for (let i = 0; i < 15; i++) {
    password2.push(randomChar(characters[i]))
}

let joinedPass1 = password1.join("")
let joinedPass2 = password2.join("")

function callPass1And2() {
    secondPasswordEl.textContent = joinedPass1
    firstPasswordEl.textContent = joinedPass2
}




