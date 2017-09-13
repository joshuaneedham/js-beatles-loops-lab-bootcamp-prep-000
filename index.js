function theBeatlesPlay(musicians, instruments) {
  var nameInstrument = [];  // Defines empty array
  for(var i = 0; i < musicians.length && i < instruments.length; i++) { // Iterates over each existing array musicians and instruments
    nameInstrument.push(musicians[i] + " plays " + instruments[i]); // Creates new array of musicians and instruments array indexes
    }
    return nameInstrument;
}

function johnLennonFacts(arg) {
     var arg2 = [];
     var i = 0;
     var len = arg.length;
     while (len--) {
         arg2 = arg[i++] + "!!!";
     }
     return arg2;
}
//
// function iLoveTheBeatles(n) {
//   var array = [];
//
// }
