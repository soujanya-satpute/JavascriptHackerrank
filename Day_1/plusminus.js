function plusminus(Array) {
  var positiveCount = 0
  negativeCount = 0
  zeroCount = 0

  var postiveRatio, negativeRatio, zeroRatio
  for (let i = 0; i <= Array.length; i++) {
    if (Array[i] < 0) {
      negativeCount++
      //   console.log(`negative count${i}th time` + negativeCount)
    } else if (Array[i] > 0) {
      positiveCount++
      //   console.log(`positive count${i}th time` + positiveCount)
    } else if (Array[i] == 0) {
      zeroCount++
      //   console.log(`zero count${i}th time` + zeroCount)
    }
  }
  postiveRatio = positiveCount / Array.length
  negativeRatio = negativeCount / Array.length
  zeroRatio = zeroCount / Array.length
  console.log(postiveRatio.toFixed(6))
  console.log(negativeRatio.toFixed(6))
  console.log(zeroRatio.toFixed(6))
  return postiveRatio, negativeRatio, zeroRatio
}

plusminus([-4, 3, -9, 0, 4, 1])
