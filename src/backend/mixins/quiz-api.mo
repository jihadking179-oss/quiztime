import Debug "mo:core/Debug";
import Types "../types/quiz";
import QuizLib "../lib/quiz";

mixin () {
  public query func getQuestions() : async [Types.Question] {
    Debug.todo();
  };

  public func submitAnswers(submission : Types.AnswerSubmission) : async Types.QuizResult {
    Debug.todo();
  };
};
