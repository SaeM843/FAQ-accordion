const questions = document.querySelectorAll(".question");
const answer = document.querySelector(".hidden-answer");
const icons = document.querySelectorAll(".plus-icons");

function showAnswers(e) {
  console.log(this.children[0].src);
  //console.log(this.nextElementSibling);
  this.nextElementSibling.classList.toggle("active");

  if (this.nextElementSibling.classList.contains("active")) {
    this.children[0].src = "./assets/images/icon-minus.svg";
  } else {
    this.children[0].src = "./assets/images/icon-plus.svg";
  }
}

questions.forEach((question) =>
  question.addEventListener("click", showAnswers)
);
