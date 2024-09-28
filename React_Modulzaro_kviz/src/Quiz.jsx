import React from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';

const Quiz = ({ questions, currentQuestionIndex, handleAnswer }) => {
    const currentQuestion = questions[currentQuestionIndex];
    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort(() => Math.random() - 0.5);
    const isCorrect = (answer) => answer === currentQuestion.correct_answer;

    return (
        <div>
            <ProgressBar currentQuestionIndex={currentQuestionIndex} totalQuestions={questions.length} />
            <Question 
                question={currentQuestion.question} 
                answers={answers} 
                handleAnswer={(answer) => handleAnswer(isCorrect(answer))} 
            />
        </div>
    );
};

export default Quiz;
