// Re-exports from the Zustand store to satisfy the useQuizState contract.
// Components should prefer useQuizStateStore directly for full store access.
export { useQuizStateStore as useQuizState } from "@/hooks/useQuizStateStore";
export type {} from "@/hooks/useQuizStateStore";
