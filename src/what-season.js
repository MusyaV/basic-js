const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // if (
  //   date == "foo" ||
  //   date == { John: "Smith" } ||
  //   date == 20192701 ||
  //   date == [2019, "27", 0 + "1"] ||
  //   date == new Date() ||
  //   date == 'deeperFakeDate' 
  // ) {
  //   return "Invalid date!";
  // }
  if (typeof date == "undefined") {
    console.log("date null");
    return "Unable to determine the time of year!";
  } 
  if (typeof date == "object") {
     let letter = date.toString()[4] + date.toString()[5];
    if (letter == "Ma" || letter == "Ap") {
      console.log("spring");
      return "spring";
    }
    if (letter == "Ju" || letter == "Au") {
      console.log("summer");
      return "summer";
    }
    if (letter == "Se" || letter == "Oc" || letter == "No") {
      console.log("/autumn|fall/");
      return "/autumn|fall/";
    }
    if (letter == "De" || letter == "Ja" || letter == "Fe") {
      console.log("winter");
      return "winter";
    }
    return letter;
  }else{
        console.log("date est");

    return new Error("Invalid date!");
  }
   

  }


module.exports = {
  getSeason,
};
