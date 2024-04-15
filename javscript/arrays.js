/* FOR IN LOOP
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "Swift by apple"
}
for (const key in myObject) {
    console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
   console.log(programming[key])
}*/

//FOR EACH LOOP higher order function
const coding = ["js","ruby","java","python","cpp"]
// callback function has no name so parameter is noty given coding.forEach( function name() {})

/*coding.forEach( function (item) {
    console.log(item);
})*/
//ARROW FUNC
/*coding.forEach( (item) => {
    console.log(item)
} )*/

/*function printMe(item) {
    console.log(item)
}
coding.forEach(printMe)*/
//PARAMETERS IN FOREACH:
// item, index,array

/*coding.forEach( (item,index,coding) => {
     console.log(item,index,coding)
} )*/

const myCoding = [
    {
    languageName: "javascript",
    languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },

]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )