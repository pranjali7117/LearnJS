const myNumers = [1,2,3,4,5,6,7,8,9,10]

/*const newNums = myNumers.map( (num) => {num+10})
[
    undefined, undefined,
    undefined, undefined,
    undefined, undefined,
    undefined, undefined,
    undefined
  ]
console.log(newNums);
method) Array<number>.map<number>(callbackfn: (value: number, index: number, array: number[]) => number, thisArg?: any): number[]
Calls a defined callback function on each element of an array, and returns an array that contains the results.*/

//const newNums = myNumers.map( (num) => {return num+10})
//console.log(newNums)

const mynum = []
myNumers.forEach(num => {
    n =  num+10
    mynum.push(n)
    });

    console.log(mynum);

    //CHAINING CONCEPT

        const newNums = myNumers
                        .map((num) => num*10)//result will pass to next method
                        .map((num) => num+1)
                        .filter((num) => num>=40)
        console.log(newNums);  /*output:
                                        [
                                             41, 51,  61, 71,
                                             81, 91, 101
                                        ]*/