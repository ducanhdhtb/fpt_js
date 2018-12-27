/*Ý tưởng
Bước 1 : Sẽ tạo một mảng để nhập
Với mỗi input nhập vào ta sẽ có output mảng ra là 2n-1
Ví dụ với n=3 ta sẽ có là 2*3-1=5 mảng đầu ra là 5(5 mảng con)
Bước 2 : 
Sẽ đẩy các mảng con vào mảng mới
Mảng nhập vào là mảng 2 chiều mà vị trí của nó theo chiều xuyệt ngang sẽ là tổng của i và j(i,j là trị số hàng với cột của mảng)
Output[i+j].push[input[i][j];*/


function changeIntoHombus(n) {
    var i, j;
    var x = 1;
    var A = [];
    var outputArray = [];
    //Create array
    for (let z = 0; z < (2 * n - 1); z += 1) {
        outputArray[z] = [];
    }
    debugger;
    /*End creat Array with n =3 3*3*/
    /*for (i = 0; i < n; i += 1) {
        A[i] = [];
        for (j = 0; j < n; j += 1) {
            A[i][j] = x;
            x += 1;
            outputArray[i + j].push(A[i][j]);
        }
    }
    return outputArray;*/
}
changeIntoHombus(4);