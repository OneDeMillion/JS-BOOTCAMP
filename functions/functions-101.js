//convertFahrenheitToCelcius

let convertFahrenheitToCelcius = function (f) {
   let c = (f - 32) * 5 / 9  
   return c
}

//call a couple of times (32 => 0) (68 => 20)

let tempOne = convertFahrenheitToCelcius(32)
let tempTwo = convertFahrenheitToCelcius(68)

//print the converted values

console.log(tempOne)
console.log(tempTwo)

