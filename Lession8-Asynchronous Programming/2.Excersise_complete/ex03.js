(function() {
    console.log(1); 
    setTimeout(function(){console.log(2)}, 1000); 
    setTimeout(function(){console.log(3)}, 0); 
    console.log(4);
})();
// output 1 4 after 3 2 : (1 4 immidiate) and settimeout(after 1 period time)