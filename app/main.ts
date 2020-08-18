//Reverse a string function
const reverseString = (str: string): string => {
	//first method
	/*let strArray = str.split('');
	let revArray = strArray.reverse();

    let strReversed = revArray.join('');
    console.log(strReversed);
    
	return strReversed;*/

	//using chaining method
	// return str.split('').reverse().join('');

	//writing from scratch
	let revWord = '';
	for (let i = str.length - 1; i >= 0; i--) {
		revWord += str[i];
	}
	return revWord;
};

//Factorial
const factorialize = (num: number): number => {
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
};

//Palindromes: Checks if a word is spelled the same way backward and forward eg eye
const palindromes = (word: string): boolean => {
	//replacing special character with empty string
	let regex = /[\w_]/g;
	let finalWord = word.toLowerCase().replace(regex, '');

	for (let i = word.length - 1; i >= 0; i--) {
		finalWord += word[i];
	}

	return word === finalWord;
};
palindromes('eyebb');
