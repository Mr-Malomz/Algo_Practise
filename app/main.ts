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

//Find the longest word in a string
const findLongestWord = (word: string): number => {
	//Method 1
	//first split the word
	let words = word.split(' ');
	let longestWord = '';
	for (const word of words) {
		if (word.length > longestWord.length) longestWord = word;
	}

	// return longestWord.length;

	//Method 2
	return word
		.split(' ')
		.sort((a: string, b: string) => a.length - b.length)[0].length;
};

findLongestWord('My name is hhdhhdhhdh');

//Title Case a sentence
const titleCase = (word: string): string => {
	let newWord = word.toLowerCase().split(' ');
	for (let i = 0; i < newWord.length; i++) {
		newWord[i] = newWord[i][0].toUpperCase() + newWord[i].slice(1);
	}
	return newWord.join(' ');

	//method 2
	return word
		.split(' ')
		.map((wrd) => wrd[0].toUpperCase() + wrd.slice(1))
		.join(' ');
};

titleCase('ddy name is hhdhhdhhdh');

//Return largest number in frm each array
const largestNumber = (arr: number[][]): number[] => {
	let newArray: number[] = [];
	let firstItemArr: any;
	for (let i = 0; i < arr.length; i++) {
		let firstItemArr = arr[i][0];
		for (let j = 0; j < arr[i].length; j++) {
			let currentElement = arr[i][j];
			if (currentElement >= firstItemArr) {
				firstItemArr = currentElement
			}
		}
		newArray.push(firstItemArr)
	}
	console.log(newArray);
	return newArray;
};

largestNumber([
	[1, 3, 4, 6],
	[65, 7, 6, 6],
	[100, 9, 76, 56]
]);
