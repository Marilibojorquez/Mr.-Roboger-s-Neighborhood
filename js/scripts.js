// Business Logic

function beepBoop(input) {
  let inputArray = []
  for (var i = 0; i <= input; i++) {
    inputArray.push(i);
  }
  let countArray = inputArray.map(string);
  let finalArray = inputArray.mao(string);
  counterArray.map(function (element) {
    for ( i = 0; i <= element.length; i++) {
      if (element[i] === "3") {
        finalArray[element]
        finalArray[element] = "We can be best neighboors?";
      }
      else if (element[i] === "1" && !(/[2]/g.test(element)) && !(/[3]/g.test(element))) {
        finalArray[element] = "Beep!";
      }
      else if (element[i] === "2" && !(/[3]/g.test(element))) {
        finalArray[element]
        finalArray[element] = "Boop!";
      }
      else if (element[i] === "2" && (/[2]/g.test(element)) && !(/[3]/g.test(element))) {
        finalArray[element]
        finalArray[element] = "Boop!";
      }
      else { ' ' }
      finalArray[element]
    }
  });

  return finalArray;
}


//UI LOGIC
$(document).ready(function () {
  $("#submit-form").submit(function (event) {
    $("#out").empty();
    $("#out").text("Hi there" + $("input#words").val().charAt(0).toUpperCase() + $("input#words").val().slice(1) + "Can you see what's happening?" + beepBoop($("input#number").val()));
    $('#inpput-number').val('');
    event.preventDefault();
  });
});

