var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
	ctx.arc(0, 0, radius, 0, 2 * Math.PI);
	ctx.fillStyle = "white";
	ctx.fill();
	drawFace(ctx, radius);
	drawNumbers(ctx, radius);
	drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
	var grad;
	ctx.beginPath();
	ctx.arc(0, 0, radius, 0, 2 * Math.PI);
	ctx.fillStyle = "white";
	ctx.fill();

	grad = ctx.createRadialGradient(0, 0, radius*0.95, 0, 0, radius * 1.05);
	grad.addColorStop(0, '#333');
	grad.addColorStop(0.5, 'white');
	grad.addColorStop(1, '#333');
	ctx.strokeStyle = grad;
	ctx.lineWidth = radius*0.1;
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(0, 0, radius*0.1, 0, 2 * Math.PI);
	ctx.fillStyle = '#333';
	ctx.fill();
}

function drawNumbers(ctx, radius) {
	var ang;
	var num;
	ctx.font = radius * .15 + "px arial";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	for(num = 1; num < 13; num++) {
		ang = num * Math.PI / 6;
		ctx.rotate(ang);
		ctx.translate(0, -radius * .85);
		ctx.rotate(-ang);
		ctx.fillText(num.toString(), 0, 0);
		ctx.rotate(ang);
		ctx.translate(0, radius * .85);
		ctx.rotate(-ang);
	}
}

function drawTime(ctx, radius) {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	//hour
	hour = hour%12;
	hour = (hour*Math.PI/6) + (minute*Math.PI/(6*60)) + (second*Math.PI/(360*60));
	drawHand(ctx, hour, radius*.5, radius*.07);
	//minute
	minute = (minute*Math.PI/30) + (second*Math.PI/(30*60));
	drawHand(ctx, minute, radius*.8, radius*.07);
	//second
	second = (second*Math.PI/30);
	drawHand(ctx, second, radius*.9, radius*.02);
}

function drawHand(ctx, pos, length, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.moveTo(0,0);
	ctx.rotate(pos);
	ctx.lineTo(0, -length);
	ctx.stroke();
	ctx.rotate(-pos);
}

function GitHub () {
	window.open("https://github.com/alexanderzhong");
}

function LinkedIn() {
	window.open("https://www.linkedin.com/in/alexander-zhong-331b79173/");
}

var resVis = false;
function Resume() {
	// window.open("assets/documents/SophomoreResumeV2.pdf", "_self");
	$('#resume_body').fadeIn(300);
	$('#resume_body').toggleClass('fadeDown');
	$('#bio-button').fadeOut(100);
	setTimeout(function () {
	resVis = true;
}, 600);
}

function closeResume() {
	$('#resume_body').fadeOut(300);
	setTimeout(function () {$('#resume_body').toggleClass('fadeDown');}, 300);
	$('#bio-button').fadeIn(100);
	resVis = false;
}

function Paper() {
	window.open("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5714850/");
	console.log('hi');
}

/* Information */

function descend() {
	$('.overlay').delay(1500).fadeOut(500);
	$('.name').fadeOut(500);
	$('.twinkling').fadeOut(200);
	$('.background').addClass('goDown');
	$('.background2').addClass('goDown');
	$('#bio-button').addClass('disappearUp');

	// $('.links').show();
	$('.links').addClass('goDown');

	setTimeout(function () {
		$('#bio-button').hide();
	}, 400);
	setTimeout(function () {
		$('#back-button').removeClass('disappearDown');
		$('#back-button').fadeIn(500);
	}, 2000);
	$('#back-button').delay(2000).fadeIn(500);
	$('#bridge').show();
	$('#bridge').addClass('goDown');
	setTimeout(function () {
		$('#building1').show();
		$('#building1').addClass('goDown');
	}, 1500);
	setTimeout(function () {
		$('#building2').show();
		$('#building2').addClass('goDown');
	}, 2000);
	
	// $('#bio-button').addClass('disappearUp');
	// stars.style.transform = "translateY(-938px)";
	// clouds.style.transform = "translateT(-938px)";
	// $('#bio').fadeOut(500);
}

function goBack() {
	$('.overlay').fadeIn(500);
	$('#bio').fadeOut(300);
	$('.name').delay(1500).fadeIn(500);


	$('.twinkling').delay(2000).fadeIn(100);
	$('.background').removeClass('goDown');
	$('.background2').removeClass('goDown');
	$('#back-button').addClass('disappearDown');
	setTimeout(function () {
		$('#back-button').hide();
	}, 400);
	setTimeout(function () {      
        $('#bio-button').removeClass('disappearUp');
        $('#bio-button').hide();
        $('#bio-button').fadeIn(500);
    }, 2000);
    setTimeout(function () {
    // $('#bridge').fadeOut(500);
   	// $('#building1').fadeOut(500);
   	// $('#paper').fadeOut(500);
   	// $('#building2').fadeOut(500);
    $('#bridge').removeClass('goDown');
    $('#building1').removeClass('goDown');
    $('#building2').removeClass('goDown');
   }, 400);
    $('.links').removeClass('goDown');
	

	// $('#back-button').addClass('disappearDown');
}

var bio_flag = false;
function bioToggle() {
	if(bio_flag) {
		$('#bio').fadeOut(200);
		bio_flag = false;
		setTimeout(function () {
		$('#bio').toggleClass('fadeDown');
		}, 200);
	} else if(!bio_flag && !contact_flag) {
		$('#bio').fadeIn(200);
		$('#bio').toggleClass('fadeDown');
		bio_flag = true;
	}
}

var contact_flag = false;
function contactToggle() {
	if(contact_flag) {
		$('#contact').fadeOut(500);
		contact_flag = false;
	} else if(!contact_flag && !bio_flag){
		$('#contact').fadeIn(500);
		contact_flag = true;
	}
}

function openMail() {
	window.open("mailto:azhong@andrew.cmu.edu?Subject=Contact%20From%20Website", "_top");
}

	// $('#bio').fadeOut(500);

/* Icon Animations */

function revealGitHub() {
	$('#linkedinimg').hide();
	$('#resumeimg').hide();
	$('#githubimg').fadeIn(500);
}

function hideGitHub() {
	$('#githubimg').fadeOut(200);
}

function revealLinkedIn() {
	$('#githubimg').hide();
	$('#resumeimg').hide();
	$('#linkedinimg').fadeIn(500);
}

function hideLinkedIn() {
	$('#linkedinimg').fadeOut(200);
}

function revealResume() {
	$('#githubimg').hide();
	$('#linkedinimg').hide();
	$('#resumeimg').fadeIn(500);
}

function hideResume() {
	$('#resumeimg').fadeOut(200);
}


$("#ghButton").hover(revealGitHub, hideGitHub);

$("#liButton").hover(revealLinkedIn, hideLinkedIn);

$("#rButton").hover(revealResume, hideResume);

// Bio stuff


$(".links").hover(function() {
	var color = $(this).css('color');
  $(this).css('text-shadow', '0 0 10px ' + color);
}, function() {
	var color = $(this).css('color');
  $(this).css('text-shadow', '0 0 5px ' + color);
});

var modal = document.getElementById('resume_body');
window.onclick = function(event) {
  if (!(event.target == modal) && !(event.target == document.getElementById('resume-header'))) {
    // closeResume();
    // $('#resume_body').is(":visible")
    if (resVis) {
    	closeResume();
   	}
    // modal.style.display = "none";
  }
}


//Contact Form
// var fields = {};

// document.addEventListener("DOMContentLoaded", function() {
//  fields.firstName = document.getElementById('firstName');
//  fields.lastName = document.getElementById('lastName');
//  fields.org = document.getElementById('org');
//  fields.email = document.getElementById('email');
//  // fields.country = document.getElementById('country');
//  // fields.password = document.getElementById('password');
//  // fields.passwordCheck = document.getElementById('passwordCheck');
//  // fields.newsletter = document.getElementById('newsletter');
//  // fields.question = document.getElementById('question');
// })

// function isEmail(email) {
// 	let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// 	return regex.test(String(email).toLowerCase());
// }

// function isNotEmpty(value) {
//  if (value == null || typeof value == 'undefined' ) return false;
//  return (value.length > 0);
// }

// function fieldValidation(field, validationFunction) {
// 	if (field == null) return false;

// 	let isFieldValid = validationFunction(field.value)
// 	// if (!isFieldValid) {
// 	// field.className = 'placeholderRed';
// 	// } else {
// 	// field.className = '';
// 	// }

// 	return isFieldValid;
// }

// function isValid() {
// 	var valid = true;

// 	valid &= fieldValidation(fields.firstName, isNotEmpty);
// 	valid &= fieldValidation(fields.lastName, isNotEmpty);
// 	valid &= fieldValidation(fields.org, isNotEmpty);
// 	// valid &= fieldValidation(fields.gender, isNotEmpty);
// 	// valid &= fieldValidation(fields.address, isNotEmpty);
// 	// valid &= fieldValidation(fields.country, isNotEmpty);
// 	valid &= fieldValidation(fields.email, isEmail);
// 	// valid &= fieldValidation(fields.houseNumber, isNumber);
// 	// valid &= fieldValidation(fields.password, isPasswordValid);
// 	// valid &= fieldValidation(fields.passwordCheck, isPasswordValid);
// 	// valid &= fieldValidation(fields.question, isNotEmpty);
// 	// valid &= arePasswordsEqual();

//  return valid;
// }

// function sendContact() {

// }