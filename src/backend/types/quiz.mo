import Debug "mo:core/Debug";

module {
  public type QuestionId = Nat;

  public type Question = {
    id : QuestionId;
    text : Text;
    options : [Text];
    correctIndex : Nat;
  };

  public type AnswerSubmission = {
    answers : [Nat];
  };

  public type QuizResult = {
    totalQuestions : Nat;
    correctCount : Nat;
    incorrectCount : Nat;
    score : Nat;
  };
};
