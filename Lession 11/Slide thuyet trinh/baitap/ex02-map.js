var map = new Map(); // khởi tạo Map

map.set(1, 1000); // khởi tạo một cặp key - value
map.set(1, 5000); // ghi đè lên một đối tượng.

console.log(map.has(1)); // kiểm tra xem có đối tượng key == 1 hay không.

console.log(map.get(1)); // in ra value của đối tượng có key == 1

for(var i of map) {
  console.log(i); // in ra dãy keys của map
}

map.delete(1); // xóa key == 1

map.clear(); // xóa toàn bộ key

var map_1 =  new Map([2, 10], [3, 5]);  // Khởi tạo theo kiểu mảng.
console.log(map_1.size()); // in ra kích thước/ số cặp key - value của map.