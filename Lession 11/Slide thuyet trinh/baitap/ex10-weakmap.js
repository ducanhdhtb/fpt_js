// Khởi tạo
let weak = new WeakMap();
 

let key1 = {};
let key2 = {};
 
weak.set(key1, "Giá trị 01");
weak.set(key2, "Giá trị 02");

// key1 và key2 đều là object rỗng nhưng vẫn được coi là 2 key khác nhau, có vẻ WeakMap không so sánh giá trị mà so sánh địa chỉ ô nhớ