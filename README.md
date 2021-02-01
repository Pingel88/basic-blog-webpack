# _Journal Project_

#### _let's you write and enter a blog post_

#### By _**Michael Pingel and Tyler Sinks**_

## Specs
```
Describe: Entry()
Test: "It should create an entry object."
Code: todayEntry = new Entry("Store Trip", "Today, I went to the store");
Expect: (todayEntry).toEqual({title: "Store Trip", body: "Today, I went to the store"})

Describe: Entry.prototype.makeDatePretty()
Test: "It should modify the date value to a pretty format."
Code: todayEntry = new Entry("Store Trip", "Today, I went to the store");
Expect: (todayEntry.makeDatePretty()).toEqual("Monday, 1 February 2021")

Describe: Journal()
Test: "It should create a journal object."
Expect: (new Journal()).toEqual({entries: {}, currentId: 0})

Describe: Journal.prototype.assignId()
Test: "It should modify the value of the currentId key."
Code: newJournal = new Journal(); newJournal.assignId();
Expect: (newJournal.currentId).toEqual(1)

Describe: Journal.prototype.addEntry()
Test: "It should add an entry instance to journal instance key 'entries'."
Code: const newJournal = new Journal(); let todayEntry = new Entry(); newJournal.addEntry(todayEntry);
Expect: (newJournal.entries).toEqual({'1': Entry {date: 2021-02-01T19:56:34.139Z, title: undefined, body: undefined, id: 1}})

Describe: Entry.prototype.countWords()
Test: "It will return a number that equals the number of words in the body of an entry."
Code: let todayEntry = new Entry("Title Here", "Count my words");
Expect: (todayEntry.countWords()).toEqual(3)

Describe: Entry.prototype.countVowels()
Test: "It will return a number equaling the number of vowels in the body of an entry."
Code: let todayEntry = new Entry("Title Is...", "Here be some LETTERS");
Expect: (todayEntry.countVowels()).toEqual(7)

Describe: Entry.prototype.countConsonants()
Test: "It will return a number equaling the number of consonants in the body of an entry."
Code: let todayEntry = new Entry("Title Is...", "Here be some LETTERS");
Expect: (todayEntry.countVowels()).toEqual(10)

Describe: Entry.prototype.getTeaser()
Test: "It will return the first 8 words of a journal entry."
Code: let todayEntry = new Entry("Title Is...", "This sentence is going to be more than eight words.");
Expect: (todayEntry.getTeaser()).toEqual("This sentence is going to be more than")

Test: "It will return the first sentence or the first 8 words if sentence is longer than 8 words."
Code: let todayEntry = new Entry("Title Is...", "This is a shorter sentence. This is another sentence.");
Expect: (todayEntry.getTeaser()).toEqual("This is a shorter sentence.")
```

## Technologies Used

* _html, CSS, JavaScript_
* _node, npm, webpack, ESLint_
* _VS Code_
* _git, GitHub_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_MIT 2.0_

## Contact Information

_{Add your contact information here.}_