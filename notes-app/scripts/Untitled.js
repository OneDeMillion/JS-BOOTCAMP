// // Unix Epoch - January 1st 1970 00:00:00

// const now = new Date()
// const timestamp = now.getTime()

// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())

// // console.log(`Year: ${now.getFullYear()}`)
// // console.log(`Month: ${now.getMonth()}`)
// // console.log(`Day of month: ${now.getDate()}`)
// // console.log(`Hour: ${now.getHours()}`)
// // console.log(`Minute: ${now.getMinutes()}`)
// // console.log(`Seconds: ${now.getSeconds()}`)

// // create two new dates
// const date1 = new Date('March 1 2018 12:00:00')
// const date2 = new Date()

// // get timestamps for both of the new dates
// const timestamp1 = date1.getTime()
// const timestamp2 = date2.getTime()
// console.log(timestamp1)
// console.log(timestamp2)

// // calculate which date is first and print its time
// if (timestamp1 > timestamp2) {
//     console.log(date2.toString())
// } else if (timestamp2 > timestamp1) {
//     console.log(date1.toString())
// } else {
//     console.log(date1.toString(), date2.toString())
// }




// // const now = moment()
// // now.add(1, 'week').subtract(20, 'days')
// // console.log(now.format("MMMM Do, YYYY"))
// // console.log(now.fromNow())
// // const nowTimestamp = now.valueOf()
// // console.log(nowTimestamp)

// // console.log(moment(nowTimestamp).toString())

// // const dob = moment()
// // dob.date(17).month(4).year(1972)
// // console.log(dob.format("MMM D, YYYY"))