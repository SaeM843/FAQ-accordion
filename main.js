// const questions = document.querySelectorAll(".question");
// const answer = document.querySelector(".hidden-answer");
// const icons = document.querySelectorAll(".plus-icons");
const questions = document.querySelectorAll("summary");
const summaryInner = document.querySelectorAll(".summary-inner");

function toggleIcon() {
  // console.log(this.nextElementSibling);
  // console.log(summary.parentElement);

  console.log(this.children[0].children[1]);
  if (this.parentElement.hasAttribute("open")) {
    this.children[0].children[1].src = "assets/images/icon-plus.svg";
  } else {
    this.children[0].children[1].src = "assets/images/icon-minus.svg";
  }
}

questions.forEach((question) => question.addEventListener("click", toggleIcon));
