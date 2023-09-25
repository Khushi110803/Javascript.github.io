// Sample stories with placeholders for the name
const stories = [
    "Hey [name], you're a briliant student in the school",
    " Yesterday [name] woke up in the early morning and decided to [action].",
    "In a land far, I haven't seen [name].",
    "[name] and their friends went on the trip on their last summer vacation"
];

document.addEventListener("DOMContentLoaded", () => {
    const storyParagraph = document.getElementById("story");
    const customNameInput = document.getElementById("customName");
    const generateButton = document.getElementById("generateButton");

    // Function to replace [name] with a custom name or "Bob"
    const replaceName = (story, name) => {
        return story.replace(/\[name\]/g, name || "Bob");
    };

    // Function to generate a random story
    const generateRandomStory = () => {
        const randomIndex = Math.floor(Math.random() * stories.length);
        const randomStory = stories[randomIndex];
        const customName = customNameInput.value.trim();

        // Generate and display the story with the custom name (if provided)
        storyParagraph.textContent = replaceName(randomStory, customName);
    };

    // Event listener for the generate button
    generateButton.addEventListener("click", generateRandomStory);
});
