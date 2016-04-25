var quiz [
  ["What's the capital of MO?", "JEFFERSON CITY"],
  ["What's the state's unofficial nickname", "SHOW ME STATE"],
  ["What's the state's animal?", "MULE"],
  ["What's the name of America's favorite sweet treat, which was first invented in MO?", "ICE CREAM CONE"],
  ["What is the best-known Missouri monument that also happens to hold a world record?", "GATEWAY ARCH"],
]

var i = 0;
var correct = 0;

function quizQA (answerInput) {
while (i < quiz.length) {
  var answerInput = prompt(quiz[i][0]);
  totalAsked += 1;
  if (answerInout.toUpperCase() == quiz[i[1]]) {
    correct += 1;
  }
  i++;
  }
]

document.write("<p>You got " + correct + " out of 5 questions correct.<p>");
