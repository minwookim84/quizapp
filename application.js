var overallScore = 0;

function clearQpage(){
	$('.qpage').css({"display" : "none"});
}

function showCorrectPage(){
	for (var i = 1; i < 7; i += 1){
		if(question_num === i){
			$('.correctpage').css({"display" : "block"});
			$('.explain').text(explanations[i - 1]);
		}
	}
}

function clearCorrectpage(){
	$('.correctpage').css({"display" : "none"});
}

function showWrongPage(){
	for (var i = 1; i < 7; i += 1){
		if(question_num === i){
			$('.wrongpage').css({"display" : "block"});
			$('.explain').text(explanations[i-1]);
		}
	}
}

function clearWrongPage(){
	$('.wrongpage').css({"display" : "none"});
}


function show1(){
	question_num = 1;
	$('.qpage').css({"display": "block"});
	$('.questions').text(questions[0]);
	$('.qnum').text('1');
	$('#ans1').text(answers.q1[0]);
	$('#ans2').text(answers.q1[1]);
	$('#ans3').text(answers.q1[2]);
	$('#ans4').text(answers.q1[3]);
}

function show2(){
	question_num = 2;
	$('.qpage').css({"display": "block"});
	$('.questions').text(questions[1]);
	$('.qnum').text('2');
	$('#ans1').text(answers.q2[0]).addClass('answer_small');
	$('#ans2').text(answers.q2[1]).addClass('answer_small');
	$('#ans3').text(answers.q2[2]).addClass('answer_small');
	$('#ans4').text(answers.q2[3]).addClass('answer_small');
}


function show3(){
	question_num = 3;
	$('.qpage').css({"display": "block"});
	$('.questions').text(questions[2]);
	$('.qnum').text('3');
	$('#ans1').text(answers.q3[0]).removeClass('answer_small');
	$('#ans2').text(answers.q3[1]).removeClass('answer_small');
	$('#ans3').text(answers.q3[2]).removeClass('answer_small');
	$('#ans4').text(answers.q3[3]).removeClass('answer_small');
}

function show4(){
	question_num = 4;
	$('.qpage').css({"display": "block"});
	$('.questions').text(questions[3]);
	$('.qnum').text('4');
	$('#ans1').text(answers.q4[0]).addClass('answer_mid');
	$('#ans2').text(answers.q4[1]).addClass('answer_mid');
	$('#ans3').text(answers.q4[2]).addClass('answer_mid');
	$('#ans4').text(answers.q4[3]).addClass('answer_mid');
}

function show5(){
	question_num = 5;
	$('.qpage').css({"display": "block"});
	$('.questions').text(questions[4]);
	$('.qnum').text('5');
	$('#ans1').text(answers.q5[0]);
	$('#ans2').text(answers.q5[1]);
	$('#ans3').text(answers.q5[2]);
	$('#ans4').text(answers.q5[3]);
}

function show6(){
	question_num = 6;
	$('.qpage').css({"display": "block"});
	$('.questions').text(questions[5]);
	$('.qnum').text('6');
	$('#ans1').text(answers.q6[0]).removeClass('answer_mid');
	$('#ans2').text(answers.q6[1]).removeClass('answer_mid');
	$('#ans3').text(answers.q6[2]).removeClass('answer_mid');
	$('#ans4').text(answers.q6[3]).removeClass('answer_mid');
}

function showfinish(){
	$('.finishpage').css({"display" : "block"});
	$('#score').text(overallScore);
	$('#scorepercent').text(overallScore/6 * 100);
}


function answerCheck(){
	var correctAnswers = [q1_correct_ans, q2_correct_ans, q3_correct_ans, q4_correct_ans, q5_correct_ans, q6_correct_ans];

	for (var i = 0; i < 6; i += 1){
		if(question_num === i + 1){
			if(useranswer === correctAnswers[i]){
				return true;
			}else{
				return false;
			}
		}
	}
	
}


$(document).ready(function(){
	$('#play').click(function(){
		$('.homepage').css({"display": "none"});
		show1();
	});

	$('.answer').mouseenter(function(){
		$(this).addClass("bgcolor_change");
	});

	$('.answer').mouseleave(function(){
		$(this).removeClass("bgcolor_change");
	});

	$('.answer').click(function(){
		$('.answer').css("background-color", "#E3E4CA");
		$(this).css("background-color", "white");
		useranswer = $(this).html();
	});

	$('#submit').click(function(){
		$('.answer').css("background-color", "#E3E4CA");
		if(answerCheck() === true){
			overallScore += 1;
			clearQpage();
			showCorrectPage();
			console.log(overallScore);
		}else{
			clearQpage();
			showWrongPage();
			console.log(overallScore);
		}
	});

	$('.continue').click(function(){
		clearCorrectpage();
		clearWrongPage();
		var showFunctions = [show1, show2, show3, show4, show5, show6];

		if(question_num === 6){
			showfinish();
		}else{
			for (var i = 0; i < 6; i += 1){
			if(question_num === i){
				showFunctions[i]();
				break;
			}
		}
		}
	});

});
