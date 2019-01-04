/* Yêu cầu :
Từ một mảng m*n người dùng nhập vào
Với chỉ một phần tử trong mảng có chỉ số bằng 0 thì cột ứng với chỉ số đó sẽ bằng 0 và hàng ứng với chỉ số đó sẽ bằng 0
*/
/* Ý tưởng 
Sử dụng vòng lặp 1 để tìm ra phần tử có giá trị 0
Su dung vong lap 2 de gan no vao

*/
function setMatrix0(arr){
    let Cororderx;
    let Corordery;
    // Sử dụng vòng lặp duyệt mảng đa chiều
    for(i=0;i<arr.length;i++){
       
        for(j=0;j<arr[i].length;j++){
            //Kiểm tra xem nếu phần tử nào có giá trị bằng 0 thi se lay toa do cua no
            if(arr[i][j] === 0){
                Cororderx = i;
                Corordery = j;
                
            }
        }
    }
    for(k=0;k<arr.length;k++){      
        for(m=0;m<arr[k].length;m++){
            if (Cororderx === k || Corordery === m) { 
                arr[k][m] = 0;
            }
        }       
    }
    return arr;
    
}
console.log(setMatrix0([[1,0,1,0],[1,1,1,1],[1,1,1,1],[0,1,1,1]]))