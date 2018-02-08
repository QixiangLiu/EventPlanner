// event.js
// THE NAME OF THE EVENT IS TAKEN AT CONSTRUCTION TIME
// VARIABLES INCLUDED ARE TITLE, MONTH, DAY, YEAR, TIME
// HAS A LINKED LIST

//  FUNCTION OF EVENT
// STRING VARIALBE:
//          TITLE
// INTEGER VARIABLES:
//          Date, Length
// IMPORTANT:
//          ALL HOURS ARE STORED IN 24 HOUR FORMAT FROM 0-23
function meeting (title, date, length) {
  this.title = title;
  this.date = date;
  this.len = length;
  this.list = new linkedlist();
}


// ADD ATTENDEE
// Takes in a first name and a last name
// creates a new attendee, and adds it to the list
meeting.prototype.add = function (lastName, firstName){

  var person = new attendee(lastName, firstName);
  this.list.add(person);
  return person;
}



// VALUE OF
// Allows for comparison of events by date.
meeting.prototype.valueOf = function () {
  return this.date;
}
