let words = [
    'полено',
    'клаустрафобия',
    'котик',
    'йогурт',
]



const indexWord = wordNum(3)
const word = words[indexWord].split('')

let symbolNum = words[indexWord].length
let countAttempt = symbolNum + 3
let inputAdd = []


function wordNum(max) {
    return Math.floor(Math.random() * max)
}

function attempt(numAttempt) {
    document.querySelector('.attempt').innerHTML = `Количество попыток: ${numAttempt}`
}
attempt(countAttempt)



function genWord(num) {
    document.querySelector('.word').innerHTML = ''
    for(let i = 0; i < num; i++) {
        document.querySelector('.word').innerHTML += `<div class = '${word[i]}'>${word[i]}</div>`
        
        if (inputAdd.includes(word[i])) {
            document.querySelectorAll(`.${word[i]}`).forEach(element => {
                element.style.color = 'black'
            });
        }
    }
}
genWord(symbolNum)


let inputLetter = document.querySelector('.letterInput').addEventListener('keyup', e => {
    if (e.code == 'Enter') {
        attempt(countAttempt)
    if (word.includes(e.target.value) && (countAttempt > 0)) {
        inputAdd.push(e.target.value)
        genWord(symbolNum)
    } else {
        countAttempt -= 1
        attempt(countAttempt)
        genWord(symbolNum)
    }
    e.target.value = ''
}
    ending(countAttempt)
})



function ending(end) {
    let win = true;
    word.forEach(element => {
        if (!inputAdd.includes(element)) {
            win = false
        }
    })
    if (end != 0 && win) {
        document.querySelector('.attempt').innerHTML = 'Победа'
        document.querySelector('.letterInput').disabled = true
    } else if ( end == 0 ) {
        document.querySelector('.attempt').innerHTML = 'Поражение'
        document.querySelector('.letterInput').disabled = true
    }
}