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



document.querySelector("#old").addEventListener("click", function() {
	video.classList.add ("oldTime"); 
	console.log("Changing to Black and White"); 
	
});


document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove ("oldTime"); 
	console.log("Returning to Color");  
	
	
});

