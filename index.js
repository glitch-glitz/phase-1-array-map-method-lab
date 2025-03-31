const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map((title) =>
    title
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Keep original casing for the rest of the word
      .join(" ")
  );
};

// Export for testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = { titleCased };
}
