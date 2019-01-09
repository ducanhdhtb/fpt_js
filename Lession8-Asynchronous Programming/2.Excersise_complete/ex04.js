//  What order log messages take in the following cases?
// Case 1.
//console.log("A");
//setImmediate(function() { console.log("B"); }, 0);
//setImmediate(function() { console.log("C"); }, 0)
//console.log("D");
// Các immidiate sẽ thực thi đầu tiên các hàm kia sẽ thực hiên sau cùng

// --------------------------------------(v)--------------------------------------------
// Case 2. Độ ưu tiên của các timeout function. 
// th1:setTimeout nằm trong setTimeout và độ trễ là 0
// th2: settimeout và truyền vào 1 function bình thường
// th3: setTimeout function nằm trong 1 settimeout function và độ trễ là 10s
// th4: Giống trường hợp 2 nhưng là viết sau
// Dự đoán
// C sẽ là cái cuối cùng (4th)
// B sẽ là cái chạy đầu tiên vì nó không có hàm lồng
// D sẽ là cái chạy thứ 2 theo thứ tự từ trên xuống
// A sẽ là cái chạy thứ 3 vì setTimeout của nó là hàm lồng
// C sẽ là cái cuối cùng vì thiết lập chạy thời gian cho hàm settimeout (4th)
// setTimeout(function() {
//     setTimeout(function() {
//       console.log('A');                        // 3
//     }, 0);
//   }, 0);
  
//   setTimeout(function() {
//     console.log('B');                         // 1
//   }, 0);
  
//   setTimeout(function() {
//     setTimeout(function() {
//       console.log('C');                       // 4
//     }, 0);
//   }, 10);
  
//   setTimeout(function() {
//     console.log('D');                         //2
//   }, 0);
//-----------------Ctrl k c ------ comment -----------------------------------------------
// Case 3
// Dự Độ ưu tiên của nó sẽ như sau 
// sau 1s gán cho D 
// Sau 2s gán cho C
// Sau 3s gán cho B
// Sau 4s gán cho ?  A => A sẽ log cuối cùng

// var x = 'A';

// setTimeout(function() {
//   console.log(x);
//   x = 'B'; //4
// }, 3);

// setTimeout(function() {
//   console.log(x);
//   x = 'C'; // 3
// }, 2);

// setTimeout(function() {
//   console.log(x);   // 2
//   x = 'D';
// }, 1);

// setTimeout(function() {
//   console.log(x);   // 1
// }, 4);

// Ket qua  A D C B

// Case 4
// Dự đoán
// Hàm không lồng nhau sẽ được ưu tiên đầu tiên
// Hàm lồng nhau sẽ bị sếp sau
// khong the clearTimeout trong setTimeout
var t1 = setTimeout(function() {
    console.log('A');
    setTimeout(function() {
      console.log('B');
    }, 0);
  }, 100);
  
  var t2 = setTimeout(function() {
    console.log('C');
    setTimeout(function() {
      console.log('D');
    }, 0);
  }, 200);
  
  clearTimeout(t1);
  
  setTimeout(function() {
    clearTimeout(t2);
  }, 250);
  