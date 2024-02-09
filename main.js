const questions = document.querySelectorAll(".question");
const answer = document.querySelector(".hidden-answer");

function showAnswers(e) {
  console.log(e.target);
  this.nextElementSibling.classList.toggle("active");
}

questions.forEach((question) =>
  question.addEventListener("click", showAnswers)
);
