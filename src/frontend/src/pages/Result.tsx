import { Button } from "@/components/ui/button";
import { useQuizStateStore } from "@/hooks/useQuizStateStore";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function Result() {
  const navigate = useNavigate();
  const { result, status, restartQuiz } = useQuizStateStore();

  // Guard: redirect if no result
  useEffect(() => {
    if (status === "idle" || !result) {
      navigate({ to: "/" });
    }
  }, [status, result, navigate]);

  if (!result) return null;

  const scoreLabel =
    result.score >= 80
      ? "Excellent!"
      : result.score >= 60
        ? "Well Done!"
        : result.score >= 40
          ? "Good Try!"
          : "Keep Practicing!";

  const handleRestart = () => {
    restartQuiz();
    navigate({ to: "/" });
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6 bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full max-w-sm"
        data-ocid="result.card"
      >
        <div className="bg-card rounded-2xl shadow-elevated border border-border p-8 flex flex-col items-center gap-6 text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl font-semibold text-foreground"
            data-ocid="result.headline"
          >
            {scoreLabel}
          </motion.h2>

          {/* Score */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex flex-col items-center"
          >
            <span
              className="font-display text-6xl font-bold text-foreground"
              data-ocid="result.score"
            >
              {result.correctCount}/{result.totalQuestions}
            </span>
            <span className="text-sm text-muted-foreground font-body mt-1">
              {result.score}% score
            </span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="w-full bg-muted/30 rounded-xl border border-border px-5 py-4 flex flex-col gap-2"
            data-ocid="result.stats_panel"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block" />
                <span className="text-sm font-body text-foreground">
                  Correct:
                </span>
              </div>
              <span
                className="text-sm font-semibold font-body text-foreground"
                data-ocid="result.correct_count"
              >
                {result.correctCount}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive inline-block" />
                <span className="text-sm font-body text-foreground">
                  Incorrect:
                </span>
              </div>
              <span
                className="text-sm font-semibold font-body text-foreground"
                data-ocid="result.incorrect_count"
              >
                {result.incorrectCount}
              </span>
            </div>
          </motion.div>

          {/* Restart */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full"
          >
            <Button
              type="button"
              onClick={handleRestart}
              className="button-primary w-full text-base py-3 h-auto rounded-xl"
              data-ocid="result.restart_button"
            >
              Restart Quiz
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
