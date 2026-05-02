import type { Question, QuizResult, QuizStatus } from "@/types/quiz";
import { create } from "zustand";

interface QuizStateStore {
  currentIndex: number;
  userAnswers: number[];
  status: QuizStatus;
  result: QuizResult | null;
  selectedAnswer: number | null;

  startQuiz: () => void;
  selectAnswer: (answerIndex: number) => void;
  nextQuestion: (questions: Question[]) => void;
  finishQuiz: (result: QuizResult) => void;
  restartQuiz: () => void;
}

export const useQuizStateStore = create<QuizStateStore>((set, get) => ({
  currentIndex: 0,
  userAnswers: [],
  status: "idle",
  result: null,
  selectedAnswer: null,

  startQuiz: () =>
    set({
      currentIndex: 0,
      userAnswers: [],
      selectedAnswer: null,
      result: null,
      status: "active",
    }),

  selectAnswer: (answerIndex) => set({ selectedAnswer: answerIndex }),

  nextQuestion: (questions: Question[]) => {
    const { selectedAnswer, userAnswers, currentIndex } = get();
    if (selectedAnswer === null) return;
    const newAnswers = [...userAnswers, selectedAnswer];
    if (currentIndex + 1 >= questions.length) {
      set({
        userAnswers: newAnswers,
        selectedAnswer: null,
        status: "finished",
      });
    } else {
      set({
        userAnswers: newAnswers,
        selectedAnswer: null,
        currentIndex: currentIndex + 1,
      });
    }
  },

  finishQuiz: (result: QuizResult) => set({ result }),

  restartQuiz: () =>
    set({
      currentIndex: 0,
      userAnswers: [],
      selectedAnswer: null,
      result: null,
      status: "idle",
    }),
}));

export type UseQuizStateReturn = QuizStateStore;
