const values = [69,96,1];
function sum(){
    var total = 0;
    for (const value of arguments) {
        total += value; // 0 + 3
    }
    return total;
}
// bconsole.log(sum(values[0],values[1],values[2]));
// console.log(sum(...values));

// ---  ... rest
// 1. parameter of function
// 2. destructuring

// --- spread -> tach array
// --- rest -> gom lai thanh array
function calculateGPA(math, listerature, ...rest){
    // console.log(arguments[0],arguments[1])
    // console.log(rest);
    return ( math*2 +listerature*2 +sum(...rest) ) / (rest.length + 4);
}
// console.log(calculateGPA(8,6,5,4,3));


// ----------Destrutring
const VietNamTeam = [
    "Alpha A",
    "Alpha B",
    "Alpha C",
    "Alpha D",
    "Alpha E",

]
const [coach, captain, ...players] = VietNamTeam;
coach;
