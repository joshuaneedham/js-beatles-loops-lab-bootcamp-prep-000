function theBeatlesPlay(musicians, instruments) {
  var plays = [];
  for(var i = 0; musicians.length > i; i++) {
    plays.push(musicians[i] + " plays " + instruments[i]);
  }
  return plays;
}

function johnLennonFacts(arg) {
  var newFacts = [];
  var len = arg.length;
  var i = 0;
  while(i < len) {
  newFacts.push(arg[i] + "!!!");
  i++;
}
  return newFacts;
}
