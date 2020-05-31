/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function () {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var j=0; j<names.length; j++) {
    var firstLetter = names[j].charAt(0).toLowerCase();
    if (firstLetter == 'j') {
      byeSpeaker.speak(names[j]);
    } else {
      helloSpeaker.speak(names[j]);
    }
  }
})();
