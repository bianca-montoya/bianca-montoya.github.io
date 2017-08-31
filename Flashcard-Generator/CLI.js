
// Import files with generated constructors
let BasicCard = require('./BasicCard');
let ClozeCard = require('./ClozeCard');


let questionBasic = BasicCard("Who was the first president of the United States?");

let questionCloze = ClozeCard("George Washington was the first president of the United States.", "George Washington");


// Basic

// "Who was the first president of the United States?"
console.log(questionBasic.front);

// "George Washington"
console.log(questionBasic.back);



// Cloze

// "George Washington"
console.log(questionCloze.cloze);

// " ... was the first president of the United States.
console.log(questionCloze.partial);

// "George Washington was the first president of the United States.
console.log(questionCloze.full);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
let brokenCloze = new ClozeCard("This doesn't work", "oops");