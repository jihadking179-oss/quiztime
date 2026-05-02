import { createActor } from "@/backend";
import type { Question, QuizResult } from "@/types/quiz";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Hardcoded questions since backend interface is not yet populated
const SAMPLE_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Which planet in our solar system is known for its prominent rings?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correctIndex: 1,
  },
  {
    id: 2,
    text: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctIndex: 2,
  },
  {
    id: 3,
    text: "Which country has the largest population in the world?",
    options: ["India", "United States", "Russia", "China"],
    correctIndex: 0,
  },
  {
    id: 4,
    text: "What year did the Berlin Wall fall?",
    options: ["1987", "1989", "1991", "1993"],
    correctIndex: 1,
  },
  {
    id: 5,
    text: "Who painted the Mona Lisa?",
    options: ["Michelangelo", "Raphael", "Caravaggio", "Leonardo da Vinci"],
    correctIndex: 3,
  },
  {
    id: 6,
    text: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Skin", "Lungs"],
    correctIndex: 2,
  },
  {
    id: 7,
    text: "Which element has the atomic number 1?",
    options: ["Helium", "Oxygen", "Carbon", "Hydrogen"],
    correctIndex: 3,
  },
  {
    id: 8,
    text: "In which year did the first iPhone launch?",
    options: ["2005", "2006", "2007", "2008"],
    correctIndex: 2,
  },
  {
    id: 9,
    text: "What is the capital city of Japan?",
    options: ["Osaka", "Kyoto", "Hiroshima", "Tokyo"],
    correctIndex: 3,
  },
  {
    id: 10,
    text: "Which programming language was created by Brendan Eich in 1995?",
    options: ["Python", "Java", "JavaScript", "Ruby"],
    correctIndex: 2,
  },
];

export function useGetQuestions() {
  const { actor, isFetching } = useActor(createActor);

  return useQuery<Question[]>({
    queryKey: ["questions"],
    queryFn: async () => {
      // Return hardcoded questions; swap with actor.getQuestions() when backend is ready
      if (actor && !isFetching) {
        return SAMPLE_QUESTIONS;
      }
      return SAMPLE_QUESTIONS;
    },
    enabled: true,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useSubmitAnswers() {
  useActor(createActor);
  const queryClient = useQueryClient();

  return useMutation<QuizResult, Error, { answers: number[] }>({
    mutationFn: async ({ answers }) => {
      // Calculate locally; swap with actor.submitAnswers when backend is ready
      const questions = SAMPLE_QUESTIONS;
      const correctCount = answers.reduce((acc, ans, idx) => {
        return acc + (ans === questions[idx]?.correctIndex ? 1 : 0);
      }, 0);
      const total = questions.length;
      const result: QuizResult = {
        totalQuestions: total,
        correctCount,
        incorrectCount: total - correctCount,
        score: Math.round((correctCount / total) * 100),
      };
      return result;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quizResult"] });
    },
  });
}
