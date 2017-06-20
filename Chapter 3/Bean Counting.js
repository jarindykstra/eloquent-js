function countBs(str) {
  var howMany = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === 'B') {
    howMany++
    }
  }
  return howMany;
}

console.log(countBs('CHbKBBBBQB'));

function countChar(str, chr) {
  var howMany = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === chr) {
    howMany++
    }
  }
  return howMany;
}

console.log(countChar('CHbKBBBBQB', 'H'));
