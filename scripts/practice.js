// List of questions: each with full prescription and correct SigCode answer
const questions = [
  {
    fullText: "Insert 1 applicator vaginally four times daily",
    answer: "IR 1 APL PV QID"
  },
  {
    fullText: "Take 1 tablet by mouth twice daily",
    answer: "IR 1 TAB PO BID"
  },
  {
    fullText: "Inject 10 units subcutaneously before breakfast",
    answer: "U 10 UNITS SQ QAM"
  },
  {
    fullText: "Apply ointment to affected area three times daily",
    answer: "APPL OINT QID"
  },
  {
    fullText: "Inhale 2 puffs every 4 hours as needed",
    answer: "INH 2 PU Q4H PRN"
  }
];

let currentQuestionIndex = 0;

const questionDiv = document.getElementById('questionDisplay');
const answerInput = document.getElementById('answerInput');
const feedbackDiv = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');

// Function to load the current question
function loadQuestion() {
  feedbackDiv.textContent = "";
  answerInput.value = "";
  nextBtn.style.display = "none";
  const q = questions[currentQuestionIndex];
  questionDiv.textContent = q.fullText;
  answerInput.focus();
}

// Check user's input in real-time
answerInput.addEventListener('input', () => {
  const userAnswer = answerInput.value.trim().toUpperCase();
  const correctAnswer = questions[currentQuestionIndex].answer.toUpperCase();

  if (userAnswer === correctAnswer) {
    feedbackDiv.textContent = "Correct! Well done.";
    nextBtn.style.display = "inline-block";
  } else if (correctAnswer.startsWith(userAnswer)) {
    feedbackDiv.textContent = "Keep going...";
  } else {
    feedbackDiv.textContent = "Incorrect, try again.";
  }
});

// Move to next question
nextBtn.addEventListener('click', () => {
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  loadQuestion();
});

// Initialize first question
window.onload = loadQuestion;