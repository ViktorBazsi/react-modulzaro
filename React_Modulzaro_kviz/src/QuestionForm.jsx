import React, { useState } from 'react';

const QuestionForm = ({ addQuestion }) => {
    const [question, setQuestion] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [incorrectAnswers, setIncorrectAnswers] = useState(['', '']);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuestion = {
            question,
            correct_answer: correctAnswer,
            incorrect_answers: incorrectAnswers
        };
        addQuestion(newQuestion);
        setQuestion('');
        setCorrectAnswer('');
        setIncorrectAnswers(['', '']);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Kérdés" value={question} onChange={(e) => setQuestion(e.target.value)} required />
            <input type="text" placeholder="Helyes válasz" value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} required />
            {incorrectAnswers.map((answer, index) => (
                <input 
                    key={index} 
                    type="text" 
                    placeholder="Helytelen válasz" 
                    value={answer} 
                    onChange={(e) => {
                        const newAnswers = [...incorrectAnswers];
                        newAnswers[index] = e.target.value;
                        setIncorrectAnswers(newAnswers);
                    }} 
                    required 
                />
            ))}
            <button type="submit">Kérdés hozzáadása</button>
        </form>
    );
};

export default QuestionForm;
