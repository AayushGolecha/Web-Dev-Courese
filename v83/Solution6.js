// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vowelCounter(str){
    let count=0
    for(let i=0;i<str.length;i++){
        if(/[a,e,i,o,u]/.test(str[i]) || /[A,E,I,O,U]/.test(str[i])){
            count++
        }
    }
    return `Number of vowels in the given string is ${count}`
}

let str1="Aayush"
console.log(vowelCounter(str1))
let str2="AAYUSH"
console.log(vowelCounter(str2))
let str3="AEIOU"
console.log(vowelCounter(str3))
let str4="aeiou"
console.log(vowelCounter(str4))
let str5="KaRAn"
console.log(vowelCounter(str5))
