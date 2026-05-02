import { u as useNavigate, j as jsxRuntimeExports } from "./index-uQsMqViw.js";
import { u as useQuizStateStore, m as motion, B as Button } from "./proxy-LukmoI5v.js";
import { u as useGetQuestions } from "./useQuiz-DMl2gwih.js";
function Home() {
  const navigate = useNavigate();
  const { data: questions, isLoading } = useGetQuestions();
  const { startQuiz } = useQuizStateStore();
  const handleStart = () => {
    startQuiz();
    navigate({ to: "/quiz" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center p-6 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: "easeOut" },
      className: "w-full max-w-sm",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-card rounded-2xl shadow-elevated border border-border p-8 flex flex-col items-center gap-6 text-center",
          "data-ocid": "home.card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { delay: 0.1, duration: 0.4 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl font-bold text-foreground leading-tight", children: "Quiz Master" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.p,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.25, duration: 0.4 },
                className: "text-muted-foreground font-body text-sm leading-relaxed",
                children: "Test your knowledge, challenge your friends, and master new topics every day!"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.4, duration: 0.4 },
                className: "w-full",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    onClick: handleStart,
                    disabled: isLoading,
                    className: "button-primary w-full text-base py-3 h-auto rounded-xl",
                    "data-ocid": "home.start_button",
                    children: isLoading ? "Loading..." : "Start Quiz"
                  }
                )
              }
            ),
            questions && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              questions.length,
              " questions · No time limit"
            ] })
          ]
        }
      )
    }
  ) });
}
export {
  Home as default
};
