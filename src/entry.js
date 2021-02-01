function Entry(title, body) {
  this.date = new Date();
  this.title = title;
  this.body = body;
}

Entry.prototype.makeDatePretty = function() {
  const today = this.date;
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const prettyDate = daysOfWeek[today.getDay()] + ", " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear(); 
  return prettyDate;
};

Entry.prototype.countWords = function() {
  const wordTotal = this.body.split(' ').length;
  return wordTotal;
};

Entry.prototype.countVowels = function() {
  const vowels = ["a", "e", "i", "o", "u"];
  const allChars = this.body.toLowerCase().split('');
  let vowelTotal = 0;
  for (const char of allChars) {
    if (vowels.includes(char)) {
      vowelTotal++;
    }
  }
  return vowelTotal;
};

Entry.prototype.countConsonants = function() {
  const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  const allChars = this.body.toLowerCase().split('');
  let consonantTotal = 0;
  allChars.forEach(function(element) {
    if (consonants.includes(element)) {
      consonantTotal++;
    }
  });
  return consonantTotal;
};

Entry.prototype.getTeaser = function() {
  const allWords = this.body.split(" ");
  const firstWords = allWords.slice(0, 8).join(" ");
  const firstChars = firstWords.split("");
  for (let index = 0; index < firstChars.length; index++) {
    if (firstChars[index] === "." || firstChars[index] === "?" || firstChars[index] === "!") {
      const firstSentence = firstChars.slice(0, index + 1).join("");
      return firstSentence;
    } 
  }
  return firstWords;
};

// Describe: Entry.prototype.getTeaser()
// Test: "It will return the first 8 words of a journal entry."
// Code: let todayEntry = new Entry("Title Is...", "This sentence is going to be more than eight words.");
// Expect: (todayEntry.getTeaser()).toEqual("This sentence is going to be more than")

// Test: "It will return the first sentence or the first 8 words if sentence is longer than 8 words."
// Code: let todayEntry = new Entry("Title Is...", "This is a shorter sentence. This is another sentence.");
// Expect: (todayEntry.getTeaser()).toEqual("This is a shorter sentence.")