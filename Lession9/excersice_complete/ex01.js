// Given the following code, your task is to change function declaration/function expression of ES5 to Arrow Function syntax, however you have to make sure the output is still `true`
(function IIFE() {
  function foo(x) {
    var y = x * 2;

    return function bar(z) {
      if (z.length > 3) {
        return z.map(function baz(v) {
          if (v > 3) return v + y;
          else return baz(v * 4);
        });
      } else {
        var obj = [];

        setTimeout(
          function bam() {
            obj.length = 1;
            obj[0] = this.w;
          }.bind(this),
          100
        );

        return obj;
      }
    };
  }

  var p = foo(2);
  var list1 = [1, 3, 4];
  var list2 = list1.concat(6);

  list1 = p.call({ w: 42 }, list1);
  list2 = p(list2);

  setTimeout(function () {
    console.log(
      list1[0] ===
      list2.reduce(function (s, v) {
        return s + v;
      }, 0)
    );
  }, 200);
})();


/// -- solved by duong
(() => { const foo = x => { var y = x * 2; return (z, baz) => { if (z.length > 3) { return z.map((baz = v => { if (v > 3) return v + y; else return baz(v * 4); })); } else { var obj = []; setTimeout(() => { obj.length = 1; obj[0] = this.w; // this =>  { w: 10 } => this.w = 10;        }, 100);        return obj;      }    };  };  var p = foo(2); // p => bar  var list1 = [1, 3, 4];  var list2 = list1.concat(6);  var obj = { w: 42 };  list1 = p.call(obj, list1); // bar duoc goi, this => windows  list2 = p(list2); // bar dc goi => this => windows  setTimeout(() => {    // fn    console.log(list1[0] === list2.reduce((s, v) => s + v, 0));  }, 200);})();