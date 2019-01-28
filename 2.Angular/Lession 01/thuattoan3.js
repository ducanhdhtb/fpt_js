// Returns n'th term in 
// look-and-say sequence 
function countnndSay(n) 
{ 
    // Base cases 
    if (n == 1)      
        return "1"; 
    if (n == 2)      
        return "11"; 
  
    // Find n'th term by generating  
    // all terms from 3 to n-1.  
    // Every term is generated  
    // using previous term 
      
    // Initialize previous term 
    var str = "11";  
    for (i = 3;i <=  n;  i++) 
    { 
        // In below for loop,  
        // previous character is  
        // processed in current  
        // iteration. That is why  
        // a dummy character is  
        // added to make sure that  
        // loop runs one extra iteration. 
        var str =  str. ""; 
        var len = strlen( str); 
  
        var cnt = 1; // Initialize count of 
                  // matching chars 
        var tmp = ""; // Initialize i'th  
                   // term in series 
  
        // Process previous term  
        // to find the next term 
        for ( j = 1;  j <  len;  j++) 
        { 
            // If current character 
            // does't match 
            if ( str[ j] !=  str[ j - 1]) 
            { 
                // Append count of 
                // str[j-1] to temp 
                var tmp =  tmp. cnt + 0; 
  
                // Append str[j-1] 
                var tmp =  tmp.  str[ j - 1]; 
  
                // Reset count 
                var cnt = 1; 
            } 
  
            // If matches, then increment  
            // count of matching characters 
            else  cnt++; 
        } 
  
        // Update str 
        var str =  tmp; 
    } 
  
    return  str; 
} 