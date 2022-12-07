// Declare a variable, reassign it to your favorite food,
// and console log the value

let favFood = 'Chicken And Stuff'
favFood = 'Steak and Lobsta'

console.log(favFood)

// Declare a variable, assign it a string, alert the second character in 
// the string (use google-fu adn MND)

let str = 'Hello Twitch'
alert(str[1])

let favCar = 'Pontiac G8 GT'
alert(favCar[1])
console.log(favCar)
// Other 'method' of doing the dame thang
        alert( favCar.charAt(0) )


// Create a function that takes in 3 numbers and divides the first two 
// numbers and multiply the last.
// Alert the product. Call the funtion.
function takesThreeDivs (n1, n2, n3) {
    let product = (n1 / n2) * n3
    alert(product)
}
takesThreeDivs(12, 3, 4)

//  *Conditionals*
// Create a function that takes in a number. 
// Console log the cube root of the number, call the function

function takeNumCubeRoot (num1) {
    console.log(Math.cbrt(num1).toFixed(2))
}
takeNumCubeRoot(9)

// Create a function that takes in a month. If it is a summer month, 
// alert "YAY" in another month, alert "BOO"

function summerMonth (month) {
    let monthLowerCase = month.toLowerCase()
    if(monthLowerCase === 'june' || month === 'july' || month === 'august') {
        alert('it\'s SUMMER, FOOOLZZZZZ!!!')
    
    }else if(monthLowerCase === 'december' || monthLowerCase === 'january' || monthLowerCase === 'february') {
        alert('Brrrrrrrrrrr, it\'s cold\'n a mofo!!!')
    }else {
        alert('Buuuuuu!!')
    }
}
summerMonth('june')
summerMonth('april')
summerMonth('june')
summerMonth('february')
summerMonth('december')


// Create a function that takes in a number. 
// Console log every number from 1 to that number 
// while skipping multiples of 5.

function skipFives (num) {
    for(let i = 1; i <= num;i++) {
        if(i % 5 !== 0) {
            console.log(i)
        }else if(i % 5 === 0) {
            console.log('FizzBuzz')
        }
    }
}
skipFives(20)
