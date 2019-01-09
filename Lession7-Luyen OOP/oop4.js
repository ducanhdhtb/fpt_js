/ Cach 2
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