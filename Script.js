let currentState = 0; // Initialize the current state

const questions = [
    // Path 1: The Mysterious Forest
    {
        question: "You find yourself at the edge of a dark, mysterious forest. Do you want to enter the forest or walk along the path?",
        answers: [
            { text: "Enter the forest", nextState: 1 },
            { text: "Walk along the path", nextState: 2 }
        ]
    },
    {
        question: "As you enter the forest, you hear strange sounds. Do you investigate the sounds or keep walking?",
        answers: [
            { text: "Investigate the sounds", nextState: 3 },
            { text: "Keep walking", nextState: 4 }
        ]
    },
    {
        question: "You walk along the path and find a small cottage. Do you knock on the door or continue walking?",
        answers: [
            { text: "Knock on the door", nextState: 5 },
            { text: "Continue walking", nextState: 6 }
        ]
    },
    
    // Path 2: The Hidden Cave
    {
        question: "You stumble upon a hidden cave. Do you enter the cave or walk away?",
        answers: [
            { text: "Enter the cave", nextState: 7 },
            { text: "Walk away", nextState: 8 }
        ]
    },
    {
        question: "Inside the cave, you find a treasure chest. Do you open the chest or leave it alone?",
        answers: [
            { text: "Open the chest", nextState: 9 },
            { text: "Leave it alone", nextState: 10 }
        ]
    },
    {
        question: "As you walk away, you hear a voice calling for help. Do you investigate the voice or ignore it?",
        answers: [
            { text: "Investigate the voice", nextState: 11 },
            { text: "Ignore it", nextState: 12 }
        ]
    },

    // Path 3: The Talking Animals
    {
        question: "You encounter a group of talking animals. Do you join their conversation or walk past them?",
        answers: [
            { text: "Join the conversation", nextState: 13 },
            { text: "Walk past them", nextState: 14 }
        ]
    },
    {
        question: "The animals invite you to a feast. Do you accept their invitation or decline?",
        answers: [
            { text: "Accept the invitation", nextState: 15 },
            { text: "Decline", nextState: 16 }
        ]
    },
    {
        question: "As you walk past, one of the animals follows you. Do you stop to talk or keep walking?",
        answers: [
            { text: "Stop to talk", nextState: 17 },
            { text: "Keep walking", nextState: 18 }
        ]
    },

    // Endings
    { question: "You found a magical artifact! Your adventure continues...", answers: [], isEnding: true },
    { question: "You found a hidden treasure! You're rich now!", answers: [], isEnding: true },
    { question: "You ignored the voice and missed a chance for adventure!", answers: [], isEnding: true },
    { question: "You left the cave with nothing but memories.", answers: [], isEnding: true },
    { question: "You joined the animals and became their friend!", answers: [], isEnding: true },
    { question: "You declined the invitation and missed a fun feast.", answers: [], isEnding: true },
    { question: "You talked to the animal and learned its secrets.", answers: [], isEnding: true },
    { question: "You walked away and missed an amazing adventure.", answers: [], isEnding: true }
];

function renderQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');

    // Clear previous answers
    answersElement.innerHTML = '';

    // Set the current question
    questionElement.innerText = questions[currentState].question;

    // Create answer buttons
    questions[currentState].answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.onclick = () => {
            currentState = answer.nextState; // Update the current state
            renderQuestion(); // Render the next question
        };
        answersElement.appendChild(button);
    });

    // Hide the next button if there are no answers or if it's an ending
    const nextButton = document.getElementById('next-btn');
    nextButton.style.display = questions[currentState].answers.length || !questions[currentState].isEnding ? 'none' : 'block';

    // If it's an ending, disable the next button
    if (questions[currentState].isEnding) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

// Function to handle the next question button (if needed)
function nextQuestion() {
    if (currentState < questions.length - 1 && !questions[currentState].isEnding) {
        currentState++; // Move to the next question
        renderQuestion(); // Render the next question
    }
}

// Initialize the game by rendering the first question
renderQuestion();