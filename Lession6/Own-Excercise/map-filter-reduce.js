const animals = [
    {
        "name": "cat",
        "size": "small",
        "weight": 5
    },
    {
        "name": "dog",
        "size": "small",
        "weight": 10
    },
    {
        "name": "lion",
        "size": "medium",
        "weight": 150
    },
    {
        "name": "elephant",
        "size": "big",
        "weight": 5000
    }
]
/*
 I Hàm map()
Giả sử ta cần 1 mảng chứa tên của các con vật.
Cach 1 :  Nếu sử dụng for-loop:
*/
//var animals_names = [];
//for(let i = 0; i < animals.length;i++){
    //animals_names.push(animals[i].name);
//}
//console.log(animals_names);
//Cách 2: Sử dụng map
//Hàm map() nhận vào 3 tham số (theo thứ tự):
/*
Phần tử hiện tại của mảng.
Chỉ số của phần tử hiện tại trong mảng.
Mảng ban đầu.
1 số ưu điểm khi dùng map() thay vì for-loop:

Với map(), ta không cần quản lý trạng thái của vòng lặp như với for-loop.
Ta không cần sử dụng chỉ số để truy cập vào đúng phần tử trong mảng.
Ta không cần tạo mảng mới và push() từng giá trị vào.
 map() trả về 1 mảng mới với các giá trị đã được chỉnh sửa, do đó có thể dễ dàng gán nó cho 1 biến khác.
Có 1 điều bạn cần phải ghi nhớ, đó là luôn sử dụng return để trả về từng giá trị sau chỉnh sửa,
 nếu không mảng trả về cuối cùng sẽ chỉ chứa các giá trị undefined.
 */
 // Cách 2 :
 
 //let animal_names = animals.map(function(value,index,animals){
   //  return animals[index];
 //})
 //console.log(animal_names);


 // II Hàm filter()
 /*
 Tiếp tục với 1 bài toán khác, lần này ta muốn 1 mảng chỉ chứa các con vật nhỏ. Nếu dùng for-loop:
 */
//Cách 1
//let small_animals = [];

//for (let i = 0; i < animals.length; i ++) {
   //if((animals[i].size) === "small"){
      // small_animals.push(animals[i]);
   //}
//}
//console.log(small_animals);
//Cách 2 : sử dụng filter
//let small_animals = animals.filter(function(value,index,animals){
    //return value.size === "small";
//})
//console.log(small_animals);

// III Ham reduce
// Hãy đến với bài toán thứ 3: bạn cần tính tổng trọng lượng của các con vật. Hãy bắt đầu với for-loop:
//let total = 0;
// for(i = 0; i<animals.length;i++){
   // total = total + animals[i].weight;
//}
//console.log(total);
// Cach 2: Su dung reduce
//let total = animals.reduce(function(weight,value,index,animals){
  //  return weight = weight + value.weight;
//},0)
//console.log(total);
