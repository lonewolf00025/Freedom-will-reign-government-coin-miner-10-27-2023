function showMessage(message) {
    var messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML = message;
    messageContainer.style.display = "block";
    
    // After 5 seconds, fade out the message
    setTimeout(function () {
        messageContainer.style.opacity = 0;
        setTimeout(function () {
            messageContainer.style.display = "none";
            messageContainer.style.opacity = 1;
        }, 500); // This delay should match the transition duration (0.5s)
    }, 5000); // 5000 milliseconds = 5 seconds
}

function checkLogin() {
    var enteredUsername = document.getElementById("loginUsername").value;
    var storedUsernames = JSON.parse(localStorage.getItem("gcu")) || [];//gcu = goverment coin username

    if (storedUsernames.includes(enteredUsername)) {
        // Set the current user in local storage
        localStorage.setItem("gccu", enteredUsername);//gccu = goverment coin current user

        // Redirect to the game if the username matches a stored username
        window.Location.href = "miners page/miners.html";
    } else {
        showMessage("Invalid username. Please try again.");
    }
}

function registerUser() {
    var usernameInput = document.getElementById("username");
    var username = usernameInput.value;

    // Check if the username input is not empty
    if (username.trim() !== "") {
        // Retrieve the list of stored usernames from local storage
        var storedUsernames = JSON.parse(localStorage.getItem("gcu")) || [];

        if (!storedUsernames.includes(username)) {
            // If the username is not already taken, add it to the list of stored usernames
            storedUsernames.push(username);
            localStorage.setItem("gcu", JSON.stringify(storedUsernames));

            // Redirect to the login tab
            setTimeout(function () {
                switchTab('login-tab');
            }, 5000);
        } else {
            showMessage("Username already taken please try again. 😊");
        }
    } else {
        showMessage("Please enter a valid username.");
    }
}

function deleteAccount() {
    var usernameToDelete = document.getElementById("deleteUsername").value;
    var storedUsernames = JSON.parse(localStorage.getItem("gcu")) || [];

    if (storedUsernames.includes(usernameToDelete)) {
        // Remove the username from the list of stored usernames
        var updatedUsernames = storedUsernames.filter(function (username) {
            return username !== usernameToDelete;
        });

        // Update the list of stored usernames in local storage
        localStorage.setItem("gcu", JSON.stringify(updatedUsernames));
        // Clear any other data related to the deleted account (you can add more code here)
        localStorage.setItem("gccu", []);
        showMessage("Account deleted successfully. We're sorry to see you go. 😔");
    } else {
        showMessage("Username not found. Please enter a valid username.");
    }
}
