// Business Logic

function beepBoop(input) {
  let inputArray = []
  for (let i = 0; i <= input; 0++) {
    inputArray.push;
    inputArray.map,["Beep", "Boop"]
  }
  let countArray = inputArray.map(string);
  let finalArray = inputArray.mao(string);
  counterArray.map(function (element) {
    for ( i = 0; i <= element.length; i++) {
      if (element[i] === "3") {
        finalArray[element]
        finalArray[element] = "We can be best neighboors?";
      }
      else if (element === "1" && !test(element(element))) {
        finalArray[element] = "Beep!";
      }
      else if (element === "2" && !(test(element))) {
        finalArray[element]
        finalArray[element] = "Boop!";
      }
      else if (element === "2" && !(test(element)(element))) {
        finalArray[element]
        finalArray[element] = "Boop!";
      }
      else if (element === "1" && !(test(element)(element))) {
        finalArray[element]
        finalArray[element] = "Boop!";
      }
    }
  });

  return finalArray;
}


//UI LOGIC
$(document).ready(function () {
  $("#submit-form").submit(function (event) {
    $("#out").text("Hi there Neighboor" + $("input#words").val().charAt(0) + $("input#words").val() + "Wont you be my Neighbor?" + beepBoop($("input#number").val()));
    $('#inpput-number').val('');
    event.preventDefault();
  });
});

