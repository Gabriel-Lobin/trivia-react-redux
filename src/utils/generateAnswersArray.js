import shuffle from './shuffleAnswers';

export default function generateAnswersArray(incorrectAnswers, correctAnswer) {
  let answers = [];
  if (incorrectAnswers || correctAnswer) {
    answers = [
      {
        value: correctAnswer,
        correct: true,
      },
      ...incorrectAnswers.map((incAnswer) => ({
        value: incAnswer,
        correct: false,
      })),
    ];
  }

  shuffle(answers);
  return answers;
}
