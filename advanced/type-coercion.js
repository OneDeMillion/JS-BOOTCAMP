// Type coercion - a string, a number, a boolean
// avoid string and number
// boolean is okay - its truthy and falsty

const value = false + 12
const type = typeof value
console.log(type)
console.log(value)