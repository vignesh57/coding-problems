class Change {
  constructor() {
    this.memo = {};
    this.loopCounter = 0;
  }
  
  changePossibilitiesTopDown(amountLeft, denominations, currentIndex = 0) {
    
    let asterisk = ""; 
    switch(currentIndex){
      case 1: asterisk += "------";
      case 2: asterisk += "------";
      case 3: asterisk += "------";
    }
    asterisk += ">";
     
    // Check our memo and short-circuit if we've already solved this one
    const memoKey = [amountLeft, currentIndex].join(', ');
    if (this.memo.hasOwnProperty(memoKey)) {
      console.log(asterisk,'grabbing memo [' + memoKey + ']');
      return this.memo[memoKey];
    }

    // Base cases:
    // We hit the amount spot on. yes!
    if (amountLeft === 0) {
      return 1;
      console.log(asterisk,'[',this.loopCounter,'] Returning [1].SpotOn ways to make ' + amountLeft + ' with [' + denominations.slice(currentIndex).join(', ') + ']');
    }  

    // We overshot the amount left (used too many coins)
    if (amountLeft < 0) {
      console.log(asterisk,'[',this.loopCounter,'] Returning [0].Overshot ways to make ' + amountLeft + ' with [' + denominations.slice(currentIndex).join(', ') + ']');
      return 0;
    }  

    // We're out of denominations
    if (currentIndex === denominations.length) {
      console.log(asterisk,'[',this.loopCounter,'] Returning [0].OutOfDenominations ways to make ' + amountLeft + ' with [' + denominations.slice(currentIndex).join(', ') + ']');
      return 0;
    }
    
  
    console.log(asterisk, '[',this.loopCounter,'] checking ways to make ' + amountLeft + ' with [' + denominations.slice(currentIndex).join(', ') + ']');

    // Choose a current coin
    const currentCoin = denominations[currentIndex];

    // See how many possibilities we can get
    // for each number of times to use currentCoin
    let numPossibilities = 0;
    while (amountLeft >= 0) {
      numPossibilities += this.changePossibilitiesTopDown(amountLeft, denominations, currentIndex + 1);
      amountLeft -= currentCoin;
    }
    this.loopCounter++;
    // Save the answer in our memo so we don't compute it again
    this.memo[memoKey] = numPossibilities;
    console.log(asterisk,'[',this.loopCounter,'] Returning, ', numPossibilities);
    return numPossibilities;
  }
}


console.log( new Change().changePossibilitiesTopDown(4, [1, 2, 3]) );







/*

// Tests

let desc = 'sample input';
let actual = changePossibilities(4, [1, 2, 3]);
let expected = 4;
assertEqual(actual, expected, desc);

desc = 'one way to make zero cents';
actual = changePossibilities(0, [1, 2]);
expected = 1;
assertEqual(actual, expected, desc);

desc = 'no ways if no coins';
actual = changePossibilities(1, []);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'big coin value';
actual = changePossibilities(5, [25, 50]);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'big target amount';
actual = changePossibilities(50, [5, 10]);
expected = 6;
assertEqual(actual, expected, desc);

desc = 'change for one dollar';
actual = changePossibilities(100, [1, 5, 10, 25, 50]);
expected = 292;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}
*/
