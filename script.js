function checkPassword() {
    const password = document.getElementById("password").value;
    const resultsDiv = document.getElementById("results");

    // Initialize score and feedback list
    let score = 0;
    const feedback = [];

    // Check length
    if (password.length < 14) {
        feedback.push("Password should be at least 14 characters long.");
    } else {
        score += 2;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        score += 2;
    } else {
        feedback.push("Add lowercase letters to improve strength.");
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        score += 2;
    } else {
        feedback.push("Add uppercase letters to improve strength.");
    }

    // Check for digits
    if (/\d/.test(password)) {
        score += 2;
    } else {
        feedback.push("Add digits to improve strength.");
    }

    // Check for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        score += 2;
    } else {
        feedback.push("Add special characters (e.g., !@#$) to improve strength.");
    }

    // Provide overall feedback based on score
    let overallFeedback = "";

    if (score <= 7) {
        overallFeedback = "Weak password.";
        color = "red";
    } else if (score === 8) {
        overallFeedback = "Moderate password.";
        color = "orange";
    } else if (score === 9) {
        overallFeedback = "Strong password.";
        color = "green";
    } else if (score === 10) {
        overallFeedback = "Very strong password!";
        color = "blue";
    }

   // Visual representation of strength as a progress bar
   const progressBarLength = 10;
   const filledLength = Math.floor(progressBarLength * (score / 10));
   const bar = '█'.repeat(filledLength) + '-'.repeat(progressBarLength - filledLength);

   // Display results
   document.getElementById("score").innerText = `Score: ${score} / 10`;
   document.getElementById("visualStrength").innerText = `Visual Strength: ${bar}`;
   document.getElementById("overallFeedback").innerText = overallFeedback;

   // Clear previous feedback
   const feedbackList = document.getElementById("feedback");
   feedbackList.innerHTML = "";
   feedback.forEach(item => {
       const li = document.createElement("li");
       li.textContent = item;
       feedbackList.appendChild(li);
   });

   resultsDiv.classList.remove("hidden");
}
