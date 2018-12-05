//Challenges in the hashTables section
function checkMagazine(magazine, note) {
  let magazineArray = magazine.split(" ");
  let noteArray = note.split(" ");
  let arr = noteArray.filter(word => {
    if (magazineArray.includes(word)) {
      let index = magazineArray.indexOf(word);
      magazineArray.splice(index, 1);
      return false;
    }
    return true;
  })
  return arr.length > 0 ? "No" : "Yes";
}

function twoStrings(string1, string2) {
  const stringArray = "abcdefghijklmnopqrstuvwxyz".split('');
    let contains = false;
    for (let i = 0; i < stringArray.length; i++) {
        if (s1.indexOf(stringArray[i]) > -1 && s2.indexOf(stringArray[i]) > -1) {
            contains = true;
            break;
        };
    }
    return contains ? "YES" : "NO";
}