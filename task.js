
// Apply the splice() method to remove the second and third elements from the colors array and replace them with 'purple' and
const colors = ['red','green','blue','yellow','orange']
result = colors.splice(2,2, "puple", "pink")
console.log(result)

// Utilize the copyWithin() method to copy the elements from index 1 to index 3 within the colors array to index 0.
const color = ['red','green','blue','yellow','orange']
result = colors.copyWithin(0,1,3)
console.log(result)

// Apply the find() method to find the first element in the colors array that starts with the letter 'b'.
const colors1 = ['red','green','blue','yellow','orange']
result = colors.find()

// Finally, transform all elements of the colors array to uppercase using the toUpperCase() method.
const colors2 = ['red','green','blue','yellow','orange']
const upper = colors.map(element => {
    return element.toUpperCase()
})



















