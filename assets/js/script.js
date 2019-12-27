function GitHub () {
	window.open("https://github.com/alexanderzhong");
}

function LinkedIn() {
	window.open("https://www.linkedin.com/in/alexander-zhong-331b79173/");
}

function Resume() {
	window.open("assets/documents/SophomoreResumeV2.pdf", "_self");
}

function Paper() {
	window.open("https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5714850/");
	console.log('hi');
}

/* Information */

function revealBio() {
	$('.name').fadeOut(500);
	$('#bio').delay(3500).fadeIn(500);

	// var stars = document.getElementById('stars');
	// var clouds = document.getElementById('clouds');
	// if (document.getElementById('background2').classList.contains('goUp')) {
	// 	$('.background').removeClass('goUp');
	// 	$('#background2').removeClass('goUp');
	// 	$('#background2-extra').removeClass('goUp');
	// }
	$('.twinkling').fadeOut(200);
	$('.background').addClass('goDown');
	$('#background2').addClass('goDown');
	$('#bio-button').addClass('disappearUp');
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
		$('#paper').show();
		$('#paper').addClass('goDown');
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
	if (document.getElementById('background2').classList.contains('goDown')) {
		$('.background').removeClass('goDown');
		$('#background2').removeClass('goDown');
		$('#background2-extra').removeClass('goDown');
	}
	$('#bio').fadeOut(500);
	$('.name').delay(2000).fadeIn(500);


	$('.twinkling').delay(2000).fadeIn(100);
	$('.background').removeClass('goDown');
	$('#background2').removeClass('goDown');
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
    $('#paper').removeClass('goDown');
    $('#building2').removeClass('goDown');
   }, 400);
	

	// $('#back-button').addClass('disappearDown');
}

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


