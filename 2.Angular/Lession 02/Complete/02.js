//Cho mot chuoi string//them cac ky tu vào dau` chuoi string de? chuoi tro? thanh` Palindrome
//output ket qua la t/h them it nhat'
// tim cac truong hop co the input vao` dau` chuoi~ string de? string da cho tro thanh Palindrome
//cach mac dinh la them string.length - 1 phan tu vao` dau chuoi tring VD : ABC -> CB|A|BC -> them CB -> Kqua tra ve` la` 2
// 1 truong hop thoa man la : tu` vi tri dang xet == vi tri o? +2 (hoac +1). Vi tri dang xet <= Math.floor(string.length/2)//tu` moi~ t/h tm ta ghi gia tri ra 1 arr. roi` lay' min.
// Một chuỗi được gọi là Palindrome nếu sau khi đảo ngược các ký tự của nó, ta nhận được chuỗi ban đầu. Ví dụ: chuỗi "MADAM" là Palindrome
/*
Viết chương trình kiểm tra một chuỗi nhập vào có phải là chuỗi Palindmore hay không? Một chuỗi được goi là Palindmore nếu sau khi đảo ngược các ký tự của nó, ta nhận được chuỗi ban đầu. Ví dụ: chuỗi "MADAM" là Palindmore. 
*/
/* 
Chương trình này sẽ sử dụng vòng lặp for để duyệt i từ 0 đến cuối chuỗi. Nếu ký tự ở vị trí i bằng ký tự ở vị trí chuoi.length() - i - 1 thì chuỗi đó là chuỗi Panlyndrome.
/*

function getsize(s, start, end) { 
    var count = 0, i, j; 
    for (i = start, j = end; i >= 0 && j < s.length; i--, j++) { 
     if (s[i] !== s[j]) { 
      return count; 
     } 
     count = j - i + 1; // keeps track of how big the palindrome is 
    } 
    return count; 
} 

vector<int> computeLPSArray(string str) 
{ 
    int M = str.length(); 
    vector<int> lps(M); 
  
    int len = 0; 
    lps[0] = 0; // lps[0] is always 0 
  
    // the loop calculates lps[i] for i = 1 to M-1 
    int i = 1; 
    while (i < M) 
    { 
        if (str[i] == str[len]) 
        { 
            len++; 
            lps[i] = len; 
            i++; 
        } 
        else // (str[i] != str[len]) 
        { 
            // This is tricky. Consider the example. 
            // AAACAAAA and i = 7. The idea is similar 
            // to search step. 
            if (len != 0) 
            { 
                len = lps[len-1]; 
  
                // Also, note that we do not increment 
                // i here 
            } 
            else // if (len == 0) 
            { 
                lps[i] = 0; 
                i++; 
            } 
        } 
    } 
    return lps; 
} 