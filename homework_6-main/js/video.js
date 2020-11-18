var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol= document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log ("Pause Video"); 
	video.pause(); 
	
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log ("Slow Down"); 
	video.playbackRate= 0.5; 
	
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log ("Speed Up"); 
	video.playbackRate= 1.5; 
	
});



document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log (this); 
	console.log(this.value); 
	video.volumeSlider();
	
	
});

