////////SORTING///////////////////
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];
console.log(2);
items.sort( (a,b) => {
    if(a.name < b.name) return -1;
    else if(a.name == b.name) return  0;
    else return 1;
    } 
);
console.log(3);
console.log(JSON.stringify(items));
//////////////FREEZE////////////////////////
const array  = [4, 9];
array[0] = 1;
console.log(array);
Object.freeze(array);
array[0]=0;
console.log(array);

////////////SETS/////////////////
lightBulbs = new Set(["incandescent", "compact fluorescent", "LED"]);

console.log(lightBulbs.has("LED"));  // true
console.log(lightBulbs.has("halogen"));  // f

//////FOR/////OF////////////////////
for (let char of "theString") {
console.log(char); //prints char one by one
}

//////FILL///////////
new Array(5).fill(0); //Creates new array with 5 elements, sets all index to 0 => (5) [0, 0, 0, 0, 0]

/////THROW ERROR//////
throw new Error('Getting a profit requires at least 2 prices');
///////


////SHUFFLE/RANDOM FUNCTIONS/////////
function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

//
