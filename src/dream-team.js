const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members == null) {
    return false;
  } else {
    let names = "";
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == "string") {
        names += members[i].trim()[0].toUpperCase();
        // console.log(members[i]);
      }
      console.log(members.length);
    }
    // console.log(names.split('').sort().join(''))
    return names.split("").sort().join("");
  }
}

module.exports = {
  createDreamTeam
};
