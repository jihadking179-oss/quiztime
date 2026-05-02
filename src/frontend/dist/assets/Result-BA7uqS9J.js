import { u as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-uQsMqViw.js";
import { u as useQuizStateStore, m as motion, B as Button } from "./proxy-LukmoI5v.js";
function Result() {
  const navigate = useNavigate();
  const { result, status, restartQuiz } = useQuizStateStore();
  reactExports.useEffect(() => {
    if (status === "idle" || !result) {
      navigate({ to: "/" });
    }
  }, [status, result, navigate]);
  if (!result) return null;
  const scoreLabel = result.score >= 80 ? "Excellent!" : result.score >= 60 ? "Well Done!" : result.score >= 40 ? "Good Try!" : "Keep Practicing!";
  const handleRestart = () => {
    restartQuiz();
    navigate({ to: "/" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center p-6 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.45, ease: "easeOut" },
      className: "w-full max-w-sm",
      "data-ocid": "result.card",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl shadow-elevated border border-border p-8 flex flex-col items-center gap-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h2,
          {
            initial: { opacity: 0, y: -12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.1 },
            className: "font-display text-3xl font-semibold text-foreground",
            "data-ocid": "result.headline",
            children: scoreLabel
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { delay: 0.2, type: "spring", stiffness: 200 },
            className: "flex flex-col items-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "font-display text-6xl font-bold text-foreground",
                  "data-ocid": "result.score",
                  children: [
                    result.correctCount,
                    "/",
                    result.totalQuestions
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground font-body mt-1", children: [
                result.score,
                "% score"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.35 },
            className: "w-full bg-muted/30 rounded-xl border border-border px-5 py-4 flex flex-col gap-2",
            "data-ocid": "result.stats_panel",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-accent inline-block" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-body text-foreground", children: "Correct:" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-sm font-semibold font-body text-foreground",
                    "data-ocid": "result.correct_count",
                    children: result.correctCount
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-destructive inline-block" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-body text-foreground", children: "Incorrect:" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-sm font-semibold font-body text-foreground",
                    "data-ocid": "result.incorrect_count",
                    children: result.incorrectCount
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 8 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.5 },
            className: "w-full",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                onClick: handleRestart,
                className: "button-primary w-full text-base py-3 h-auto rounded-xl",
                "data-ocid": "result.restart_button",
                children: "Restart Quiz"
              }
            )
          }
        )
      ] })
    }
  ) });
}
export {
  Result as default
};
