// const questions = document.querySelectorAll(".question");
// const answer = document.querySelector(".hidden-answer");
// const icons = document.querySelectorAll(".plus-icons");
const questions = document.querySelectorAll("summary");

// function showAnswers(e) {
//   console.log(this.children[0].src);
//   //console.log(this.nextElementSibling);
//   this.nextElementSibling.classList.toggle("active");

//   if (this.nextElementSibling.classList.contains("active")) {
//     this.children[0].src = "./assets/images/icon-minus.svg";
//   } else {
//     this.children[0].src = "./assets/images/icon-plus.svg";
//   }
// }

function toggleIcon() {
  // console.log(this.nextElementSibling);
  // console.log(summary.parentElement);

  console.log(this);
  if (this.parentElement.hasAttribute("open")) {
    this.children[1].src = "assets/images/icon-plus.svg";
  } else {
    this.children[1].src = "assets/images/icon-minus.svg";
  }
}

questions.forEach((question) => question.addEventListener("click", toggleIcon));
