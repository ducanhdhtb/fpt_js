/*Ý tưởng
Số chẵn là số chia hết cho 2 còn số lẻ thì không
Nếu giá trị truyền vào chia hết cho 2 thì là chẵn
Trương hợp còn lại là lẻ
Sử dụng cấu trúc rẽ nhánh để giải*/

// Lấy giá trị
// Kiểm tra số chẵn hay lẻ
function isEven(num){
    num = parseInt(num);
    if (num % 2 == 0){
      return true;
    }
    else{
      return false;
    }

}
var testisEven = isEven(11);
console.log(testisEven);
