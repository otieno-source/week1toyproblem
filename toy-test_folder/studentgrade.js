//prompt user to input student marks using the prompt() method.
let marks = 12

let grade = function () {
  if (marks > 79 && marks <= 100) {
    console.log("A");
  } else {
    if (marks => 60 && marks <= 79) {
      console.log("B");
    } else {
      if (marks => 49 && marks <= 59) {
        console.log("C");
      } else {
        if (marks => 49 && marks <= 59) {
          console.log("D");
        } else {
          console.log("F");
        }
      }
    }
  }
}();

