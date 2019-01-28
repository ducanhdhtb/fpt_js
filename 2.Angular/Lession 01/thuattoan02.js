var reverseWords = function(sentence){

	var words = sentence.split(" ").reverse(); // Split the sentence into an array of words and reverse it
	var string = "";
	for(word in words)
		string += (word > 0 ? " " : "") + words[word]; // Concatenate each word to the output and add spaces where required
	return string;
	
}

// Outputs: "backwards better look really would string This"
reverseWords("This string would really look better backwards");