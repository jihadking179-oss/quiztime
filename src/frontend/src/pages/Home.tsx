import { Button } from "@/components/ui/button";
import { useGetQuestions } from "@/hooks/useQuiz";
import { useQuizStateStore } from "@/hooks/useQuizStateStore";
import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";

export default function Home() {
  const navigate = useNavigate();
  const { data: questions, isLoading } = useGetQuestions();
  const { startQuiz } = useQuizStateStore();

  const handleStart = () => {
    startQuiz();
    navigate({ to: "/quiz" });
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-sm"
      >
        <div
          className="bg-card rounded-2xl shadow-elevated border border-border p-8 flex flex-col items-center gap-6 text-center"
          data-ocid="home.card"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <h1 className="font-display text-5xl font-bold text-foreground leading-tight">
              Quiz Master
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="text-muted-foreground font-body text-sm leading-relaxed"
          >
            Test your knowledge, challenge your friends, and master new topics
            every day!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="w-full"
          >
            <Button
              type="button"
              onClick={handleStart}
              disabled={isLoading}
              className="button-primary w-full text-base py-3 h-auto rounded-xl"
              data-ocid="home.start_button"
            >
              {isLoading ? "Loading..." : "Start Quiz"}
            </Button>
          </motion.div>

          {questions && (
            <p className="text-xs text-muted-foreground">
              {questions.length} questions &middot; No time limit
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
