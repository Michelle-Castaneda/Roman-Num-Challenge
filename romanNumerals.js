// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.
// For reference, these are the building blocks for how we encode numbers with Roman numerals:
// Decimal
// Roman
// 1 // I
// 5 // V
// 10 // X
// 50 // L
// 100 // C
// 500 // D
// 1,000 // M
// For example:
// toRoman(5)
// 'V'
// toRoman(267)
// 'CCLXVII'
// Important: You should convert to “old-school Roman numerals”, where subtraction isn’t used. So, for exmple, 4 is “IIII” and 9 is “VIIII”. 
//You may be more used to a different style, where subtraction is used, as 4 would be “IV” and 9 would be “IX”. 
//This is not what we want here (though it’s a good, but much harder challenge).
// For example:
// toRoman(99)
// 'LXXXXVIIII'



function romanNumbers (num) {
    if(num > 1000) {
        return "The number greater than a 1000"
    }
    let roman = '';
    const numbers = [1000, 500, 100, 50, 10, 5, 1];
    const romanNum = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    for (let i = 0; i < numbers.length; i++) {
        let count = Math.floor(num / numbers[i]);
        num -= count * numbers[i];
        roman += romanNum[i].repeat(count);
}
return roman
}

console.log(romanNumbers(99))
console.log(romanNumbers(1001))
