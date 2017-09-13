function theBeatlesPlay(musicians, instruments) {
  var plays = [];
  for(i = 0; musicians.length < 0 && instruments.length < 0; i++) {
    plays.push(musicians + ' plays ' + instruments);
  }
}
function johnLennonFacts(arg) {
  var newFacts = [];
  var len = arg.length;
  while(len--) {
  newFacts.push(arg[len] + "!!!");
  arg++;
}
  return newFacts;
}
