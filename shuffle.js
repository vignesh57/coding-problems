shuffle.js
https://www.interviewcake.com/question/javascript/shuffle?course=fc1&section=greedy
function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(array) {

  // If it's 1 or 0 items, just return
  if (array.length <= 1) return;

  // Walk through from beginning to end
  for (let indexWeAreChoosingFor = 0;
    indexWeAreChoosingFor < array.length - 1; indexWeAreChoosingFor++) {

    // Choose a random not-yet-placed item to place there
    // (could also be the item currently in that spot)
    // must be an item AFTER the current item, because the stuff
    // before has all already been placed
    const randomChoiceIndex = getRandom(indexWeAreChoosingFor, array.length - 1);

    // Place our random choice in the spot by swapping
    if (randomChoiceIndex !== indexWeAreChoosingFor) {
      const valueAtIndexWeChoseFor = array[indexWeAreChoosingFor];
      array[indexWeAreChoosingFor] = array[randomChoiceIndex];
      array[randomChoiceIndex] = valueAtIndexWeChoseFor;
    }
  }
}