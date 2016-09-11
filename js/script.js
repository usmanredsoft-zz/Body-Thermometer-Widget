jQuery(document).ready(function(){
	var Game = {
		total_question : QUESTIONS.length,
		thermometerStrip : $('#thermometer .middle span'),
		questionContainer : $('#questionContainer'),
		resultCardContainer : $('#resultCard'),
		statusContainer : $('#statusContainer'),
		gameContainder : $('#gameContainder'),
		scoreContainer : $('#scoreContainer'),
		introContainer : $('#introContainer'),
		startButton : $('#startButton'),
		playAgainButton : $('#playAgain'),
		startGame : function() {
			this.init();
			this.scoreContainer.hide();
			this.introContainer.hide();
			this.gameContainder.show();
		},
		playAgain : function() {
			this.init();
			this.scoreContainer.hide();
			this.gameContainder.hide();
			this.introContainer.show();
		},
		setSelectedValue : function(value) {
			this.selected_value = value;
		},
		getSelectedValue : function() {
			return this.selected_value;
		},
		updateCurrentQuestion : function() {
			if(this.question_number < this.total_question) {
				this.current_question = QUESTIONS[this.question_number];
			} else {
				this.current_question = null;
			}
			this.question_number++;
		},
		getCurrentQuestion : function() {
			return this.current_question;
		},
		isCorrect : function() {
			return (this.current_question && this.current_question.answer == this.selected_value);
		},
		isExceededLimit : function() {
			return (this.attempts_counter >= this.max_chances);
		},
		isAnsweredAll : function() {
			return (this.count_attempted >= this.total_question);
		},
		updateValue : function(value) {
			this.setSelectedValue(value);
			console.log(value);
			// var point = Math.round((value - 94) * 5);
			// console.log(point);
			// point = (point * 4) + 10.5;
			// this.thermometerStrip.height(point);
		},
		updateQuestion : function() {
			this.updateCurrentQuestion();
		},
		showQuestion : function() {
			this.questionContainer.html('Q' + this.question_number + ': ' + this.current_question.title);
		},
		showResultCard : function() {
			var correct = this.correct_counter;
			var wrong = this.total_question - correct;
			var crad = $('<div>')
				.append($('<div>').html('<span>Correct Games : </span>' + correct))
				.append($('<div>').html('<span>Wrong Games : </span>' + wrong));
			this.resultCardContainer.html(crad);
			
			this.gameContainder.hide();
			this.introContainer.hide();
			this.scoreContainer.show();
		},
		showStatus : function(status) {
			var _this = this;
			var src = 'img/' + status + '.png';
			var img = $('<img/>').attr('src', src);
			this.statusContainer.html(img).fadeIn('slow');
			clearTimeout(this.status_timeId);
			this.status_timeId = setTimeout(function(){
				_this.statusContainer.fadeOut('slow');
			}, 2000);
		},
		checkValue : function(element, event) {
			var status = 'incorrect';
			if(this.isCorrect() || this.isExceededLimit()) {
				if(this.isCorrect()) {
					this.correct_counter++;
					status = 'correct';
				}
				this.attempts_counter = 0;
				this.count_attempted++;
				this.updateQuestion();
				if(!this.isAnsweredAll()) {
					this.showQuestion();
				} else {
					this.showResultCard();
				}
			} else {
				this.attempts_counter++;
			}
			if(this.isAnsweredAll()) {
				this.showResultCard();
			}
			this.showStatus(status);
		},
		init : function() {
			this.selected_value = 0;
			this.attempts_counter = 0;
			this.correct_counter = 0;
			this.question_number = 0;
			this.count_attempted = 0;
			this.max_chances = 3;
			this.current_question = null;
			this.status_timeId = null;

			this.updateCurrentQuestion();
			this.showQuestion();
		},
	};
	Game.init();


	$(".slider").slider({ 
        min: 94, 
        max: 106,
        step: 0.1,
        range: "min",
        orientation: "vertical"
    })            
    .slider("pips", {
        rest: "label",
        first: "pip",
        last: "pip",
        step: 1,
    })
    // and whenever the slider changes, lets echo out the month
    .on("slide slidechange", function(e,ui) {
    	Game.updateValue(ui.value);
    });

    $("#checkResult").click(function(e){
    	Game.checkValue(this, e);
    	console.log(Game);
    });

    $("#startButton").click(function(e) {
    	Game.startGame();
    });
    $("#playAgain").click(function(e) {
    	Game.playAgain();
    });

});