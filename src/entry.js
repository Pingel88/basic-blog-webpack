export default function Entry(title, body) {
  this.date = new Date();
  this.title = title;
  this.body = body;
}

Entry.prototype.makeDatePretty = function() {
  let prettyDate = '';
  const today = this.date;
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  prettyDate += daysOfWeek[today.getDay()] + ", " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear(); 
  return prettyDate;
};