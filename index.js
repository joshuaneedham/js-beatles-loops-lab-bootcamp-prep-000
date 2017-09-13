function theBeatlesPlay(musicians, instruments) {
  var plays = [];
  for(var i = 1; musicians.length > i; i++) {
    plays.push([musicians + " plays " + instruments]);
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
