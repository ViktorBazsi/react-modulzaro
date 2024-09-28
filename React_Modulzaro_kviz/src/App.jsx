import React, { useState, useEffect } from 'react';
import Quiz from './Quiz';
import Result from './Result';

const App = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            const response = await fetch('http://localhost:3000/questions');
            const data = await response.json();

            setQuestions(data.sort(() => Math.random() - 0.5));
        };

        fetchQuestions();
    }, []);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsFinished(true);
        }
    };

    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setIsFinished(false);

        setQuestions(questions.sort(() => Math.random() - 0.5));
    };

    return (
        <div>
            {isFinished ? (
                <Result score={score} total={questions.length} restartQuiz={restartQuiz} />
            ) : (
                <Quiz 
                    questions={questions} 
                    currentQuestionIndex={currentQuestionIndex} 
                    handleAnswer={handleAnswer} 
                />
            )}
        </div>
    );
};

export default App;
