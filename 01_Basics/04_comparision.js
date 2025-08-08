console.log("2" > 1)
console.log("02"> 1)
console.log(22 > "1")

console.log(null > "1")
console.log(null == "1")
console.log(1 == "1") // gives false cause '==' don't convert null to number first
console.log(null >= "1")
console.log(null >= "0") // gives true cause '>=' convert null to number first
console.log(null <= "1") // gives true cause '<=' convert null to number first