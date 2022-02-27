function timeConversion(s) {
  // Write your code here
  // Looping through string
  let hourNum, millitaryHourTime, millitaryTime
  hourNum = parseInt(s[0] + s[1])
  if (s[8] === 'P') {
    if (hourNum <= 11) {
      millitaryHourTime = 12 + hourNum
      millitaryTime = `${millitaryHourTime}:${s[3] + s[4]}:${s[6] + s[7]}`
    } else if (hourNum == 12) {
      millitaryTime = `${hourNum}:${s[3] + s[4]}:${s[6] + s[7]}`
    }
    return millitaryTime
  } else if (s[8] === 'A') {
    let zero = '0'
    if (hourNum <= 9) {
      millitaryTime = `${zero + hourNum}:${s[3] + s[4]}:${s[6] + s[7]}`
    } else if (10 <= hourNum && hourNum <= 11) {
      millitaryTime = `${hourNum}:${s[3] + s[4]}:${s[6] + s[7]}`
    } else if (hourNum == 12) {
      millitaryHourTime = '00'
      millitaryTime = `${millitaryHourTime}:${s[3] + s[4]}:${s[6] + s[7]}`
    }
    return millitaryTime
  }
}
date = '12:34:07AM'
console.log(timeConversion(date))
