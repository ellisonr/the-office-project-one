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
		['David', 'Jan', 'Karen', 'Charles', 'Creed'],
		'Charles'
	),
	new Question(
		'Who won the Athleap/Athlead Investor Award?',
		['Ryan', 'Jim', 'Jan', 'Michael', 'Darryl'],
		'Jim'
	),
	new Question(
		'Who won the I Survived The Dementors Award?',
		['Oscar', 'PrisonMike', 'Pam', 'Roy', 'Kelly'],
		'PrisonMike'
	),
	new Question(
		"Who won the Lackawanna County Volunteer Sheriff's Deputy Award?",
		['Jim', 'Darryl', 'Dwight', 'Angela', 'Meredith'],
		'Dwight'
	),
	new Question(
		'Who won the Not An Alcoholic Award?',
		['Kevin', 'Oscar', 'Michael', 'Devon', 'Meredith'],
		'Meredith'
	),
	new Question(
		'Who won the Founder of Suck It Award?',
		['David', 'Stanley', 'Pam', 'Tony', 'Todd'],
		'David'
	),
	new Question(
		"Who won the Hunter's Secret Lover Award?",
		['Pam', 'Jan', 'Kelly', 'Holly', 'Erin'],
		'Jan'
	),
	new Question(
		'Who won the Your Teeth Called, Your Breath Stinks Award?',
		['Tony', 'Todd', 'Creed', 'David', 'Meredith'],
		'Creed'
	),
	new Question(
		'Who won the Worst Fiance Award?',
		['Jim', 'Roy', 'Charles', 'Michael', 'Stanley'],
		'Roy'
	),
	new Question(
		'Who won the Most Likely To Mind His Business Award?',
		['Dwight', 'Creed', 'Stanley', 'David', 'Devon'],
		'Stanley'
	),
	new Question(
		'Who won the Maybe Filipino, But Definitely Italian Award?',
		['Meredith', 'Karen', 'Erin', 'Gabe', 'Todd'],
		'Karen'
	),
	new Question(
		'Who won the Bushiest Beaver Award?',
		['Phyllis', 'Michael', 'Ryan', 'Pam', 'Kevin'],
		'Phyllis'
	),
	new Question(
		'Who won the I Was Fired Instead Of Creed Award?',
		['Tony', 'Devon', 'Dwight', 'Todd', 'Andy'],
		'Devon'
	),
	new Question(
		'Who won the I Moved 2.5 Billion Units of Paper Material Award?',
		['Darryl', 'Jim', 'Stanley', 'Andy', 'Dwight'],
		'Darryl'
	),
	new Question(
		'Who won the Slower Than Dwight On A Skateboard Award?',
		['Creed', 'Toby', 'Stanley', 'Kevin', 'Roy'],
		'Toby'
	),
	new Question(
		'Who won the Big William Hung Fan Award?',
		['Danny', 'Angela', 'Dwight', 'Todd', 'Hank'],
		'Todd'
	),
];

//questions for Seasons 6-9
const questionsSixToNine = [
	new Question(
		'Who won the Most Likely To Track Down Michael Award?',
		['Kelly', 'Holly', 'Plop', 'Dwight', 'Jan'],
		'Holly'
	),
	new Question(
		'Who won the Same Birthday As Eva Longoria Award?',
		['Holly', 'Karen', 'Dwight', 'Angela', 'Michael'],
		'Michael'
	),
	new Question(
		"Who won the I've Learned To Tune Myself Out Award?",
		['Nellie', 'Stanley', 'Kelly', 'Andy', 'Meredith'],
		'Kelly'
	),
	new Question(
		'Who won the Lizard King Award?',
		['Toby', 'Gabe', 'Robert', 'Plop', 'Oscar'],
		'Robert'
	),
	new Question(
		"Who won the This Job's A Joke Award?",
		['Deangelo', 'Meredith', 'Clark', 'Danny', 'Jim'],
		'Deangelo'
	),
	new Question(
		'Who won the Shut Up About The Sun Award?',
		['Jim', 'Gabe', 'Erin', 'Kevin', 'Deangelo'],
		'Gabe'
	),
	new Question(
		"Who won the Sabre's President of Special Projects Award?",
		['Nellie', 'Todd', 'Stanley', 'Darryl', 'Jo'],
		'Nellie'
	),
	new Question(
		'Who won the Knows The Film Die Hard By Heart Award?',
		['Clark', 'Michael', 'Toby', 'Plop', 'Charles'],
		'Plop'
	),
	new Question(
		'Who won the Dwight Junior Award?',
		['Ryan', 'Kevin', 'Plop', 'Clark', 'David'],
		'Clark'
	),
	new Question(
		'Who won the Also Named Kelly Award?',
		['Phyllis', 'Pam', 'Michael', 'Erin', 'Ryan'],
		'Erin'
	),
	new Question(
		'Who won the Most Likely To Have Two Sets Of Men Duel Over Her Award?',
		['Karen', 'Angela', 'Pam', 'Phyllis', 'Meredith'],
		'Angela'
	),
	new Question(
		'Who won the Nice To Meet Me Award?',
		['DateMike', 'Andy', 'Creed', 'Hank', 'Jan'],
		'DateMike'
	),
	new Question(
		'Who won the World Series of Poker Bracelet Winner Award?',
		['Plop', 'Robert', 'Jo', 'Gabe', 'Kevin'],
		'Kevin'
	),
	new Question(
		'Who won the Nissan Xterra Award?',
		['Kelly', 'Andy', 'Deangelo', 'Hank', 'Erin'],
		'Andy'
	),
	new Question(
		'Who won the Gun Collector Award?',
		['Robert', 'Dwight', 'Oscar', 'Jo', 'Nellie'],
		'Jo'
	),
	new Question(
		'Who won the Better-Looking Version of Andy Award?',
		['Danny', 'Clark', 'Deangelo', 'Gabe', 'Roy'],
		'Danny'
	),
	new Question(
		'Who won the Finer Things Club Member Award?',
		['Andy', 'Erin', 'Phyllis', 'Oscar', 'Holly'],
		'Oscar'
	),
	new Question(
		"Who won the Dwight's Caffeine Corner Employee Award?",
		['Todd', 'Hank', 'Plop', 'Ryan', 'Meredith'],
		'Hank'
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
const main = document.querySelector('main');
let thisQuiz = undefined;
let typeofQuiz = undefined;

$(document).ready(function() {
	$('main').fadeIn(400);
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
			.replace('/', '');
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

	$('.intro').fadeOut(400, () => {
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
		$('.overlay').fadeIn(400);
	} else {
		result.innerHTML = `Sorry, that's incorrect. It's actually <br/>"${
			thisQuiz.getCurrentQuestion().correctAnswer
		}"`;
		$('.overlay').fadeIn(400);
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
			if (thisQuiz.score === 18) {
				ranking.textContent =
					"Perfect score! You must've seen each episode multiple times!";
			} else if (thisQuiz.score >= 14) {
				ranking.textContent =
					'Wow, you must really love The Office! Great job!';
			} else if (thisQuiz.score >= 10) {
				ranking.textContent =
					'Pretty good! You have seen The Office a few times, huh?';
			} else if (thisQuiz.score >= 6) {
				ranking.textContent =
					'Not bad, but maybe you should watch these seasons more.';
			} else if (thisQuiz.score <= 5) {
				ranking.textContent = 'The Office. Ever heard of it?';
			}
		} else if (typeofQuiz === 'seasonSixToNine') {
			if (thisQuiz.score === 18) {
				ranking.textContent =
					"Perfect score! You must've seen each episode multiple times!";
			} else if (thisQuiz.score >= 14) {
				ranking.textContent =
					'Wow, you must really love The Office! Great job!';
			} else if (thisQuiz.score >= 10) {
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
		$('.overlay').fadeOut(400);
	}
});
