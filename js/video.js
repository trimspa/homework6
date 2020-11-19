var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol= document.querySelector("#volume");
	vol.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log ("Pause Video"); 
	video.pause(); 
	
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log ("Slow Down"); 
	console.log(video.playbackRate);
	video.playbackRate -= 0.1;

});

document.querySelector("#faster").addEventListener("click", function() {
	console.log ("Speed Up"); 
	console.log(video.playbackRate);
	video.playbackRate += 0.1; 
	
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 5;
	var vid = document.getElementById ("myVideo")
	vid.loop = true
	console.log ("Skipping ahead"); 
	console.log("Current time is " + video.currentTime);
	
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted= false;
		document.querySelector ("#mute").innerHTML = "Mute";
		console.log(video.changeVolume = 100);
	}
	else {
	
	video.muted = true;
	document.querySelector ("#mute").innerHTML = "Unmute";
	console.log(video.changeVolume = 0);	
	
	}
	
});


document.querySelector("#old").addEventListener("click", function() {
	video.classList.add ("oldTime"); 
	console.log("Changing to Black and White"); 
	
});


document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove ("oldTime"); 
	console.log("Returning to Color");  
	
	
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	 slider = document.querySelector("#volumeSlider").value;
	video.volume = slider / 100;
	document.querySelector("#volume").innerHTML = slider + '%';
	console.log(slider);  

});