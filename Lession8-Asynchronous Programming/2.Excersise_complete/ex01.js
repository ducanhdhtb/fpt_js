/*
The setTimeout() function is commonly used 
if you wish to run your function a specified number of milliseconds from when the setTimeout() method was called.
 The general syntax of the method is:setTimeout(expression, timeout);
 */

 var setTime = setTimeout(function(){
    console.log("Hello Fresher Academy")
},1000);
/*
Hàm clearTimeout() trong Javascript
Giả sử bạn xây dựng chức năng sau 3 giây thì sẽ xuất hiện thông báo,
 tuy nhiên sau 2 giây chương trình muốn hủy bỏ thì phải làm thế nào?
  Lúc này bạn phải sử dụng hàm clearTimeout().

Tham số truyền vào hàm clearTimeout() là đối tượng setTimeout() 
nên lúc này ban phải đặt hàm setTimeout() vào một biến cụ thể.
// hành động
var action = setTimeout(function(){
    // something
}, 3000);
 
// hủy hành động
clearTimeout(action);
*/
 //  clearTimeout(setTime);
