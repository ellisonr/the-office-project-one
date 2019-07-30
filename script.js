//create Question class
class Question {
	constructor(singleQuestion, possibleAnswers, correctAnswer) {
		this.singleQuestion = singleQuestion;
		this.possibleAnswers = possibleAnswers;
		this.correctAnswer = correctAnswer;
	}

	isAnswerCorrect(chosenAnswer) {
		if (chosenAnswer === this.correctAnswer) {
			return true;
		} else return false;
	}
}

//create Quiz class
class Quiz {
	constructor(questions) {
		this.questions = questions;
		this.score = 0;
		this.questionNum = 0;
	}

	increaseScore() {
		this.score++;
	}

	getCurrentQuestion() {
		return this.questions[this.questionNum];
	}

	nextQuestion() {
		this.questionNum++;
	}

	areQuestionsDone() {
		if (this.questionNum === this.questions.length) {
			return true;
		} else return false;
	}
}
//questions for Seasons 1-5
const questionsOneToFive = [
	new Question(
		'Who won the Longest Engagement Award?',
		['Andy', 'Angela', 'David', 'Dwight', 'Pam'],
		'Pam'
	),
	new Question(
		'Who won the Most Likely To Start A Fire Award?',
		['Ryan', 'Oscar', 'Darryl', 'Meredith', 'Stanley'],
		'Ryan'
	),
	new Question(
		'Who won the Where Is That Rundown Award?',
		['Kevin', 'Phyllis', 'Karen', 'Charles', 'Creed'],
		'Charles'
	),
	new Question(
		'Who won the - Award?',
		['Ryan', 'Jim', 'Jan', 'Michael', 'Angela'],
		'Jim'
	),
	new Question(
		'Who won the I Survived The Dementors Award?',
		['Creed', 'PrisonMike', 'Pam', 'Roy', 'Kelly'],
		'PrisonMike'
	),
	new Question(
		'Who won the - Award?',
		['Jim', 'Darryl', 'Dwight', 'Angela', 'Meredith'],
		'Dwight'
	),
	new Question(
		'Who won the Not An Alcoholic Award?',
		['Jim', 'Oscar', 'Michael', 'Devon', 'Meredith'],
		'Meredith'
	),
	new Question(
		'Who won the - Award?',
		['David', 'Stanley', 'Pam', 'Tony', 'Todd'],
		'David'
	),
	new Question(
		'Who won the - Award?',
		['Michael', 'Jan', 'Oscar', 'Angela', 'Toby'],
		'Jan'
	),
	new Question(
		'Who won the Your Teeth Called, Your Breath Stinks Award?',
		['Kelly', 'Andy', 'Creed', 'David', 'Meredith'],
		'Creed'
	),
	new Question(
		'Who won the - Award?',
		['Pam', 'Roy', 'Charles', 'Dwight', 'Karen'],
		'Roy'
	),
	new Question(
		'Who won the - Award?',
		['Dwight', 'Creed', 'Stanley', 'Phyllis', 'Michael'],
		'Stanley'
	),
	new Question(
		'Who won the - Award?',
		['Meredith', 'Karen', 'Darryl', 'Roy', 'Oscar'],
		'Karen'
	),
	new Question(
		'Who won the Bushiest Beaver Award?',
		['Phyllis', 'Michael', 'Ryan', 'Pam', 'Kevin'],
		'Phyllis'
	),
	new Question(
		'Who won the I Was Fired Instead Of Creed Award?',
		['Michael', 'Devon', 'Dwight', 'Kelly', 'Jan'],
		'Devon'
	),
];

//questions for Seasons 6-9
const questionsSixToNine = [
	new Question(
		'Who won the Longest Engagement Award?',
		['Kelly', 'Holly', 'Plop', 'Erin', 'Jan'],
		'Holly'
	),
	new Question(
		'Who won the Big William Hung Fan Award?',
		['Clark', 'Angela', 'Dwight', 'Todd', 'Hank'],
		'Todd'
	),
	new Question(
		'Who won the - Award?',
		['Nellie', 'Stanley', 'Kelly', 'Andy', 'Meredith'],
		'Kelly'
	),
	new Question(
		'Who won the - Award?',
		['Ryan', 'Gabe', 'Robert', 'Jan', 'Kelly'],
		'Robert'
	),
	new Question(
		'Who won the This Job Is A Joke Award?',
		['Deangelo', 'Meredith', 'Clark', 'Danny', 'Michael'],
		'Deangelo'
	),
	new Question(
		'Who won the Shut Up About The Sun Award?',
		['Jim', 'Gabe', 'Erin', 'Kevin', 'David'],
		'Gabe'
	),
	new Question(
		'Who won the - Award?',
		['Nellie', 'Jim', 'Kelly', 'Toby', 'Angela'],
		'Nellie'
	),
	new Question(
		'Who won the - Award?',
		['Meredith', 'Michael', 'Toby', 'Plop', 'Charles'],
		'Plop'
	),
	new Question(
		'Who won the Dwight Junior Award?',
		['Clark', 'Nellie', 'Erin', 'Ryan', 'Darryl'],
		'Clark'
	),
	new Question(
		'Who won the - Award?',
		['Phyllis', 'Pam', 'David', 'Erin', 'Dwight'],
		'Erin'
	),
	new Question(
		'Who won the Most Likely To Have Two Sets Of Men Duel Over Her Award?',
		['Michael', 'Angela', 'Kevin', 'Toby', 'Meredith'],
		'Angela'
	),
	new Question(
		'Who won the - Award?',
		['DateMike', 'Andy', 'Creed', 'Dwight', 'Jan'],
		'DateMike'
	),
	new Question(
		'Who won the - Award?',
		['Plop', 'Robert', 'Jo', 'Gabe', 'Plop'],
		'Kevin'
	),
	new Question(
		'Who won the - Award?',
		['Kelly', 'Andy', 'Deangelo', 'Hank', 'Erin'],
		'Andy'
	),
	new Question(
		'Who won the - Award?',
		['Holly', 'Plop', 'Angela', 'Jo', 'Nellie'],
		'Jo'
	),
];

//set variables for necessary querySelectors
const questionNumber = document.querySelector('.question-number');
const oldQuizButton = document.querySelector('#old-quiz');
const newQuizButton = document.querySelector('#new-quiz');
const nextButton = document.querySelector('.next-button');
const answers = document.querySelector('.answers');
const overlay = document.querySelector('.overlay');
const result = document.querySelector('#result');
const score = document.querySelector('#score');
const main = document.querySelector('main');
let thisQuiz = undefined;
let typeofQuiz = undefined;

$(document).ready(function() {
	$('main').fadeIn(600);
});

//create function to display current question
function showCurrentQuestion() {
	const currentQuestion = thisQuiz.getCurrentQuestion();
	document.querySelector('.question').textContent =
		currentQuestion.singleQuestion;
	questionNumber.innerHTML = `Question ${thisQuiz.questionNum + 1}`;
	let answersList = document.createElement('ul');
	for (let i = 0; i < currentQuestion.possibleAnswers.length; i++) {
		let answersItem = document.createElement('li');
		let replacedItem = currentQuestion.possibleAnswers[i]
			.split(' ')
			.join('')
			.replace(',', '')
			.replace(':', '')
			.replace('.', '')
			.replace("'", '')
			.replace('/', '')
			.toLowerCase();
		let indexOfDash = replacedItem.indexOf('-');
		if (indexOfDash >= 0) {
			replacedItem = replacedItem.substring(0, indexOfDash);
		}
		replacedItem = `images/${replacedItem}.jpg`;
		let image = document.createElement('img');
		image.setAttribute('src', replacedItem);
		answersItem.textContent = currentQuestion.possibleAnswers[i];
		answersItem.appendChild(image);
		answersList.appendChild(answersItem);
	}
	answers.innerHTML = '';
	answers.appendChild(answersList);

	$('.intro').fadeOut(450, () => {
		$('.question-container').fadeIn();
	});
}

//add event listener for season 1-5 quiz button
oldQuizButton.addEventListener('click', function(e) {
	e.preventDefault();
	typeofQuiz = 'seasonOneToFive';
	thisQuiz = new Quiz(questionsOneToFive);
	showCurrentQuestion();
});

//add event listener for season 6-9 quiz button
newQuizButton.addEventListener('click', function(e) {
	e.preventDefault();
	typeofQuiz = 'seasonSixToNine';
	thisQuiz = new Quiz(questionsSixToNine);
	showCurrentQuestion();
});

//add event listeners for the actual answers
answers.addEventListener('click', function(e) {
	let answerValidity = thisQuiz
		.getCurrentQuestion()
		.isAnswerCorrect(e.target.textContent);
	if (answerValidity) {
		thisQuiz.increaseScore();
		result.textContent = "You're right!";
		$('.overlay').fadeIn(500);
	} else {
		result.innerHTML = `Sorry, that's incorrect. It's actually <br/>"${
			thisQuiz.getCurrentQuestion().correctAnswer
		}"`;
		$('.overlay').fadeIn(500);
	}
});

//add event listener for the next button
nextButton.addEventListener('click', function(e) {
	thisQuiz.nextQuestion();
	const done = thisQuiz.areQuestionsDone();
	if (done) {
		main.innerHTML = `<h2>All done!</h2> <div class="final-score">You Scored:<br/><span>${
			thisQuiz.score
		}/${
			thisQuiz.questions.length
		}</span></div><div class="ranking"></div><div class="quiz-type-container"><a class="quiz-type-button" href="index.html" >Play again?</a></div>`;
		const ranking = document.querySelector('.ranking');

		if (typeofQuiz === 'seasonOneToFive') {
			if (thisQuiz.score === 15) {
				ranking.textContent =
					"Perfect score! You must've seen each episode multiple times!";
			} else if (thisQuiz.score >= 12) {
				ranking.textContent =
					'Wow, you must really love The Office! Great job!';
			} else if (thisQuiz.score >= 9) {
				ranking.textContent =
					'Pretty good! You have seen The Office a few times, huh?';
			} else if (thisQuiz.score >= 6) {
				ranking.textContent =
					'Not bad, but maybe you should watch these seasons more.';
			} else if (thisQuiz.score <= 5) {
				ranking.textContent = 'The Office. Ever heard of it?';
			}
		} else if (typeofQuiz === 'seasonSixToNine') {
			if (thisQuiz.score === 15) {
				ranking.textContent =
					"Perfect score! You must've seen each episode multiple times!";
			} else if (thisQuiz.score >= 12) {
				ranking.textContent =
					'Wow, you must really love The Office! Great job!';
			} else if (thisQuiz.score >= 9) {
				ranking.textContent =
					'Pretty good! You have seen The Office a few times, huh?';
			} else if (thisQuiz.score >= 6) {
				ranking.textContent =
					'Not bad, but maybe you should watch these seasons more.';
			} else if (thisQuiz.score <= 5) {
				ranking.textContent = 'The Office. Ever heard of it?';
			}
		}
	} else {
		showCurrentQuestion();
		result.textContent = '';
		$('.overlay').fadeOut(500);
	}
});
