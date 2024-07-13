document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".rating i");
    const ratingInput = document.getElementById("rating");

    stars.forEach(star => {
        star.addEventListener("click", function() {
            const value = parseInt(this.getAttribute("data-value"));
            ratingInput.value = value;
            stars.forEach(s => s.classList.remove("active")); // active stars
            for (let i = 0; i < value; i++) {
                stars[i].classList.add("active");
            }
        });
    });

    const cancelButton = document.querySelector(".btn.cancel");
    cancelButton.addEventListener("click", function() {
        document.getElementById("feedbackForm").reset();  // reset page
        stars.forEach(s => s.classList.remove("active")); // Remove active 
    });

    const feedbackForm = document.getElementById("feedbackForm");
    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Form submitted!");
        this.reset();
        stars.forEach(s => s.classList.remove("active")); // Remove active 
    });
});