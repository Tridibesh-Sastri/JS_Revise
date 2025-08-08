const name = "Trixi"
const repoCount = 18

console.log(name + " has " + repoCount + " repositories.") // old method not preferred

console.log(`${name} has ${repoCount} repositories.`) // modern method with variable injection and highly preferred. This `` is known as string interpolation

const newName = new String("Shamy")

console.log(newName) // String { 'Shamy' } - this is an object, not a primitive string
console.log(typeof newName) // object
console.log(newName.length) // 5 - length of the string
console.log(name.length) // 5 - length of the string
console.log(typeof name) // string - this is a primitive string