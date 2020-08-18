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
	let revWord = ''
	for (let i = str.length - 1; i >= 0; i--) {
		revWord += str[i]
	}
	return revWord;
};

reverseString('Hello');
