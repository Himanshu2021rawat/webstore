function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || input == "hi" || input == "hi there") {
        return "Hi there! &#128400; What brought you here today?";
    } else if (input == "wants to know about your website") {
        return "If you want to know about our website you can go to about us section in navbar";
    } else {
        return "Sorry! I am still learning. &#128522; Can you please be more specific to your query?";
    }
}