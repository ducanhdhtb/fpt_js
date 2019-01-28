// 1.Yêu cầu : Cho một chuỗi đầu vào, đảo ngược chuỗi từ bằng từ
// Cho ví dụ :
// Given s = "the sky is blue",
//return "blue is sky the"
// 2.Ý tưởng
// Bước  1 : Chia câu thành một mảng các từ và đảo ngược nó
// Bước  2 :  Nối từng từ với đầu ra và thêm khoảng trắng nếu cần


function reverseWords(sentence){

	var words = sentence.split(" ").reverse(); // Chia câu thành một mảng các từ và đảo ngược nó
	var string = "";
	for(word in words)
		string += (word > 0 ? " " : "") + words[word]; // Nối từng từ với đầu ra và thêm khoảng trắng nếu cần
	return string;
	
}

// Outputs: "backwards better look really would string This"
reverseWords("This string would really look better backward