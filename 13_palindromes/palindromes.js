const palindromes = function (sentence) {
    // first slice the sentence into strings
    sentence = sentence.replace(/[^a-zA-Z 0-9]/g , "")
    sentence = sentence.replace(/ /g , "")

    let rawSentence =  sentence.toLowerCase()
    let rawArr = rawSentence.split("")
    let reverseArr  = rawArr.reverse()
    let reverseSentence = reverseArr.join('')

    console.log(rawSentence);
    console.log(reverseSentence);

    if (rawSentence === reverseSentence) {
        return true
    } else return false

};

// Do not edit below this line
module.exports = palindromes;


palindromes("A car, a man, a macara.")