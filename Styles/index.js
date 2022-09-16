// document.getElementById('count-el').innerText = 20


// let firstBatch = 20
// let secondBatch = 30

// let count = firstBatch + secondBatch;

// console.log(count)

// let myAge = 28;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge)


// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50
// bonusPoints -= 75
// bonusPoints += 45

// console.log(bonusPoints)

//  function increment() {
//     console.log("The Button was Clicked")
//  }


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function thesum() {
//     console.log( lap1 + lap2 + lap3)
// }

// thesum()

// let lapsCompleted = 0

// function incrementlaps() {
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }

let saveEl = document.getElementById('save-el')
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let countStr = count + ' , '
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    // console.log(count)
}

// let userName = 'Kingsley'
// let  message = "You have three new notifications"

// let messageToUser = userName + ', ' + message + '!'

// console.log(messageToUser)

let welcomeEl = document.getElementById('welcome-el')

let myName = 'kingsley'
let message = 'Thank You For using our Passenger Counter App'

welcomeEl.innerText = message + ' 😏'




