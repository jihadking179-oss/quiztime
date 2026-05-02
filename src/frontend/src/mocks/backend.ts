import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  getQuestions: async () => [
    {
      id: BigInt(1),
      text: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctIndex: BigInt(2),
    },
    {
      id: BigInt(2),
      text: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctIndex: BigInt(1),
    },
    {
      id: BigInt(3),
      text: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctIndex: BigInt(3),
    },
    {
      id: BigInt(4),
      text: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
      correctIndex: BigInt(2),
    },
    {
      id: BigInt(5),
      text: "What is the chemical symbol for water?",
      options: ["O2", "H2O", "CO2", "NaCl"],
      correctIndex: BigInt(1),
    },
    {
      id: BigInt(6),
      text: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      correctIndex: BigInt(2),
    },
    {
      id: BigInt(7),
      text: "What is the fastest land animal?",
      options: ["Lion", "Horse", "Cheetah", "Greyhound"],
      correctIndex: BigInt(2),
    },
    {
      id: BigInt(8),
      text: "In which year did World War II end?",
      options: ["1943", "1944", "1945", "1946"],
      correctIndex: BigInt(2),
    },
    {
      id: BigInt(9),
      text: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      correctIndex: BigInt(2),
    },
    {
      id: BigInt(10),
      text: "Which element has the atomic number 1?",
      options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
      correctIndex: BigInt(1),
    },
  ],
  submitAnswers: async (_submission) => ({
    score: BigInt(7),
    totalQuestions: BigInt(10),
    correctCount: BigInt(7),
    incorrectCount: BigInt(3),
  }),
};
