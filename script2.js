document.addEventListener("DOMContentLoaded", () => {
    let currentQuestion = 0;
    const questions = document.querySelectorAll(".question-container");
    const form = document.getElementById("quiz-form");
  
    // Show the first question
    questions[currentQuestion].classList.add("active");
  
    // Function to navigate to the next question
    window.nextQuestion = function () {
      if (currentQuestion < questions.length - 1) {
        questions[currentQuestion].classList.remove("active");
        currentQuestion++;
        questions[currentQuestion].classList.add("active");
      }
    };
  
    // Function to navigate to the previous question
    window.previousQuestion = function () {
      if (currentQuestion > 0) {
        questions[currentQuestion].classList.remove("active");
        currentQuestion--;
        questions[currentQuestion].classList.add("active");
      }
    };
  
    // Handle form submission
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Quiz submitted! Answers are being evaluated.");
    });
  });
  