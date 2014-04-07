var word = prompt('Enter a word');

alert('You entered: ' + word +
	'\nThere are ' + word.length + ' characters in the word' +
	'\nThe third character is \'' + word.charAt(2) + '\'' +
	'\nLowercase: ' + word.toLowerCase() +
	'\nUppercase: ' + word.toUpperCase() +
	'\nExample: I have wanted a ' + word + ' since I was little' +
	'\nSubword: ' + word.substring(1, 4)
	);