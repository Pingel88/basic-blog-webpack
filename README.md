# _Journal Project_

#### _let's you write and enter a blog post_

#### By _**Michael Pingel and Tyler Sinks**_

## Specs
```
Describe: Entry()
Test: "It should create an entry object"
Code: todayJournal = new Entry("Store Trip", "Today, I went to the store") 
Expect: (todayJournal).toEqual({title: "Store Trip", body: "Today, I went to the store"})

Describe: Entry.prototype.makeDatePretty()
Test: "It should modify the date value to a pretty format"
Code: todayJournal = new Entry("Store Trip", "Today, I went to the store")
Expect: (todayJournal.makeDatePretty()).toEqual("Monday, 1 February 2021")

Describe: Journal()
Test: "It should create a journal object"
Expect: (new Journal()).toEqual({entries: {}, currentId: 0})
```


## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

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