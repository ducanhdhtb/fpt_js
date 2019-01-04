function modifyMatrix(arr){
    debugger;
    // variables to check if there are any 1 
    // in first row and column 
    var row_flag = false;
    var col_flag = false;
    // updating the first row and col if 1 
    // is encountered 
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
           if(i == 0 && arr[i][j] == 1){
               row_flag = true;
           }
           if(j == 0 && arr[i][j] == 1){
                con_flag = true;
           }
           if(arr[i][j] == 1){
               arr[0][j] = 1;
               arr[i][0] = 1;
           }
        }
    }
    // Modify the input matrix mat[] using the 
    // first row and first column of Matrix mat 
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
          if(arr[0][j] == 1 || arr[i][0] == 1){
              arr[i][j] = 1;
          }
        }
    }    
     // modify first row if there was any 1 
     if (row_flag == true) { 
        for(i=0;i<arr[i].length;i++){
           arr[0][i] = 1;
        }    
    } 
    // modify first col if there was any 1 
    if (col_flag == true) { 
        for ( i = 0; i < arr.length; i++) { 
            arr[i][0] = 1; 
        } 
    } 
  


}


modifyMatrix([[1,0,1],[1,1,1],[1,1,1]]);
