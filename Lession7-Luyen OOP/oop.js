// 1.Definition
// 1.1 Method là một phần quan trọng trong js.Method là một thuộc tính mà giá trị của nó là 1 function
// var rabbit = {};
//rabbit.speak = function(line){
//    console.log(`The rabbit says ${line} `);
//}
//rabbit.speak("my boss");
// 1.3
//function travel(name,vehicle){
    //console.log("I am " +this.name +" running by" + this.vehicle);
//}
//var grabike = {name : "Grabbike driver", move:travel};
//var go7 = {name:"GO 7 driver", move:travel};
//grabike.move("Nguyen Duc Ah", "motorbike");
//go7.move("Nguyen thi ngan", "car");
// 1.2
/*
function speak(line){
    console.log(`The ${this.type} rabbit says ${line}`);
}
var whiteRabbit = {type:"white", say:speak,name:"Ohlala"};
var fatRabbit = {type:"fat", say:speak,name:"Ohlala"};
whiteRabbit.say("I am dog");
fatRabbit.say("I'm cat");
*/

//II Sự tương quan với bind, call, apply
//Nếu bạn chưa biết bind, call hay apply là gì thì bạn có thể tham khảo tại đây. Khi gọi 3 hàm này, tham số đầu tiên chính là giá trị của con trỏ this.
/*
function speak(line) {
  console.log("The " + this.type + " rabbit says '" + line + "'");
}
var whiteRabbit = {type: "white"};
var fatRabbit = {type: "fat"};
var sexyRabbit = {type: "sexy"};

speak.apply(whiteRabbit, ["I'm alive."]);
// => The white rabbit says 'I'm alive.'

speak.call(fatRabbit, "I'm alive.");
// => The fat rabbit says 'I'm alive.'

var sexyRabbitSpeak = speak.bind(sexyRabbit, "I'm alive.");
sexyRabbitSpeak();
// => The sexy rabbit says 'I'm alive.'

*/
// III.Constructor
/*
Nếu bạn đã biết về lập trình hướng đối tượng thì bạn sẽ không còn xa lạ gì với constructor.
 Trong JavaScript, hàm khởi tạo constructor sẽ chứa từ khoá this để biểu thị object được tạo ra từ nó.
  Thông thường, constructor sẽ được bắt đầu bằng chữ cái viết hoa - dùng để phân biệt nó với các function khác.
   Bạn sẽ phải sử dụng từ khoá new đứng trước tên function để tạo ra một đối tượng mới từ hàm constructor này.
    Sau đây là một ví dụ đơn giản về constructor:
*/

// function persional(id,name){
//     this.id = id;
//     this.name = name;
//     this.run = function(){
//         console.log(`${this.name} is runnning`);
//     }
// }
// //var Anna = new persional("His wife");
// var Hangan = new persional(14,"ha ngan is my love");
// console.log(Hangan.name);// Ha ngan
// Hangan.run();

//  Anna.run(); Call the method of 1 object
//  Anna.name; Call the properties of 1 object


// Cach 2
//function Rabbit(type){
    //this.type = type;// Tu khoa this bieu thi object goi no
    //this.greeting = function(){
        //console.log(`${this.type} rabbit say hello`);      
    //}
//}
//var blackRabbit = new Rabbit("black");
//console.log(blackRabbit.type);
//blackRabbit.greeting();
// Tu khoa this trong nhung truong hop nay se khac nhau.Truong hop 1 goi tu object blackRabbit truong hop 2 se goi tu whiteRabbit
//var whiteRabbit = new Rabbit("white");
//console.log(whiteRabbit.type);
//function Rabbit(type) {
    //this.type = type;
    //this.greeting = function(){
      //console.log(this.type + " rabbit" + " say Hello!");
    //}
//}
//Rabbit.prototype.sayBye = function(){
    //console.log(`${this.type} rabit say goodbye`);
//}  
//var blackRabbit = new Rabbit("Black");
//blackRabbit.sayBye();
/*
Ghi đè thuộc tính
Trong ví dụ trên, Rabbit chứa thuộc tính type. 
Đối với mỗi object được tạo ra từ constructor Rabbit, bạn có thể thay đổi giá trị thuộc tính của một object mà không làm ảnh hưởng tới các object khác.
*/
function Rabbit(type) {
    this.type = type;
    this.greeting = function(){
      console.log(this.type + " rabbit" + " say Hello!");
    }
  }
Rabbit.prototype.teeth = "small";
var blackRabbit = new Rabbit("black");
var killerRabbit = new Rabbit("killer");
console.log(blackRabbit.teeth);   // => small
console.log(killerRabbit.teeth);  // => small
killerRabbit.teeth = "long";
console.log(blackRabbit.teeth);   // => small
console.log(killerRabbit.teeth);  // => long
// Lúc này, mỗi đối tượng được tạo ra từ constructor Rabbit sẽ có hai thuộc tính type và greeting.
 // Tuy nhiên, bạn vẫn có thể tạo thêm thuộc tính cho nó thông qua Object.prototype như sau:
// IV Prototype
/*
Prototype là khái niệm rất riêng của JavaScript.
 Không giống như C++, Java, một JavaScript Object luôn có sẵn ít nhất một thuộc tính bên trong nó, là prototype.
  Và prototype cũng chính là một object. Khi một object gọi đến một thuộc tính mà nó không có thì nó sẽ tìm trong prototype.
   Hãy xem ví dụ sau:
   */
  //var empty = {};
  //console.log(Object.getPrototypeOf(empty) == Object.prototype);
  