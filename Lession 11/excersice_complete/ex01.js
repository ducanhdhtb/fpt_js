// let numbers = {

// };

// let numbers2 = {

// };

// function* genNum() {
//     let i = 0;
//     while (true) {
//         i++;
//         yield i;
//     }
// }

// let gen = genNum();

// numbers[Symbol.iterator] = () => {
//     return {
//         next: () => {
//             let num = gen.next().value;
//             let check = false;
//             if (num > 100) {
//                 check = true;
//             }
//             return {value: num, done: check};            
//         }
//     }
// }
function*gen(){
    let i =0;
    while(i<=100){
        yield i;
        i++;
    }
}
function*gen2(){
    let i = 6;
    while(i<=30){
        yield i;
        i+=4
    }
}

var numbers = {
    [Symbol.iterator]:gen
};
var numbers2= {
    [Symbol.iterator]:gen2
}

// should print 0..100 by 1s
for (let num of numbers) {
    console.log(num);
}

// should print 6..30 by 4s
for (let num of numbers2) {
    console.log(num);
}