// Exercise 04: Destructuring

// Given the following code,
// you must use ES6 Destructuring feature to construct a data for function check so the output is `true`

function ajax(url, cb) {
  // fake ajax response:
  cb({
    foo: 2,
    baz: [6, 8, 10],
    bam: {
      qux: 12
    }
  });
}

function check(data) {
  console.log(
    56 ===
      data.foo +
        data.bar +
        data.baz[0] +
        data.baz[1] +
        data.baz[2] +
        data.bam.qux +
        data.bam.qam
  );
}

var defaults = {
  foo: 0,
  bar: 4,
  bam: {
    qux: 0,
    qam: 14
  }
};

// YOUR CODE HERE
function response(...) {
  check(...); // true
}

// DO NOT MODIFY
ajax('http://fun.tld', response);



// ----------------------------- solved --------------
function ajax(url, cb) {
  // fake ajax response:
  cb({
    foo: 2,
    baz: [6, 8, 10],
    bam: {
      qux: 12
    }
  });
}

function check(data) {
  console.log(
    56 ===
      data.foo +
        data.bar +
        data.baz[0] +
        data.baz[1] +
        data.baz[2] +
        data.bam.qux +
        data.bam.qam
  );
}

var defaults = {
  foo: 0,
  bar: 4,
  bam: {
    qux: 0,
    qam: 14
  }
};

// YOUR CODE HERE
function response(obj) {
  let { foo: foo, baz: baz, bam: {qux: qux1} } = obj;
  let {
    bar: bar,
    bam: { qux: qux2, qam: qam }
  } = defaults;

  let data = {
    foo: foo,
    bar: bar,
    baz: baz,
    bam: {
      qux: qux1 + qux2,
      qam: qam
    }
  };
  check(data); // true
}

// DO NOT MODIFY
ajax("http://fun.tld", response);

// ------------------ solved by duongtq --------------------
function ajax(url, cb) {
  // fake ajax response:
  cb({
  foo: 2,
  baz: [6, 8, 10],
  bam: {
  qux: 12
  }
  });
  }
  
  function check(data) {
  console.log(
  56 ===
  data.foo +
  data.bar +
  data.baz[0] +
  data.baz[1] +
  data.baz[2] +
  data.bam.qux +
  data.bam.qam
  );
  }
  
  var defaults = {
  foo: 1,
  bar: 4,
  bam: {
  qux: 0,
  qam: 14
  }
  };
  
  // YOUR CODE HERE
  function response({
  // destruct + default params
  foo = defaults.foo,
  bar = defaults.bar,
  baz = defaults.baz,
  bam: { qux = defaults.bam.qux, qam = defaults.bam.qam }
  }) {
  check({
  // construct
  foo,
  bar,
  baz,
  bam: {
  qux,
  qam
  }
  }); // true
  }
  
  // DO NOT MODIFY
  aja'http://fun.tld', response);