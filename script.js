// script.js

// Initialize vote counts for two candidates
let candidates = [
  { name: "Candidate 1 ", votes: 0 },
  { name: "Candidate 2 ", votes: 0 }
];
let countdownInterval;

// Show specific section based on main menu selection
function showSection(sectionId) {
  document.getElementById('electionSection').style.display = sectionId === 'election' ? 'block' : 'none';
  document.getElementById('timerSection').style.display = sectionId === 'timer' ? 'block' : 'none';
}

// Vote for a Candidate
function voteForCandidate(index) {
  candidates[index].votes += 1;
  updateAdminView();
}

// Display Vote Counts in Admin Section
function updateAdminView() {
  const adminVoteCount = document.getElementById('adminVoteCount');
  adminVoteCount.innerHTML = '';

  candidates.forEach(candidate => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${candidate.name}</strong> - Votes: ${candidate.votes}`;
    adminVoteCount.appendChild(listItem);
  });
}

// Timer Functionality
function startTimer() {
  const countdownDisplay = document.getElementById('countdownDisplay');
  let minutes = parseInt(document.getElementById('minuteInput').value) || 0;
  let seconds = parseInt(document.getElementById('secondInput').value) || 0;
  let timeLeft = minutes * 60 + seconds;

  if (timeLeft <= 0) {
    alert('Please enter a valid time.');
    return;
  }

  countdownDisplay.textContent = `Time Left: ${formatTime(timeLeft)}`;
  clearInterval(countdownInterval); // Clear previous interval if any

  countdownInterval = setInterval(() => {
    timeLeft -= 1;
    countdownDisplay.textContent = `Time Left: ${formatTime(timeLeft)}`;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      countdownDisplay.textContent = 'Time’s Up!';
    }
  }, 1000);
}

// Format time as MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Initial render o
