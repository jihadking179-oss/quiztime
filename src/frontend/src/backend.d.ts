import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type QuestionId = bigint;
export interface QuizResult {
    score: bigint;
    totalQuestions: bigint;
    incorrectCount: bigint;
    correctCount: bigint;
}
export interface Question {
    id: QuestionId;
    correctIndex: bigint;
    text: string;
    options: Array<string>;
}
export interface AnswerSubmission {
    answers: Array<bigint>;
}
export interface backendInterface {
    getQuestions(): Promise<Array<Question>>;
    submitAnswers(submission: AnswerSubmission): Promise<QuizResult>;
}
