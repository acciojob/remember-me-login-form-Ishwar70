//your JS code here. If required.
window.onload = function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const checkbox = document.getElementById("checkbox");
    const submitBtn = document.getElementById("submit");
    const existingBtn = document.getElementById("existing");

    // Check if credentials are stored
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        existingBtn.style.display = "inline-block";
    }

    // Submit form handler
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page reload
        const username = usernameInput.value;
        const password = passwordInput.value;

        alert(`Logged in as ${username}`);

        if (checkbox.checked) {
            // Save credentials
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            existingBtn.style.display = "inline-block";
        } else {
            // Remove credentials if checkbox not checked
            localStorage.removeItem("username");
            localStorage.removeItem("password");
            existingBtn.style.display = "none";
        }

        // Optionally, clear inputs
        usernameInput.value = "";
        passwordInput.value = "";
        checkbox.checked = false;
    });

    // Existing user login handler
    existingBtn.addEventListener("click", function () {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            alert(`Logged in as ${storedUsername}`);
        }
    });
};
