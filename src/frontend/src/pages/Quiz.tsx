import { Button } from "@/components/ui/button";
import { useGetQuestions, useSubmitAnswers } from "@/hooks/useQuiz";
import { useQuizStateStore } from "@/hooks/useQuizStateStore";
import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";

export default function Quiz() {
  const navigate = useNavigate();
  const { data: questions = [], isLoading } = useGetQuestions();
  const { mutate: submitAnswers } = useSubmitAnswers();

  const {
    currentIndex,
    status,
    selectedAnswer,
    userAnswers,
    selectAnswer,
    nextQuestion,
    finishQuiz,
  } = useQuizStateStore();

  // Guard: redirect if not active
  useEffect(() => {
    if (status === "idle") {
      navigate({ to: "/" });
    }
  }, [status, navigate]);

  // When status transitions to finished, submit and navigate
  useEffect(() => {
    if (status === "finished" && questions.length > 0) {
      submitAnswers(
        { answers: userAnswers },
        {
          onSuccess: (result) => {
            finishQuiz(result);
            navigate({ to: "/result" });
          },
        },
      );
    }
  }, [
    status,
    questions.length,
    submitAnswers,
    userAnswers,
    finishQuiz,
    navigate,
  ]);

  if (isLoading || questions.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-muted-foreground font-body animate-pulse">
          Loading questions…
        </div>
      </div>
    );
  }

  const question = questions[currentIndex];
  const total = questions.length;
  const progressPercent = (currentIndex / total) * 100;
  const isLast = currentIndex === total - 1;

  const handleNext = () => {
    nextQuestion(questions);
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6 bg-background">
      <div className="w-full max-w-sm" data-ocid="quiz.card">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-card rounded-2xl shadow-elevated border border-border p-7 flex flex-col gap-6"
          >
            {/* Progress */}
            <div className="flex flex-col gap-1.5">
              <span
                className="text-xs text-muted-foreground font-body"
                data-ocid="quiz.progress_label"
              >
                Question {currentIndex + 1}/{total}
              </span>
              <div className="progress-track">
                <div
                  className="progress-bar"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h2
              className="font-display text-2xl font-semibold text-foreground leading-snug"
              data-ocid="quiz.question_text"
            >
              {question.text}
            </h2>

            {/* Options */}
            <div
              className="flex flex-col gap-2.5"
              data-ocid="quiz.options_list"
            >
              {question.options.map((option, idx) => (
                <button
                  key={option}
                  type="button"
                  className={`quiz-option-btn${selectedAnswer === idx ? " selected" : ""}`}
                  onClick={() => selectAnswer(idx)}
                  data-ocid={`quiz.option.${idx + 1}`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Next / Finish */}
            <Button
              type="button"
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="button-primary w-full text-base py-3 h-auto rounded-xl disabled:opacity-40"
              data-ocid="quiz.next_button"
            >
              {isLast ? "Finish Quiz" : "Next Question"}
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
