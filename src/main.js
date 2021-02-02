import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry } from './entry.js';
import Journal from './journal.js';

const newJournal = new Journal();

$('form').submit(function(event) {
  event.preventDefault();
  const newTitle = $('input#user-title').val();
  const newText = $("textarea").val();
  const newEntry = new Entry(newTitle, newText);
  newJournal.addEntry(newEntry);
  let htmlEntry = `<li class="entry-title">${newEntry.title}</li>`;
  htmlEntry += `<li id="${newEntry.id}" class="time-stamp">${newEntry.makeDatePretty()}</li>`;
  htmlEntry += `<li class="lot-o-text">${newEntry.body}</li>`;
  htmlEntry += `<li class="counter">Words: ${newEntry.countWords()}</li>`;
  htmlEntry += `<li class="counter">Consonants: ${newEntry.countConsonants()}</li>`;
  htmlEntry += `<li class="counter">Vowels: ${newEntry.countVowels()}</li>`;
  $("ul.all-entries").prepend(htmlEntry);
});