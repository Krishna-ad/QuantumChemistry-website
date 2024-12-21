document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("quiz-form");
    const resultsContainer = document.getElementById("results");
    const scoreDisplay = document.getElementById("score");
    const timerDisplay = document.getElementById("time");
  
    let timeRemaining = 60;
  
    // Correct answers
    const correctAnswers = {
      q1: "a",
      q2: "c",
      q3: "a",
      q4: "a",
      q5: "d",
    };
  
    // Timer
    const timer = setInterval(() => {
      timeRemaining--;
      timerDisplay.textContent = timeRemaining;
  
      if (timeRemaining <= 0) {
        clearInterval(timer);
        submitQuiz();
      }
    }, 1000);
  
    // Submit quiz
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitQuiz();
    });
  
    function submitQuiz() {
      clearInterval(timer);
      let score = 0;
      const formData = new FormData(form);
  
      for (const [question, answer] of formData.entries()) {
        if (correctAnswers[question] === answer) {
          score++;
        }
      }
  
      form.style.display = "none";
      resultsContainer.style.display = "block";
      scoreDisplay.textContent = `You scored ${score} out of ${Object.keys(correctAnswers).length}!`;
    }
  });
  