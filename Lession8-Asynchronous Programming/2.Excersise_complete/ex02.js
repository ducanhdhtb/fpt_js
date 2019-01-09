/*
Exercise 02: setInterval
The setInterval() function, as the name suggests is commonly used to set a delay for functions that are executed again and again like animations. The setInterval() function is very closely related to setTimeout() - they even have same syntax:

setInterval(expression, interval);
The only difference is:
setTimeout() triggers the expression only once while setInterval() keeps triggering expressionregularly after the given interval of time. (unless you tell it to stop).
Use setInterval to log Hello Fresher Academy repeatedly after every 3 seconds

*/
setInterval(function(){
    console.log("Hello Fresher Academy");
},3000);

// clearInterval(action)   De xoa 1 action