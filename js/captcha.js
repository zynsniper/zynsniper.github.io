function checkCaptcha(event) {
    event.preventDefault();
    const answer = document.getElementById('captcha').value.trim().toLowerCase();
    if (answer === "chi") {
        document.getElementById('protected-email').style.display = 'block';
        document.getElementById('contact-form').style.display = 'none';
    } else {
        alert("Incorrect answer. Please try again.");
    }
    return false;
}