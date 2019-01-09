// I . Tính chất đặc trưng của lập trình hướng đối tượng trong JavaScript
// 1.Tính đóng gói (Encapsulation)
//Tính đóng gói: che giấu dữ liệu, không cho phép truy cập dữ liệu trực tiếp từ bên ngoài,
 //mà phải thông qua các method được cung cấp.
 /*
 function Person(_name){
    this.name = _name;
    this.setName = function(_name){
      name = _name;       
    }
    this.getName = function(){
      return name;
    }
  }
  
  var person = new Person("LamPham");
  console.log(person.name);          // => undefined
  console.log(person.getName());     // => LamPham
  
  person.setName("LP Devs");
  console.log(person.getName());     // => LP Devs</pre>

  */

  // *************************************************************************************
 // 2. Tính kế thừa
 /*
  đối tượng con sẽ kế thừa những thuộc tính của đối tượng cha mà không cần phải định nghĩa lại. 
  Mặc dù, JavaScript không hỗ trợ trực tiếp tính kế thừa,
   tuy nhiên ta vẫn có thể tuỳ biến để áp dụng tính chất này trong JavaScript
 */
function Person(_name){
    var name = _name;
    this.setName = function(_name){
      name = _name;       
    }
    this.getName = function(){
      return name;
    }
  }
  
  function Student(_name, _school){
    var school = _school;
    Person.call(this, _name);
    this.setSchool = function(_school){
      school = _school;
    }
    this.getSchool = function(){
      return school;
    }
  }
  
  var student = new Student("LamPham", "HUST");
  console.log(student.getName());    // => LamPham
  console.log(student.getSchool());  // => HUST
  
  student.setSchool("NEU");
  student.setName("Ronaldo");
  
  console.log(student.getName());    // => Ronaldo
  console.log(student.getSchool());  // => NEU
  /*
  Kết luận
Trên đây là những khía cạnh cơ bản của lập trình hướng đối tượng được áp dụng trong JavaScript. Tôi có thể tóm tắt ngắn gọn lại như sau:

Method: chúng ta sẽ sử dụng method để lấy giá trị và sửa đổi giá trị thuộc tính của object.
Prototype: mọi object đều chứa thuộc tính prototype. Chúng ta có thể thay đổi, thêm thuộc tính của object dựa vào prototype.
Constructor: Có thể tạo mới một object từ một hàm khởi tạo constructor sử dụng từ khoá new.
Tính đóng gói: che giấu dữ liệu; không cho phép truy cập dữ liệu trực tiếp từ bên ngoài, mà phải thông qua các method được cung cấp.
Tính kế thừa: đối tượng con sẽ kế thừa những thuộc tính của đối tượng cha mà không cần phải định nghĩa lại.
Việc áp dụng lập trình hướng đối tượng vào JavaScript là tương đối khó. Tuy nhiên, nếu bạn nắm vững những kiến thức cơ bản mà tôi đã trình bày trên đây, thì tôi tin chắc rằng bạn sẽ dễ dàng tìm hiểu thêm và áp dụng lập trình hướng đối tượng trong JavaScript.
*/