function quizResult() {

    const userName = prompt("Please enter your name:");

    const q1Answer = document.querySelector('input[name="q1"]:checked');
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    const q3Answer = document.querySelector('input[name="q3"]:checked');

    const correctAnswers = ['2', '3', '4'];

    let score = 0;
    if (q1Answer && q1Answer.value === correctAnswers[0]) score++;
    if (q2Answer && q2Answer.value === correctAnswers[1]) score++;
    if (q3Answer && q3Answer.value === correctAnswers[2]) score++;

    alert(`${userName}, your score is ${score} out of 3.`);
  }