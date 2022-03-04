//* callback > promise > async/await

const fs = require('fs')

console.log(1)
/*
// CallBack
fs.readFile('./in1.txt', (err, contents) => {
    fs.readFile('./in2.txt', (err2, contents2) => {
        console.log(err, String(contents))
        console.log(err2, String(contents2))
    })
})
*/
// promise
const readFile = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err)
        } else {
            resolve(contents)
        }
    })
})
/*
// promise
const promessa = readFile('./in1.txt')
    .then( contents => {
        console.log(String(contents))
        return readFile('./in2.txt')
    })
    .then( contents => {
        console.log(String(contents))
        //console.log(promessa)
    })
//setTimeout(() => console.log(promessa), 1000)
*/
// async/await - açucar sintático em cima da promise

const init = async() => {
    try{
        const contents = await readFile('./in1.txt')
        const contents2 = await readFile('./in2.txt')
        return String(contents) + '\r\n' + String(contents2)
    }catch(err){
        console.log(err)
    }
}
init()
    .then( contents => console.log(contents) )

console.log(2)

console.log(3)