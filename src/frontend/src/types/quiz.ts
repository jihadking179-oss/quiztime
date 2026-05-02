export interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
}

export type QuizStatus = "idle" | "active" | "finished";

export interface QuizState {
  questions: Question[];
  currentIndex: number;
  userAnswers: number[];
  status: QuizStatus;
}

export interface QuizResult {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  score: number;
}
