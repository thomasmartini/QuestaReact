import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Hoe is de route naar het Station Rotterdam Centraal toe? Kon je de entree vinden?',
			answerOptions: [
				{ answerText: 'Audio', isCorrect: true },
				{ answerText: 'Tekst', isCorrect: true },
				{ answerText: 'Foto', isCorrect: true },
			],
		},
		{
			questionText: 'In hoeverre is de entree duidelijk? Weet je wat je moet doen? Waar je heen moet gaan, welke info je waar kan krijgen etc.?',
			answerOptions: [
				{ answerText: 'Audio', isCorrect: true },
				{ answerText: 'Tekst', isCorrect: true },
				{ answerText: 'Foto', isCorrect: true },
			],
		},
		{
			questionText: 'Zijn er bij de binnenkomst obstakels die je tegen komt?',
			answerOptions: [
				{ answerText: 'Audio', isCorrect: true },
				{ answerText: 'Tekst', isCorrect: true },
				{ answerText: 'Foto', isCorrect: true },
			],
		},
		{
			questionText: 'Hoe ervaar je de entree? Prettig/onprettig in gebruik? Waarom?',
			answerOptions: [
				{ answerText: 'Audio', isCorrect: true },
				{ answerText: 'Tekst', isCorrect: true },
				{ answerText: 'Foto', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You answered {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}