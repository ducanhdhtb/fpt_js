var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  // sum is 6
  console.log(sum,testFunction);


  function reduce(arr,initial){
    var newArray = [];
    for(var i = 0; i < arr.length; i++) {  
            newArray.push(arr[i]);
    }
    return newArray;
  }

  /*
  Hàm reduce sẽ biến đổi một mảng thành một giá trị đơn giản.
  Hàm reduce  sẽ thực hiện một hàm được cung cấp cho mỗi giá trị của mảng, từ trái qua phải.
    Hàm sẽ trả về một kết quả được lưu trữ( tổng số hoặc kết quả tính toàn).
    Hàm reduce sẽ không thực hiện hàm được cung cấp đối với các phần tử không có giá trị.
    Cú pháp: array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    Trong đó:

total - giá trị trả lại trước đó của function.
    currentValue - giá trị của phần tử hiện tại.
    currentIndex-  chỉ số của phần tử hiện tại.
    arr -  mảng mà phần tử hiện tại thuộc về.
    initialValue-  tham số không bắt buộc. 
    Nếu được truyền vào thì initialValue sẽ được sử dụng làm giá trị ban đầu của function.
