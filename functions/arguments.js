//challenge
//total, tipPercent .2
//A 25% tip on $40 would be $10 
let tipCalculator = function (total, tipPercent = .2) {
    if (tipPercent > 1) {
        tipPercent=tipPercent/100
    }
    let tipAmt = (total * tipPercent)
    let tipPercentage = tipPercent * 100
    return `A ${tipPercentage}% tip on $${total} would be $${tipAmt}.`
}

let tipTotal = tipCalculator(50,.20)

console.log(tipTotal)