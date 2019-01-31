let arr = [
    {
      id: 1,
      name: 'Dung',
      age: 20
    },
    {
      id: 2,
      name: 'Diu',
      age: 20
    },
    {
      id: 3,
      name: 'Ky',
      age: 20
    },
    {
      id: 1,
      name: 'Hai',
      age: 22
    }
  ]

  let arrSet = new Set(arr);

  console.log(arrSet);
  
//   let arr = [1, 5, 'a', 3, 'f', '3', 5, 3, 'b', 'e', 'f'];
//   let ans = deduplicate(arr);
  
//   console.log(ans);
//   // Expected output: [1, 5, "a", 3, "f", "3", "b", "e"]
  
//   function deduplicate(arr) {
//     let set = new Set(arr);
//     return Array.from(set);
//   }


// let ans = duduplicate(arr);
// console.log(ans);

// function duduplicate(arr){
//     let set = new Set(arr);
//     return Array.from(set);
// }
