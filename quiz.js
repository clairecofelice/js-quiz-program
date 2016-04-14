var correct = 0; //initial score

var a1 = prompt("What is the capital of Missouri?");
if ( a1.toUpperCase() === 'JEFFERSON CITY' ) {
 correct += 1;
 document.write("<p>That's right! The capital of Missouri is Jefferson City. </p>");
}
else {
  document.write("<p>Sorry, that's incorrect. The capital of Missouri is Jefferson City.</p>");
}

var a2 = prompt("What is the state's unofficial nickname?");
if ( a2.toUpperCase() === 'SHOW ME STATE' ) {
 correct += 1;
 document.write("<p>That's right! Missouri's unofficial nickname is the Show Me State, which appears on its license plates. </p>");
}
else {
  document.write("<p>Sorry, that's incorrect. Missouri's unofficial nickname is the Show Me State, which appears on its license plates.</p>");
}

var a3 = prompt("What is the state's animal?");
if ( a3.toUpperCase() === 'MULE' ) {
 correct += 1;
 document.write("<p>That's right! Missouri's state animal is the mule. </p>");
}
else {
  document.write("<p>Sorry, that's incorrect. Missouri's state animal is the mule.</p>");
}

var a4 = prompt("What is the name of America's favorite sweet treat, which was first invented in Missouri?");
if ( a4.toUpperCase() === 'ICE CREAM CONE' ) {
 correct += 1;
}
document.write("<p>That's right! The ice cream cone was invented in Missouri at the St. Louis World's Fair in 1904.</p>");
}
else {
 document.write("<p>Sorry, that's incorrect. The ice cream cone was invented in Missouri at the St. Louis World's Fair in 1904.</p>");
}

var a5 = prompt("What is the best-known Missouri monument that also happens to hold a world record? ");
if ( a5.toUpperCase() === 'JAVASCRIPT' ) {
 correct += 1;
}
document.write("<p>That's right! The Gateway Arch in St. Louis currently holds the record of being the world's tallest arch.</p>");
}
else {
 document.write("<p>Sorry, that's incorrect. The Gateway Arch in St. Louis currently holds the record of being the world's tallest arch.</p>");
}



// output results
document.write("<p>You got " + correct + " out of 5 questions correct.<p>");

// output rank
if ( correct === 5 ) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if (correct > 3) {
  document.write("<p><strong>You earned a silver crown.</strong></p>");
} else if (correct > 2) {
  document.write("<p><strong>You earned a bronze crown.</strong></p>");
} else {
  document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}
