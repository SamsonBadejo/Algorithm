function analyzeSentence(sentence) {
  let lengthCounter = 0;
  let wordCounter = 0;
  let vowelCounter = 0;
  const vowels = "aeiouAEIOU";
  let inWord = false;

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    lengthCounter++;

    if (vowels.includes(char)) {
      vowelCounter++;
    }

    if (char === " ") {
      if (inWord) {
        wordCounter++;
        inWord = false;
      }
    } else if (char === ".") {
      if (inWord) {
        wordCounter++;
      }
    } else {
      inWord = true;
    }
  }

  return {
    length: lengthCounter,
    words: wordCounter,
    vowels: vowelCounter,
  };
}

// Example usage
const sentence = "This is a simple sentence.";
const result = analyzeSentence(sentence);
console.log(`Length of the sentence: ${result.length}`);
console.log(`Number of words: ${result.words}`);
console.log(`Number of vowels: ${result.vowels}`);
